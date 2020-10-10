@component:points
# This feature is really important for the Marketing team
Feature: Earning Frequent Flyer points from flights
  In order to improve customer loyalty
  As an airline sales manager
  I want travellers to earn frequent flyer points when they fly with us

  Background:
    Given the following flight points schedule:
      | From     | To          | Class    | Points |
      | London   | New York    | Economy  | 550    |
      | London   | New York    | Business | 800    |
      | London   | New York    | First    | 1650   |
      | New York | Los Angeles | Economy  | 100    |
      | New York | Los Angeles | Business | 140    |
      | New York | Los Angeles | First    | 200    |
    And the following flyer types multipliers:
      | Status   | Multiplier |
      | Standard | 1.0        |
      | Silver   | 1.5        |
      | Gold     | 2.0        |

  Scenario: Travellers earn points depending on the points schedule
    Given Stacy is a Standard Frequent Flyer member
    When she flies from London to New York in Economy class
    Then she should earn 550 points

  Scenario Outline: Travellers earn more points in higher cabin classes
    Given Silvia is a Silver Frequent Flyer member
    When she flies from <From> to <To> in <Cabin> class
    Then she should earn <Points Earned> points
    Examples:
      | From     | To          | Cabin    | Points Earned | Notes             |
      | London   | New York    | Economy  | 825           | International leg |
      | New York | Los Angeles | Business | 210           | Domestic leg      |
      | New York | London      | First    | 2475          | Return trip       |

  Scenario Outline: Higher frequent flyer status levels earn more points
    Given Tracy is a <Status> Frequent Flyer member
    When she flies from <From> to <To> in Business class
    Then she should earn <Points Earned> points
    Examples:
      | From     | To          | Status   | Points Earned |
      | London   | New York    | Standard | 800           |
      | New York | Los Angeles | Silver   | 210           |
      | New York | London      | Gold     | 1600          |

  @section:7.1
  Scenario: Flights outside Europe earn points based on distance travelled
    Given the distance from London to New York is 5500 km
    And Tara is a Standard Frequent Flyer member
    When she flies from London to New York in Economy class
    Then she should earn 550 points

  Scenario: Loyal member award destinations
    Given Tara is a Standard Frequent Flyer member
    And she has been a member for 3 years
    When she views her award trips
    Then the available destinations should be Berlin, Paris, New York

  Scenario: 50% bonus points for members who already have 10000 points
    Given Tara is a Silver Frequent Flyer member with 20000 points
    And the following flight points schedule:
      | From  | To     | Class   | Points |
      | Paris | Berlin | Economy | 100    |
    When she flies from Paris to Berlin in Economy class
    Then she should earn 150 points

  Scenario: Completed flights in the past 90 days can be claimed
    Given Todd joined the Frequent Flyer programme on 2020-01-01
    When he asks for the following flight to be credited to his account:
      | Flight Number | Date       | Status    |
      | FH-101        | 2019-12-01 | COMPLETED |
      | FH-102        | 2019-12-01 | CANCELLED |
      | FH-103        | 2019-08-01 | COMPLETED |
    Then only the following flights should be credited:
      | Flight Number | Date       | Status    |
      | FH-101        | 2019-12-01 | COMPLETED |

  Scenario Outline: Frequent flyer members are awarded extra points for late flights
  10 extra points are earned for each hour delayed after 1 hour.
    Given Tracy has travelled on the following flight:
      | From   | To   | Delayed   | Delayed By   | Extra Points   |
      | <From> | <To> | <Delayed> | <Delayed By> | <Extra Points> |
    When the flight is credited to her account
    Then she should be credited with <Extra Points> additional points
    Examples:
      | From     | To          | Delayed | Delayed By | Extra Points |
      | London   | New York    | No      |            | 0            |
      | London   | Paris       | Yes     | 10m        | 0            |
      | New York | Los Angeles | Yes     | 60m        | 10           |
      | London   | Berlin      | Yes     | 2h30m      | 20           |
      | Berlin   | Dublin      | Yes     | 5h         | 50           |

