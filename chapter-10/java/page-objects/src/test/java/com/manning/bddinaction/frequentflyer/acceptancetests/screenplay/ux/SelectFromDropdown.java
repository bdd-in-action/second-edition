package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.ux;

import net.serenitybdd.screenplay.Performable;
import net.serenitybdd.screenplay.Task;
import net.serenitybdd.screenplay.actions.Click;
import net.serenitybdd.screenplay.targets.Target;
import net.serenitybdd.screenplay.waits.WaitUntil;

import static net.serenitybdd.screenplay.matchers.WebElementStateMatchers.isVisible;

/**
 * Select an element in an Angular Material dropdown (mat-select) component.
 */
public class SelectFromDropdown {
    private final Target dropdownLocator;

    public SelectFromDropdown(Target dropdownLocator) {
        this.dropdownLocator = dropdownLocator;
    }

    public static SelectFromDropdown locatedBy(Target dropdownLocator) {
        return new SelectFromDropdown(dropdownLocator);
    }

    public Performable selectingOption(String option) {
        return Task.where("{0} selects  '" + option + "' from " + dropdownLocator,
                Click.on(dropdownLocator),
                WaitUntil.the(MaterialComponents.MATERIAL_OPTION.of(option), isVisible()),
                Click.on(MaterialComponents.MATERIAL_OPTION.of(option))
        );
    }
}
