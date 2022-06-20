package com.manning.bddinaction.frequentflyer.acceptancetests.domain.persona;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.UserLevel;

import java.util.Random;

public record Traveller(
        @JsonProperty("userId") String userId,
        @JsonProperty("email") String email,
        @JsonProperty("password") String password,
        @JsonProperty("title") String title,
        @JsonProperty("firstName") String firstName,
        @JsonProperty("lastName") String lastName,
        @JsonProperty("address") String address,
        @JsonProperty("country") String country,
        @JsonProperty("seatPreference") String seatPreference,
        @JsonProperty("newsletterSub") Boolean newsletterSub,
        @JsonProperty("agreesToTermsAndConditions") Boolean agreesToTermsAndConditions,
        @JsonProperty("points") Integer points,
        @JsonProperty("userLevel") UserLevel userLevel) {

    public Traveller withAUniqueEmailAddress() {
        return new Traveller(
                userId,
                this.email.replace("@", "" + new Random().nextInt() + "@"),
                password, title, firstName, lastName, address, country, seatPreference, newsletterSub, agreesToTermsAndConditions, points, userLevel
        );
    }

    public Traveller withEmail(String email) {
        return new Traveller(
                userId,
                email,
                password, title, firstName, lastName, address, country, seatPreference, newsletterSub, agreesToTermsAndConditions, points, userLevel
        );
    }

    public Traveller whoDoesNotApproveTheTermsAndConditions() {
        return new Traveller(userId, email, password, title, firstName, lastName, address, country, seatPreference, newsletterSub, false, points, userLevel);
    }

    public Traveller withEmptyValueFor(String fieldName) {
        if (fieldName == null) {
            return this;
        }
        switch (fieldName) {
            case "email": return new Traveller(userId, "", password, title, firstName, lastName, address, country, seatPreference, newsletterSub, agreesToTermsAndConditions, points, userLevel);
            case "password": return new Traveller(userId, email, "", title, firstName, lastName, address, country, seatPreference, newsletterSub, agreesToTermsAndConditions, points, userLevel);
            case "title": return new Traveller(userId, email, password, "", firstName, lastName, address, country, seatPreference, newsletterSub, agreesToTermsAndConditions, points, userLevel);
            case "firstName": return new Traveller(userId, email, password, title, "", lastName, address, country, seatPreference, newsletterSub, agreesToTermsAndConditions, points, userLevel);
            case "lastName": return new Traveller(userId, email, password, title, firstName, "", address, country, seatPreference, newsletterSub, agreesToTermsAndConditions, points, userLevel);
            case "address": return new Traveller(userId, email, password, title, firstName, lastName, "", country, seatPreference, newsletterSub, agreesToTermsAndConditions, points, userLevel);
            case "country": return new Traveller(userId, email, password, title, firstName, lastName, address, "", seatPreference, newsletterSub, agreesToTermsAndConditions, points, userLevel);
        }
        return this;
    }

    public Traveller withId(String userId) {
        return new Traveller(userId, email, password, title, firstName, lastName, address, country, seatPreference, newsletterSub, false, points, userLevel);
    }

    public Traveller withPoints(int points) {
        return new Traveller(userId, email, password, title, firstName, lastName, address, country, seatPreference, newsletterSub, false, points, userLevel);
    }

    public Traveller withLevel(UserLevel userLevel) {
        return new Traveller(userId, email, password, title, firstName, lastName, address, country, seatPreference, newsletterSub, false, points, userLevel);
    }
}
