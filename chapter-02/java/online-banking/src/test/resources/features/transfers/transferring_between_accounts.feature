Feature: Transferring money between accounts
  In order to manage my money more efficiently
  As a bank client
  I want to transfer funds between my accounts whenever I need to

  Scenario: Transferring money to a savings account
    Given Tess has a Current account with $1000
    And a Savings account with $2000
    When she transfers $500 from the Current account to the Savings account
    Then she should have $500 in her Current account
    And she should have $2500 in her Savings account

  Scenario: Transferring with insufficient funds
    Given Tess has a Current account with $1000
    And a Savings account with $2000
    When she transfers $1500 from the Current account to the Savings account
    Then she should receive an 'insufficient funds' error
    Then she should have $1000 in her Current account
    And she should have $2000 in her Savings account

  Scenario: Transferring money between accounts within the bank
    Given Tess has the following accounts:
      | account | balance |
      | Current | 1000    |
      | Savings | 2000    |
    When she transfers $500 from the Current account to the Savings account
    Then her accounts should look like this:
      | account | balance |
      | Current | 500     |
      | Savings | 2500    |
