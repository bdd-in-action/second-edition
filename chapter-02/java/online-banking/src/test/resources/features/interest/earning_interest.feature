Feature: Earning Interest

  Scenario Outline: Earning interest
    Given Tess has a <account-type> account with $<initial-balance>
    And the interest rate for <account-type> accounts is <interest>
    When the monthly interest is calculated
    Then she should have earned $<earnings>
    Then she should have $<new-balance> in her <account-type> account
    Examples:
      | initial-balance | account-type | interest | earnings | new-balance |
      | 10000           | Current      | 1.0      | 8.33     | 10008.33    |
      | 10000           | Savings      | 3.0      | 25       | 10025       |
      | 10000           | SuperSaver   | 5.0      | 41.67    | 10041.67    |
