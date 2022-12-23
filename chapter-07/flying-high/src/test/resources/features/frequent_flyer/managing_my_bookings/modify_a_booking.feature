Feature: Modify an existing booking

  As a traveller
  I want to change my booking to a new flight
  So that I can adapt to my changing travel plans

  Scenario: Change a flight to another date
    Given Tara is a Frequent Flyer traveller
    And Tara has logged on to the Frequent Flyer application using tara@email.com
    And Tara has booked the following flight:
      | Departure | Destination | Date       | Class   |
      | London    | New York    | 13-01-2020 | Economy |
    When Tara updates the flight date to 15-01-2020
    Then there should be no additional charge
    And the booking should be updated to the following:
      | Departure | Destination | Date       | Class   |
      | London    | New York    | 15-01-2020 | Economy |

  Scenario: Change a flight to another date
    Given Tara has booked the following flight:
      | Departure | Destination | Date       | Class   |
      | London    | New York    | 13-01-2020 | Economy |
    When Tara updates the flight date to 15-01-2020
    And the fare difference is $100
    Then Tara should be charged $100
    And the booking should be updated to the following:
      | Departure | Destination | Date       | Class           |
      | London    | New York    | 15-01-2020 | Premium Economy |
