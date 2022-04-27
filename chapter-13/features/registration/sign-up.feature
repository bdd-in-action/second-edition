Feature: Registration

  New Frequent Flyer members need to register to book a flight.

#  Rule: Customers must register to use the Frequent Flyer members area

  Scenario: Sign up using valid traveller details

     When Trevor signs up using valid traveller details
     Then he should be able to sign in

#    Example: Sign up using incomplete traveller details
#
#      Given Tracy does not have a Frequent Flyer account
#      When she signs up as a Frequent Flyer member
#      Then should should be told that "..."
#       And she should not be able to sign in
#
#    Example: Sign up using duplicate email address
#
#      Given Tracy does not have a Frequent Flyer account
#       When she signs up as a Frequent Flyer member
#       Then she should be able to sign in to the Frequent Flyer application
