@webtest
Business Need: Registering as a new Frequent Flyer

  New Frequent Flyer members need to register to book a flight.

  Rule: Customers must register to be able to use the Frequent Flyer members area
    Example: Trevor registers as a Frequent Flyer member
      Given Trevor does not have a Frequent Flyer account
      When he registers as a Frequent Flyer member
      Then Trevor should be able to log on to the Frequent Flyer application
      And he should have a Frequent Flyer account with:
        | Status Level | STANDARD |
        | Points       | 0        |

  Rule: The unique username should be a valid email address
    Scenario Outline: Only correctly structured emails should be accepted
      Given Candy does not have a Frequent Flyer account
      When she tries to register with an email of "<email>"
      Then she should be told "Not a valid email format"
      Examples:
        | email        |
        | not-an-email |
        | notemail.com |
        | candy@#.com  |

    @webtest
    Scenario: Email addresses need to be well formed
      Given Candy does not have a Frequent Flyer account
      When she wants to register a new Frequent Flyer account
      Then the following emails should not be considered valid:
        | Email        | Reason Rejected    |
        | not-an-email | Missing @ section  |
        | wrong.com    | Missing @          |
        | wrong@       | Mission domain     |
        | wrong@#.com  | Invalid characters |
        |              | Cannot be empty    |

  Rule: New members need to complete all the mandatory fields and approve the terms & conditions
    Scenario: Mandatory fields for registration
      Given Candy does not have a Frequent Flyer account
      When she wants to register a new Frequent Flyer account
      Then the following information should be mandatory to register:
        | Field     | Error Message If Missing     |
        | email     | Please enter your email      |
        | password  | Please enter your password   |
        | firstName | Please enter your first name |
        | lastName  | Please enter your last name  |
        | address   | Please enter your address    |
        | country   | Please enter a valid country |

    Scenario: Customers must agree to the terms and conditions before registering
      Given Candy does not have a Frequent Flyer account
      When she tries to register without approving the terms and conditions
      Then she should be told "Please confirm the terms and conditions to continue"

