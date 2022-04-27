import { equals, isPresent } from '@serenity-js/assertions';
import { By, PageElement, PageElements, Text } from '@serenity-js/web';

export class Form {
    static buttonCalled = (name: string) =>
        Form.buttons()
            .where(Text, equals(name))
            .first()
            .describedAs(`the "${ name }" button`)

    static inputFor = (name: string) =>
        Form.input()
            .of(Form.fieldCalled(name))
            .describedAs(`the "${ name }" field`)

    private static fieldCalled = (name: string) =>
        Form.fields()
            .where(Form.label(), isPresent())
            .where(Text.of(Form.label()), equals(name))
            .first()

    private static buttons = () =>
        PageElements.located(By.css('form button'))
            .describedAs('buttons');

    public static fields = () =>
        PageElements.located(By.css('mat-form-field'))
            .describedAs('form fields');

    public static label = () =>
        PageElement.located(By.css('label > mat-label, label > span'))
            .describedAs('label')

    private static input = () =>
        PageElement.located(By.css('input'))

    static errorMessage = () =>
        PageElement.located(By.css('mat-error'));
}
