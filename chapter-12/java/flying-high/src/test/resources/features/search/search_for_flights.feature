Feature: Search for flights

  Background:
    Given Tracy is a registered Frequency Flyer member
    And she has logged on with a valid username and password

  Rule: Travellers can search by departure, destination and travel class

    Scenario Outline: Searching for flights by travel class
      When she searches for flights with the following criteria
        | From   | To   | Travel Class   |
        | <From> | <To> | <Travel Class> |
      Then she should be shown flights that match the travel class <Travel Class>

      Examples:
        | From   | To        | Travel Class    |
        | Sydney | Hong Kong | Economy         |
        | London | New York  | Premium Economy |
        | Seoul  | Hong Kong | Business        |
