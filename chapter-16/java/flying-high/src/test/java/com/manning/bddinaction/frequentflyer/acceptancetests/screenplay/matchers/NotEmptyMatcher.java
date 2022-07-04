package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.matchers;

import net.serenitybdd.core.pages.WebElementState;
import net.serenitybdd.screenplay.matchers.statematchers.WebElementStateDescription;
import org.hamcrest.Description;
import org.hamcrest.TypeSafeMatcher;

public class NotEmptyMatcher<T extends WebElementState> extends TypeSafeMatcher<T> {
    public NotEmptyMatcher() {
    }

    protected boolean matchesSafely(T element) {
        return element.isVisible() && !element.getText().isEmpty();
    }

    public void describeTo(Description description) {
        description.appendText("an element that is not empty");
    }

    protected void describeMismatchSafely(T item, Description mismatchDescription) {
        mismatchDescription.appendText(WebElementStateDescription.forElement(item));
    }
}