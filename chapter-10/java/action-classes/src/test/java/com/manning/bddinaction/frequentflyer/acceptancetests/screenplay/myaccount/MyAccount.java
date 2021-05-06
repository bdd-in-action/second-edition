package com.manning.bddinaction.frequentflyer.acceptancetests.screenplay.myaccount;

import com.manning.bddinaction.frequentflyer.acceptancetests.domain.FlightBooking;
import com.manning.bddinaction.frequentflyer.acceptancetests.domain.UserLevel;
import net.serenitybdd.screenplay.Question;
import net.serenitybdd.screenplay.abilities.BrowseTheWeb;
import net.serenitybdd.screenplay.questions.Text;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

public class MyAccount {

    public static Question<UserLevel> statusLevel() {
        return Text.of(StatusPanel.STATUS_LEVEL).asEnum(UserLevel.class);
    }

    public static Question<Integer> pointBalance() {
        return Text.of(StatusPanel.POINT_BALANCE).asInteger();
    }

    public static Question<List<FlightBooking>> flightHistory() {
        return Question.about("the flight history").answeredBy(
                actor -> BrowseTheWeb.as(actor).findAll(FlightHistoryPanel.BOOKINGS).stream()
                        .map(
                                row -> new FlightBooking(
                                        row.find(FlightHistoryPanel.DEPARTURE).getText(),
                                        row.find(FlightHistoryPanel.DESTINATION).getText(),
                                        Integer.parseInt(row.find(FlightHistoryPanel.POINTS_EARNED).getText())
                                )
                        ).collect(Collectors.toList())
        );
    }

}
