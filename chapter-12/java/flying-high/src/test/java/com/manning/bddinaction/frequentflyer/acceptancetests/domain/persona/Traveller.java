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

    public Traveller(String email, String password, String title, String firstName, String lastName, String address, String country, String seatPreference) {
        this.email = email;
        this.password = password;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.country = country;
        this.seatPreference = seatPreference;
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

    public Traveller withARandomEmail() {
        return new Traveller(random(email), password, title, firstName, lastName, address, country, seatPreference);
    }

    private String random(String value) {
        return value + "-" + new Random().nextLong();
    }

    public Traveller withAnEmptyValueFor(String field) {
        return switch (field) {
            case "email" -> new Traveller("", password, title, firstName, lastName, address, country, seatPreference);
            case "password" -> new Traveller(random(email), "", title, firstName, lastName, address, country, seatPreference);
            case "firstName" -> new Traveller(random(email), password, title, "", lastName, address, country, seatPreference);
            case "lastName" -> new Traveller(random(email), password, title, firstName, "", address, country, seatPreference);
            case "address" -> new Traveller(random(email), password, title, firstName, lastName, "", country, seatPreference);
            case "country" -> new Traveller(random(email), password, title, firstName, lastName, address, "", seatPreference);
            case "agreesToTerms" -> new Traveller(random(email), password, title, firstName, lastName, address, country, seatPreference);
            default -> this;
        };
    }
}
