Feature: Earning points from past flights

  As a Flying High Frequent Flyer program manager
  I want new members to be credited with points from their recent flights
  So that more people will join the programme

  Scenario Outline: Eligble flights in the past 90 days can be claimed
    Given Todd has just joined the Frequent Flyer programme
    And Todd asks for the following flight to be credited to his account:
      | Flight Number   | Flight Date   | Status   |
      | <Flight Number> | <Flight Date> | <Status> |
    Then the flight should be considered <Eligibility>
    Examples:
      | Flight Number | Flight Date    | Status    | Eligibility | Reason                   |
      | FH-99         | 60 days ago    | COMPLETED | Eligible    |                          |
      | FH-87         | 100 days ago   | COMPLETED | Ineligible  | Too old                  |
      | OH-101        | 60 days ago    | COMPLETED | Ineligible  | Not a Flying High flight |
      | FH-99         | 60 days ago    | CANCELLED | Ineligible  | Must be completed        |
      | FH-99         | In 5 days time | CONFIRMED | Ineligible  | Must have taken place    |


