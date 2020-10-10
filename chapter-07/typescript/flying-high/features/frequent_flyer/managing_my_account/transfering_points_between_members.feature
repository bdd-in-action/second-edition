@component:accounts
Feature: Transfering points between members

  As a Frequent Flyer Member
  I want to transfer points that I don't need to members of my family
  So that the points don't go to waste

  Scenario: Transfer points between existing members
    Given Danielle and Martin are family members
    And they have the following accounts:
      | owner    | points | status-points |
      | Danielle | 100000 | 800           |
      | Martin   | 50000  | 50            |
    When Martin transfers 40000 points to Danielle
    Then the accounts should be as follows:
      | owner    | points | status-points |
      | Danielle | 140000 | 800           |
      | Martin   | 10000  | 50            |
