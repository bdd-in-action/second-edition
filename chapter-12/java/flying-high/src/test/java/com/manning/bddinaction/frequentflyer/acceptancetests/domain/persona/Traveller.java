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
        return new Traveller(email + "-" + new Random().nextLong(), password, title, firstName, lastName, address, country, seatPreference);
    }
}
