@webtest
Business Need: Registering as a new Frequent Flyer

  New Frequent Flyer members need to register to book a flight.

  Rule: Customers must register to be able to use the Frequent Flyer members area
    @current
    Example: Trevor registers as a Frequent Flyer member
      Given Trevor does not have a Frequent Flyer account
      When he registers as a Frequent Flyer member
      Then Trevor should be able to log on to the Frequent Flyer application
      And he should have a Frequent Flyer account with:
        | Status Level | STANDARD |
        | Points       | 0        |

  Rule: The unique username should be a valid email address
    @current
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
    @current
      Given Candy does not have a Frequent Flyer account
      When she wants to register a new Frequent Flyer account
      Then the following emails should not be considered valid:
        | Email        | Reason Rejected    |
        | not-an-email | Missing @ section  |
        | wrong.com    | Missing @          |
        | wrong@       | Mission domain     |
        | wrong@#.com  | Invalid characters |
        |              | Cannot be empty    |

  Rule: Duplicate usernames are not allowed
    Example: Someone tries to register with an email that is already used
    Mike Smith is an existing Frequent Flyer member.
    His wife Jenny Smith does not have a Frequent Flyer account
      Given Mike Smith is a Frequent Flyer member with the following details:
        | username | smiths@example.org |
        | password | correct-password   |
      When Jenny tries to register with a username of "smiths@example.org"
      Then she should be presented with an error message containing "Email exists, please try another name"
      And she should also be presented with a "Forgot your password?" link


  Rule: New members need to complete all the mandatory fields and approve the terms & conditions
    Scenario: Mandatory fields for registration
      When Candy wants to register for a Frequent Flyer account
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

