Feature: Sign up

  Customers must sign up to the Frequent Flyer programme to book flights
  that earn them Frequent Flyer points.

  Rule: Registered Frequent Flyer account is required to use the system

    Scenario: Sign up using valid traveller details

       When Tracy signs up using valid traveller details
       Then she should be able to sign in

    Scenario Outline: Sign up using invalid email address details

      When Tracy tries to sign up using:
        | <field> | <value> |
      Then she should be advised of an <field> input error: "<expected error>"

      Examples:
        | field     | value        | expected error               | comment           |
        | email     | not-an-email | Not a valid email format     | Missing @ section |
        | email     | wrong.com    | Not a valid email format     | Missing username  |
        | email     | wrong@#.com  | Not a valid email format     | Missing username  |
        | email     |              | Please enter your email      | Cannot be empty   |
        | password  |              | Please enter your password   | Cannot be empty   |

  Rule: Duplicate usernames are not allowed

    Scenario: Sign up using duplicate email address

      Mike Smith is an existing Frequent Flyer member.
      His wife Jenny Smith does not have a Frequent Flyer account.

      Given Mike has signed up using the following details:
        | email | smiths@example.org |
       When Jenny tries to sign up using:
        | email | smiths@example.org |
       Then she should be advised of an error: "Email exists, please try another name"
        And she should be presented with an option to reset password
