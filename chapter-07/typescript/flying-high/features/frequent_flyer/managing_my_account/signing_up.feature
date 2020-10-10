Feature: Signing up to the Frequent Flyer program

  @component:authentication
  Scenario: Users can sign up online

  @component:accounts
  Scenario Outline: Earning Frequent Flyer points for past flights
    Given Terry joined the Frequent Flyer program on 20-01-2019
    When he asks for the following flight to count towards his Frequent Flyer points:
      | Booking Refererce | <Booking> |
      | Flight Number     | <Number>  |
      | Flight Date       | <Date>    |
      | Airline           | <Airline> |
      | Departure         | <From>    |
      | Destination       | <To>      |
    Then the flight should be credited: <Credited>
    Examples:
      | Booking | Number | Date       | Airline     | From   | To     | Credited |
      | DDSF245 | FH-101 | 20-12-2018 | Flying High | London | Paris  | Yes      |
      | SFGG345 | FH-201 | 21-10-2018 | Flying High | London | Oslo   | Yes      |
      | DDSF245 | FH-092 | 20-11-2018 | Flying High | London | Paris  | Yes      |
      | SFGG345 | FH-999 | 25-05-2018 | Flying High | London | Berlin | No       |
      | KEGR264 | OA-102 | 20-12-2018 | Other Air   | Paris  | Madrid | No       |

  Scenario Outline: Earning Frequent Flyer points for past flights
  Users can request credits for Frequent Flyer flights completed in the past three months
    Given Terry joined the Frequent Flyer program on 20-01-2019
    When Terry requests credit for flight <Number> on <Date> with <Airline>
    Then the flight should be credited: <Credited>
    Examples:
      | Number | Date       | Airline     | Credited | Notes                        |
      | FH-101 | 01-02-2019 | Flying High | Yes      |                              |
      | FH-999 | 20-10-2018 | Flying High | No       | Must be in the past 3 months |
      | OA-102 | 01-02-2019 | Other Air   | No       | Must be with Flying High     |

