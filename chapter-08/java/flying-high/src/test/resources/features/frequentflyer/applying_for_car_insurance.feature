@auto
Feature: Car Insurance Quote

  Rule: Customers must be sent a copy of their quote via email

    Example: Jane applies for comprehensive insurance online
      Given Jane owns a new Toyota Prius
      When she applies for comprehensive car insurance
      Then she should be shown a New Hybrid Car quote
      And she should receive a copy of the quote via email

  Rule: Accident premium rates apply when a customer has had previous accidents

  The accident premium is applied whether the customer was responsible or not.

    Scenario Outline: Premium rates are applied when a customer has had up to 3 accidents
      Given Jane wants to insure her car
      And she has had <Number of accidents> accidents in the past 3 years
      When she applies for comprehensive car insurance
      Then the <Accident Premium Rate> accident premium rate should be applied
      Examples:
        | Number of accidents | Accident Premium Rate |
        | 1                   | 25%                   |
        | 2                   | 50%                   |
        | 3                   | 100%                  |

    Example: Customers with more than 3 previous accidents should not be insured
      Given Jane wants to insure her car
      And she has had 4 accidents in the past 3 years
      When she applies for comprehensive car insurance
      Then her application should be rejected

