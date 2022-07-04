package com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona;

import java.util.Random;

public class Traveller {
    private final String email;
    private final String password;
    private final String title;
    private final String firstName;
    private final String lastName;
    private final String address;
    private final String country;
    private final String seatPreference;
    private final Boolean agreesToTerms;

    public Traveller(String email, String password, String title, String firstName, String lastName, String address, String country, String seatPreference, boolean agreesToTerms) {
        this.email = email;
        this.password = password;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.country = country;
        this.seatPreference = seatPreference;
        this.agreesToTerms = agreesToTerms;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getTitle() {
        return title;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getAddress() {
        return address;
    }

    public String getCountry() {
        return country;
    }

    public String getSeatPreference() {
        return seatPreference;
    }

    public Traveller withNoValueFor(String field) {
        return switch (field) {
            case "email" -> new Traveller("", password, title, firstName, lastName, address, country, seatPreference, agreesToTerms);
            case "password" -> new Traveller(random(email), "", title, firstName, lastName, address, country, seatPreference, agreesToTerms);
            case "firstName" -> new Traveller(random(email), password, title, "", lastName, address, country, seatPreference, agreesToTerms);
            case "lastName" -> new Traveller(random(email), password, title, firstName, "", address, country, seatPreference, agreesToTerms);
            case "address" -> new Traveller(random(email), password, title, firstName, lastName, "", country, seatPreference, agreesToTerms);
            case "country" -> new Traveller(random(email), password, title, firstName, lastName, address, "", seatPreference, agreesToTerms);
            case "agreesToTerms" -> new Traveller(random(email), password, title, firstName, lastName, address, country, seatPreference, false);
            default -> this;
        };
    }

    private String random(String value) {
        return value + "-" + new Random().nextLong();
    }

    public boolean agreesToTerms() {
        return agreesToTerms;
    }
}
