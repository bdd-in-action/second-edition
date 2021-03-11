Business Need: : Signing up to the Frequent Flyer program

  Scenario Template: Earning Frequent Flyer points for past flights
    Given Terry joined the Frequent Flyer program on 20-01-2019
    When he asks for the following flight to count towards his Frequent Flyer points:
      | Booking Refererce | <Booking> |
      | Flight Number     | <Number>  |
      | Flight Date       | <Date>    |
      | Airline           | <Airline> |
      | Departure         | <From>    |
      | Destination       | <To>      |
    Then the flight should be credited: <Credited>
    Scenarios:
      | Booking | Number | Date       | Airline     | From   | To     | Credited |
      | DDSF245 | FH-101 | 20-12-2018 | Flying High | London | Paris  | Yes      |
      | SFGG345 | FH-201 | 21-10-2018 | Flying High | London | Oslo   | Yes      |
      | DDSF245 | FH-092 | 20-11-2018 | Flying High | London | Paris  | Yes      |
      | SFGG345 | FH-999 | 25-05-2018 | Flying High | London | Berlin | No       |
      | KEGR264 | OA-102 | 20-12-2018 | Other Air   | Paris  | Madrid | No       |
