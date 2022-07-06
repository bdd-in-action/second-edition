@webtest
Business Need: Registering as a new Frequent Flyer

  New Frequent Flyer members need to register to book a flight.

  Rule: Customers must register to be able to use the Frequent Flyer members area
    Example: Trevor registers as a Frequent Flyer member
      Given Trevor does not have a Frequent Flyer account
      When he registers as a Frequent Flyer member
      Then Trevor should be able to log on to the Frequent Flyer application
      And he should have a Frequent Flyer account with:
        | Status Level | Points |
        | STANDARD     | 0      |

  Rule: New members need to complete all the mandatory fields and approve the terms & conditions
    @current
    Scenario: Mandatory fields for registration
      Given Candy does not have a Frequent Flyer account
      When she wants to register as a Frequent Flyer member
      Then the following information should be mandatory:
        | Field     | Error Message If Missing     |
        | email     | Please enter your email      |
        | password  | Please enter your password   |
        | firstName | Please enter your first name |
        | lastName  | Please enter your last name  |
        | address   | Please enter your address    |
        | country   | Please enter a valid country |
