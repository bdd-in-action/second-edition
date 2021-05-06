package com.manning.bddinaction.frequentflyer.acceptancetests.domain;

public enum FrequentFlyer {
    Amy("admin@flyinghigh.com", "admin");

    public final String email;
    public final String password;

    FrequentFlyer(String email, String password) {
        this.email = email;
        this.password = password;
    }

    @Override
    public String toString() {
        return this.name() + " (" + email +")";
    }
}
