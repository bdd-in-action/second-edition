Feature: Joining the Frequent Flyer Programme

  In order to encourage more regular travellers to fly more often with us
  As an airline manager
  I would like travellers to join our loyalty programme

  Scenario: Registering online for a new Frequent Flyer account
    Given Jane is not a Frequent Flyer member
    When Jane registers for a new account
    Then she should be sent a confirmation email
    And she should receive 500 bonus points

