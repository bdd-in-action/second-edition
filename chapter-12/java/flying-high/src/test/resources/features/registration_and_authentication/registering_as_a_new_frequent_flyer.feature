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
