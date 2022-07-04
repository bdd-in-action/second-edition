package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.matchers;

import net.serenitybdd.core.pages.WebElementState;
import net.serenitybdd.screenplay.matchers.statematchers.IsVisibleMatcher;
import org.hamcrest.Matcher;

public class CustomWebElementMatchers {
    public static <T extends WebElementState> Matcher<T> isNotEmpty() {
        return new NotEmptyMatcher<>();
    }
}
