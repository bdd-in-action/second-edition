Feature: Add cash to my e-wallet
  As a logged client
  I want to add cash money to my e-wallet
  So I will be able to buy on the e-store

  Clive is a registered client

  Background:
    Given Clive is logged in to the application

  Scenario: Clive deposits cash from his bank account
    Given Clive has an e-wallet account with £200
    When he adds £100 from his bank account to his e-wallet
    Then Clive should be informed that the deposit was successful
    And his bank account should be debited £100
    And his e-wallet balance should be £300

  Scenario: Clive deposits cash using a credit card
    Given Clive has an e-wallet account with £200
    When he adds £100 using his credit card
    Then Clive should be informed that the deposit was successful
    And his credit card account should be debited £100
    And his e-wallet balance should be £300

  Scenario Outline: Clive deposits cash from his bank account
    Given Clive has an e-wallet account with £50
    When he tries to deposit £100 from his bank account to his e-wallet
    And the bank returns a result message of <Result Code>
    Then Clive should be informed that <Result Message>
    And his e-wallet balance should be £<Final Balance>
    Examples:
      | Result Code       | Result Message                   | Final Balance |
      | SUCCESS           | Transfer was successful          | 150           |
      | INSUFFICENT-FUNDS | Funds were insufficient          | 50            |
      | ACCOUNT-INVALID   | Your account has not been set up | 50            |


