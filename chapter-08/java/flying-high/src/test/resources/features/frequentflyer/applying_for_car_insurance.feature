@auto
Feature: Applying for Online Car Insurance

  Scenario: Jane applies for comprehensive insurance online
    Given Jane owns a new Toyota Prius
    When Jane applies for comprehensive car insurance
    Then she should be shown a New Hybrid Car quote
    And she should receive a copy of the quote via email

  Scenario Outline: Jane has a history of previous accidents
    Given Jane wants to insure her car
    And Jane has had <Number of accidents> accidents in the past 3 years
    When Jane applies for comprehensive car insurance
    Then the <Accident Premium Rate> accident premium rate should be applied
    Examples:
      | Number of accidents | Accident Premium Rate |
      | 1                   | 25%                   |
      | 2                   | 50%                   |
      | 3                   | 100%                  |

