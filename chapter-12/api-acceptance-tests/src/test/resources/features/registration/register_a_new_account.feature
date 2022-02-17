Feature: Register for a Frequent Flyer account

  In order to benefit from its many privileges
  As a regular traveller
  I want to enroll in the Frequent Flyer programme


  Rule: Travelers can register as new members on the Flying High website
    Example: Tracy registers as a new Frequent Flyer
      Given Tracy does not have a Frequent Flyer account
      When she registers for a new Frequent Flyer account with valid details
      And she confirms her email address
      Then she should have a new account with 0 points

  Rule: Travelers must confirm their email before their account is created
    Example: Tracy's account is initially pending activated
      Given Tracy does not have a Frequent Flyer account
      When Tracy registers for a new Frequent Flyer account
      Then she should be sent an email with an email validation link
      And her account should be pending activation

    Example: Tracy cannot access her account before having activated her email
      Given Tracy has registered for a new Frequent Flyer account
      But she has not yet confirmed her email
      When she attempts to access her Frequent Flyer account details
      Then she should be invited to first confirm her email address

    Example: Tracy confirms her email
      Given Tracy has registered for a new Frequent Flyer account
      When she confirms her email address
      Then her account should be activated

  Rule: New members should receive a welcome email message
    Example: Tracy receives her welcome email
      Given Tracy has registered for a new Frequent Flyer account
      When she confirms her email address
      Then she should be sent the Frequent Flyer welcome email

