import {
  Ensure,
  equals,
  includes,
  isPresent,
  not
} from '@serenity-js/assertions';
import { Duration, Task, Wait } from '@serenity-js/core';
import { Click, isVisible, Text } from '@serenity-js/web';
import { Toaster } from '../ui';

export class ConfirmSubmission {
  static succeededWith(expectedMessage: string) {
    return Task.where(`#actor confirms successful form submission`,
      ConfirmSubmission.hasMessage(expectedMessage),
      ConfirmSubmission.hasStatus('success'),
      ConfirmSubmission.dismissMessage(),
    );
  }

  static failedWith(expectedMessage: string) {
    return Task.where(`#actor confirms failed form submission`,
      ConfirmSubmission.hasMessage(expectedMessage),
      ConfirmSubmission.hasStatus('error'),
      ConfirmSubmission.dismissMessage(),
    );
  }

  private static hasMessage(expectedMessage: string) {
    return Task.where(`#actor confirms notification includes ${ expectedMessage }`,
      Wait.until(Toaster.message(), isPresent()),
      Ensure.that(Text.of(Toaster.message()), includes(expectedMessage)),
    );
  }

  private static hasStatus(expectedStatus: 'success' | 'error') {
    return Task.where(`#actor confirms form submission status of ${ expectedStatus }`,
      Wait.until(Toaster.message(), isPresent()),
      Ensure.that(Toaster.status(), equals(expectedStatus)),
    );
  }

  private static dismissMessage() {
    return Task.where(`#actor dismisses the message`,
      Wait.until(Toaster.message(), isPresent()),
      Click.on(Toaster.message()),
      Wait.until(Toaster.message(), not(isVisible())),
    );
  }
}

