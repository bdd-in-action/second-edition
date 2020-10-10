package com.examplcom.manning.bddinaction.frequentflyer.acceptancetests.stepdefinitions;

import com.examplcom.manning.bddinaction.frequentflyer.domain.*;
import io.cucumber.java.DataTableType;
import io.cucumber.java.ParameterType;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

import java.time.Duration;
import java.time.LocalDate;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class ParameterTypeDefinitions {
    @ParameterType("(Standard|Bronze|Silver|Gold|) Frequent Flyer member")
    public FrequentFlyerMember frequentFlyer(String statusName) {
        FrequentFlyerStatus status = FrequentFlyerStatus.valueOf(statusName);
        return FrequentFlyerMember.newMember().withStatus(status);
    }

    @DataTableType
    public PointsSchedule pointsSchedule(Map<String, String> row) {
        return PointsSchedule.from(row.get("From"))
                .to(row.get("To"))
                .flyingIn(CabinClass.valueOf(row.get("Class")))
                .earns(Integer.parseInt(row.get("Points")));
    }

    @DataTableType
    public PointsMultiplier pointsMultiplier(Map<String, String> row) {
        return PointsMultiplier.forStatus(FrequentFlyerStatus.valueOf(row.get("Status")))
                               .is(Double.parseDouble(row.get("Multiplier")));
    }

    @ParameterType("Economy|Business|First")
    public CabinClass cabinClass(String cabinClass) {
        return CabinClass.valueOf(cabinClass);
    }

    @ParameterType(name = "ISO-date", value = "(\\d{4}-\\d{2}-\\d{2})")
    public LocalDate isoDate(String formattedDate) {
        return LocalDate.parse(formattedDate);
    }

    @ParameterType(name = "string-values", value = "(.*)")
    public List<String> stringValues(String destinationList) {
        return Stream.of(destinationList.split(","))
                .map(String::trim)
                .collect(Collectors.toList());
    }

    @ParameterType(".*")
    public FrequentFlyerMember member(String name) {
        return FrequentFlyerMember.newMember().named(name);
    }

    @DataTableType
    public PastFlight mapRowToPastFlight(Map<String, String> entry) {
        return new PastFlight(
                optional(entry.get("Flight Number"),""),
                LocalDate.parse(optional(entry.get("Date"), "2020-10-01")),
                FlightStatus.valueOf(optional(entry.get("Status"), "COMPLETED")),
                isDelayed(entry),
                delayDurationOf(entry));
    }

    private <T> T optional(T cellValue, T defaultValue) {
        return Optional.ofNullable(cellValue).orElse(defaultValue);
    }

    private Boolean isDelayed(Map<String, String> entry) {
        if (entry.get("Delayed") == null) { return false; }
        return (entry.get("Delayed").equalsIgnoreCase("Yes"));
    }

    private Duration delayDurationOf(Map<String, String> entry) {
        if (entry.get("Delayed By") == null) { return Duration.ZERO; }
        return Duration.parse("PT" + entry.get("Delayed By"));
    }
}
