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
      When Tracy registers for a new Frequent Flyer account
      Then she should be sent an email with an email validation link
      And her account should be pending activation

#    Example: Tracy cannot access her account before having activated her email
#      Given Tracy has registered for a new Frequent Flyer account
#      But she has not yet confirmed her email
#      When she attempts to access her Frequent Flyer account details
#      Then she should be invited to first confirm her email address
#
#    Example: Tracy confirms her email
#      Given Tracy has registered for a new Frequent Flyer account
#      When she confirms her email address
#      Then her account should be activated
#
#  Rule: Travelers mush provide a valid email address
#
#    Scenario Outline: Emails must be correctly formed and non-disposable
#      Given Tracy does not have a Frequent Flyer account
#      When Tracy registers with an email of <email>
#      Then the email address should be: <Accepted/Rejected>
#
#      Examples: Correctly-formed emails should be accepted
#        | email                | Accepted/Rejected |
#        | tracy@example.com    | Accepted      |
#        | sarah-jane@smith.com | Accepted      |
#
#      Examples: Invalid emails should be rejected
#        | email                       | Accepted/Rejected  |
#        | example.com                 | Rejected       |
#        | #@%^%#$@#$@#.com            | Rejected       |
#        | email@example..com          | Rejected       |
#        | email@inexistant-domain.com | Rejected       |
#
#      Examples: Disposable emails are not allowed
#        | email                | Accepted/Rejected |
#        | lortufefya@vusra.com | Rejected       |
#        | tracy@example.com    | Rejected       |
#




