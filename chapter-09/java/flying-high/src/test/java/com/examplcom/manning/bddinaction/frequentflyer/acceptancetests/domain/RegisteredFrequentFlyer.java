package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.domain;

public enum RegisteredFrequentFlyer {
    Tracy("tracy@flyinghigh.com","trac3");

    public final String email;
    public final String password;

    RegisteredFrequentFlyer(String email, String password) {
        this.email = email;
        this.password = password;
    }
}
