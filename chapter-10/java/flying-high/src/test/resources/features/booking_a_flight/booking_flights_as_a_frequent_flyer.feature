Feature: Booking a flight as a Frequent Flyer

  Scenario: Tara books a flight from London to New York
    Given Tara is a registered Frequent Flyer member
    And she has searched for one-way flights from London to New York in Economy
    When she books the first available flight
    Then she should be informed that her booking was successful
    And the booking should appear in her My Booking section

