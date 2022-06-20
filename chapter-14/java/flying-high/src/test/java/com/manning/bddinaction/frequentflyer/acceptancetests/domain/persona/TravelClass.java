package com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona;

import java.util.Arrays;

public enum TravelClass {
    ECONOMY("Economy"), PREMIUM_ECONOMY("Premium Economy"), BUSINESS("Business");

    private final String label;

    TravelClass(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }

    public static TravelClass withLabel(String label) {
        return Arrays.stream(values())
                .filter( entry -> entry.label.equals(label))
                .findFirst()
                .orElseThrow(() -> new IllegalArgumentException("Unknown travel class " + label));
    }
}
