Feature: Booking a hotel

  Scenario: Booking a business trip
    Given Trevor needs to make a business trip to Paris
    When he books a flight and a hotel on the corporate booking system
    Then the trip should be placed in his calendar
    And his corporate credit card should be charged

#  Scenario: End-to-end Hotel Booking Test
#    Given I login to the Corporate Booking App
#    Then I am on the Home Page
#    And I click the Hotels radio button
#    Then I Enter “Paris” into the city field
#    And I set price range to “Any”
#    And I set check-in date to “04-04-2019”
#    And I enter number of nights to “2”
#    And I set distance to “10”
#    When I hit 'search’ button
#    Then the hotels listed are:
#      | Hotel Name | Distance | Availability | Price | Pool | Gym |
#      | Ritz       | 3.2      | Yes          | 400   | Y    | Y   |
#      | Savoy      | 6.9      | Yes          | 500   | N    | Y   |
#    When I select ‘Ritz’ from the list
#    And I select 'Pay with points'
#    And check that I have enough points
#    And I click 'Pay'
#    Then verify the message that appears
#    And the cost should be 800
#    And I click on logout

  Scenario: Search for available hotels by distance
    Given Bindi needs to make a business trip to Paris
    And the following hotels have available rooms:
      | Hotel Name | Location | Distance from center |
      | Ritz       | Paris    | 3.2                  |
      | Savoy      | Paris    | 6.9                  |
      | Hilton     | Paris    | 12.5                 |
    When Bindi searches for a hotel within 10 km of Paris
    Then she should be presented with the following hotels:
      | Hotel Name | Location | Distance from center |
      | Ritz       | Paris    | 3.2                  |
      | Savoy      | Paris    | 6.9                  |

  Scenario: Travelers can pay for a hotel booking using points
  Frequent Flyers can book rooms using points at a rate of $1 per point
    Given the following hotels:
      | Hotel Name | Location | Nightly cost |
      | Ritz       | New York | 500          |
    And Bindi has a balance of 1200 points
    When she books 2 nights at the Hilton
    Then she should be charged a remaining balance of $0
    And she should have 200 remaining points

  Scenario Outline: Travelers can pay for a hotel booking using cash and points
  Points are consumed before cash
    Given the following hotels:
      | Hotel Name | Location | Nightly cost |
      | Ritz       | New York | 500          |
    And Bindi has a balance of <Available Points> points
    When she books 2 nights at the Hilton
    Then she should be charged a remaining balance of $<Cash cost>
    And she should have <Remaining Points> points remaining
    Examples:
      | Available Points | Cash cost | Remaining Points |
      | 1200             | 0         | 200              |
      | 800              | 200       | 0                |

#  Scenario: User navigates to the booking page
#    Given I login to the Corporate Booking App
#    When I click on the 'Hotels' button
#    Then I should see the Hotel search page
#
#  Scenario: User looks for a hotel by location
#    Given I Enter “Paris” into the city field
#    And I set price range to “Any”
#    And I set check-in date to “04-04-2019”
#    And I enter number of nights to “2”
#    And I click on OK
#    Then I should see the relevant hotels
#
#  Scenario: User looks for a hotel by location
#    Given I select the Ritz hotel
#    And I click on Pay with Points and Cash
#    Then I should see a dialog asking how many points I want to spend
#
#  Scenario: User navigates to the booking page
#    Given I login to the Corporate Booking App
#    When I click on the 'Hotels' button
#    Then I should see the Hotel search page

  Scenario: A traveller can look for a hotel by location and price
    Given Bindi needs to travel to New York for business
    And the following hotels have available rooms:
      | Hotel Name | Location | Nightly cost | In policy |
      | Ritz       | Paris    | 400          | Yes       |
      | Hilton     | New York | 600          | Yes       |
      | Conrad     | New York | 800          | No        |
    When she looks for hotels in New York
    Then she should be shown the following hotels:
      | Hotel Name | Location | Nightly cost | In policy |
      | Hilton     | New York | 600          | Yes       |
      | Conrad     | New York | 800          | No        |

  Scenario: A traveler books a hotel using their corporate or personal credit card
    Given Bindi is looking for hotels in New York
    When she books a room in the New York Hilton with her corporate card
    Then the booking should be placed on hold
    And the travel plan should be submitted to Logistics for approval

  Scenario: Travellers can see their approved upcoming trips
    Given Bindi has booked the following trip:
      | Destination | Date       | Nights | Hotel  | Flight |
      | New York    | 15-05-2020 | 3      | Hilton | FH-101 |
    And the trip has been approved by logistics
    When she reviews her upcoming trips
    Then her upcoming trips should include:
      | Destination | Date            | Bookings      | Status   |
      | New York    | 15-18 May, 2020 | Flight, Hotel | Approved |

  Scenario: Each trip needs to be approved by a logistics officer
    Given Bindi has booked the following trip:
      | Destination | Date       | Nights | Hotel  | Flight |
      | New York    | 15-05-2020 | 3      | Hilton | FH-101 |
    And Logan is a logistics officer
    When Logan reviews his list of tasks
    Then Logan should see the following trips in his inbox:
      | Destination | Date            | Bookings      | Status           |
      | New York    | 15-18 May, 2020 | Flight, Hotel | Pending Approved |
