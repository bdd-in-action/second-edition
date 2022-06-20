Business Need: View account status

  Frequent Flyer members can view the points they have earned and their current status level
  in the My Accounts section of the site

  Background:
    Given Trevor has logged onto the Frequent Flyer application as a new member

  Rule: Frequent Flyer members can view their status in the My Accounts section
    Example: Trevor has just joined the program
      Then his account status should have:
        | Point Balance | Status Level |
        | 0             | STANDARD     |

  Rule: Members can see the history of their flights
    Example: Trevor views his flight history for a single flight
      When Trevor books the following flights
        | From   | To        | Travel Class | Trip Type |
        | Sydney | Hong Kong | Economy      | Single    |
      Then his booking history should contain:
        | Departure | Destination | Points Earned |
        | Sydney    | Hong Kong   | 100           |

