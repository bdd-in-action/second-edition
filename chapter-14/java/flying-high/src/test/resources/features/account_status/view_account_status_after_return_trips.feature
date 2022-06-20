Business Need: View account status after several return trips

  Frequent Flyer members can view the points they have earned and their current status level
  in the My Accounts section of the site

  Background:
    Given Trevor has logged onto the Frequent Flyer application as a new member

  Example: Trevor views his flight history for a return flight
    Return trips are recorded in the flight history as two separate flights

    When Trevor books the following flights
      | From   | To       | Travel Class | Trip Type |
      | London | New York | Business     | Return    |
    Then his booking history should contain:
      | Departure | Destination | Points Earned |
      | London    | New York    | 250           |
      | New York  | London      | 250           |

  Rule: Flights should be shown in reverse historical order
    Example: Trevor views his flight history after several flights
      Given Trevor has completed the following flights
        | From   | To        | Travel Class | Trip Date  |
        | Sydney | Seoul     | Economy      | 2021-03-01 |
        | Seoul  | Hong Kong | Economy      | 2021-05-10 |
        | London | New York  | Business     | 2021-05-24 |
      When Trevor views his account summary
      Then his booking history should contain:
        | Departure | Destination | Points Earned |
        | London    | New York    | 250           |
        | Seoul     | Hong Kong   | 50            |
        | Sydney    | Seoul       | 100           |

