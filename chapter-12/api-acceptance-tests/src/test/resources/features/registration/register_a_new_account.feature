Feature: Register for a Frequent Flyer account

  In order to benefit from its many privileges
  As a regular traveller
  I want to enroll in the Frequent Flyer programme

  #
  # A high level user journey scenario
  #
  Rule: Travelers can register as new members on the Flying High website
    Example: Tracy registers as a new Frequent Flyer
      Given Tracy does not have a Frequent Flyer account
      When she registers for a new Frequent Flyer account
      And she confirms her email address
      Then she should have a new Standard tier account with 0 points

  #
  # More detailed user journey scenarios
  #
  Rule: Travelers must confirm their email before their account is created
    Example: Tracy's account is initially pending activated
      Given Tracy does not have a Frequent Flyer account
      When she registers for a new Frequent Flyer account
      Then she should be sent an email with an email validation link
      And her account should be pending activation

    Example: Tracy cannot access her account before having activated her email
      Given Tracy has registered for a new Frequent Flyer account
      And she has not yet confirmed her email
      Then she should be invited to confirm her email address when she attempts to login

    Example: Tracy confirms her email
      Given Tracy has registered for a new Frequent Flyer account
      When she confirms her email address
      Then her account should be activated
      And she should be able to log in

  #
  # A granular business rule implemented at the API level
  #
  Rule: Travelers mush provide a valid email address
    Scenario Outline: Emails must be correctly formed and non-disposable
      Given Tracy does not have a Frequent Flyer account
      When she registers with an email of <email>
      Then the email address should be <Accepted/Rejected> with the message "<Reason>"

      Examples: Correctly-formed emails should be accepted
        | email                  | Accepted/Rejected | Reason |
        | sarah@example.org      | Accepted          |        |
        | sarah-jane@example.org | Accepted          |        |

      Examples: Invalid emails should be rejected
        | email                       | Accepted/Rejected | Reason                 |
        | example.com                 | Rejected          | email must be an email |
        | #@%^%#$@#$@#.com            | Rejected          | email must be an email |
        | email@example..com          | Rejected          | email must be an email |
        | email@inexistant-domain.com | Rejected          | Invalid email address  |

      Examples: Disposable emails are not allowed
        | email                | Accepted/Rejected | Reason                |
        | lortufefya@vusra.com | Rejected          | Invalid email address |





