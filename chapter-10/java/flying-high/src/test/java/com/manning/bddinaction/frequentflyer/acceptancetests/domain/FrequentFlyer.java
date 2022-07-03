package com.manning.bddinaction.frequentflyer.acceptancetests.domain;

public enum FrequentFlyer {
    Tracy("tracy@flyinghigh.com", "trac3");

    public final String email;
    public final String password;

    FrequentFlyer(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
