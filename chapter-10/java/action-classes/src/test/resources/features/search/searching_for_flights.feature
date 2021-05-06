@current
Business Need: Searching for flights

  Frequent Flyer members can look for flights to different destinations to help plan their journeys

  Background:
    Given Amy is a registered Frequency Flyer member
    And she has logged on with a valid username and password

  Rule: Travellers can search by departure, destination and travel class
    Scenario Outline: Searching for flights by travel class
      When she searches for flights with the following criteria
        | From   | To   | Travel Class   |
        | <From> | <To> | <Travel Class> |
      Then the returned flights should match the travel class <Travel Class>
      Examples:
        | From   | To        | Travel Class    |
        | Sydney | Hong Kong | Economy         |
        | London | New York  | Premium Economy |
        | Seoul  | Hong Kong | Business        |

  Rule: Travellers must provide at least departure, destination and travel class
    Scenario Template: Missing mandatory fields should be highlighted
      When she tries to search for flights with the following criteria
        | From   | To   | Travel Class   |
        | <From> | <To> | <Travel Class> |
      Then the search should not be allowed
      And the <Missing Field> field should be highlighted as missing
      Examples:
        | From   | To        | Travel Class | Missing Field |
        |        | Hong Kong | Economy      | From          |
        | Sydney |           | Economy      | To            |
        | Sydney | Hong Kong |              | Travel class  |

