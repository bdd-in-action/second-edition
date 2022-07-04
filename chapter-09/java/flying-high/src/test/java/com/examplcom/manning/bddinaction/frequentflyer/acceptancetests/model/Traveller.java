package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.model;

public class Traveller {

    private String firstName;
    private String lastName;
    private String email;
    private String street;
    private String city;
    private String state;
    private String postCode;
    private String country;
    private String telephone;
    private String dateOfBirth;

    public Traveller(String firstName,
                     String lastName,
                     String email,
                     String street,
                     String city,
                     String state,
                     String postCode,
                     String country,
                     String telephone,
                     String dateOfBirth) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.street = street;
        this.city = city;
        this.state = state;
        this.postCode = postCode;
        this.country = country;
        this.telephone = telephone;
        this.dateOfBirth = dateOfBirth;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getStreet() {
        return street;
    }

    public String getCity() {
        return city;
    }

    public String getPostCode() {
        return postCode;
    }

    public String getCountry() {
        return country;
    }
}
