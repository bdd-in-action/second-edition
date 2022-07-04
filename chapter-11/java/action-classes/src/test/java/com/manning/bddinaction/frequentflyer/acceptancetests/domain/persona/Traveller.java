package com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.UserLevel;

import java.lang.reflect.Field;
import java.util.Random;

public class Traveller {
    private String userId;
    private String email;
    private String password;
    private String title;
    private String firstName;
    private String lastName;
    private String address;
    private String country;
    private String seatPreference;
    private Boolean newsletterSub;
    private Boolean agreesToTermsAndConditions;
    private Integer points;
    private String userLevel;

    public Traveller(String email, String password, String title, String firstName, String lastName, String address, String country, String seatPreference, Boolean newsletterSub, Boolean agreesToTermsAndConditions) {
        this.email = email;
        this.password = password;
        this.title = title;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.country = country;
        this.seatPreference = seatPreference;
        this.newsletterSub = newsletterSub;
        this.agreesToTermsAndConditions = agreesToTermsAndConditions;
    }

    public Traveller withAUniqueEmailAddress() {
        return new Traveller(
                this.email.replace("@", "" + new Random().nextInt() + "@"),
                password, title, firstName, lastName, address, country, seatPreference, newsletterSub, agreesToTermsAndConditions
        );
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

    public Boolean getNewsletterSub() {
        return newsletterSub;
    }

    public String getUserId() {
        return userId;
    }

    public Integer getPoints() {
        return points;
    }

    public UserLevel getUserLevel() {
        return UserLevel.valueOf(userLevel.toUpperCase());
    }

    public Traveller withEmail(String email) {
        return new Traveller(email, password, title, firstName, lastName, address, country, seatPreference, newsletterSub, agreesToTermsAndConditions);
    }

    public Traveller whoDoesNotApproveTheTermsAndConditions() {
        return new Traveller(email, password, title, firstName, lastName, address, country, seatPreference, newsletterSub, false);
    }

    public Traveller withEmptyValueFor(String fieldName) {
        Traveller travellerWithMissingField = new Traveller(email, password, title, firstName, lastName, address, country, seatPreference, newsletterSub, agreesToTermsAndConditions);

        try {
            Field emptyField = Traveller.class.getDeclaredField(fieldName);
            emptyField.set(travellerWithMissingField, "");
        } catch (NoSuchFieldException | IllegalAccessException e) {
            e.printStackTrace();
        }
        return travellerWithMissingField;
    }

    public Traveller withId(String userId) {
        this.userId = userId;
        return this;
    }

    public Traveller withPoints(int points) {
        this.points = points;
        return this;
    }

    public Traveller withLevel(UserLevel userLevel) {
        this.userLevel = userLevel.name();
        return this;
    }



    public boolean agreesToTermsAndConditions() {
        return agreesToTermsAndConditions;
    }

}
