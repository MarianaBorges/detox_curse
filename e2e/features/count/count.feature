Feature: Count button show amount correcty
    
    I can count a lot of things

    Background: I can navigate to the Count screen 
        Given I tap on the 'Count' Home section

        @count
        Scenario: I can press bottons of count
        When I press "<count>" <number> times
        Then Label "<label>" should show "<number_1>"

        Examples:
            | count | number | label | number_1 |
            | days  | 4      | days  | 4        |
            | cars  | 3      | cars  | 3        |
            | heads | 4      | head | 4        |
            | tips  | 1      | tip  | 1        |