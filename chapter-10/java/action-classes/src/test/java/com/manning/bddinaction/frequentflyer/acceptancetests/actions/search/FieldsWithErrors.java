package com.manning.bddinaction.frequentflyer.acceptancetests.actions.search;

import net.serenitybdd.core.steps.UIInteractionSteps;

import java.util.List;
import java.util.stream.Collectors;

public class FieldsWithErrors extends UIInteractionSteps {
    public List<String> currentlyVisible() {
        return findAll(SearchForm.MISSING_FIELD_LABELS).stream()
                .map(label -> label.getText().trim().replace(" *", ""))
                .collect(Collectors.toList());
    }
}
