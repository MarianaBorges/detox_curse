 Feature: remove People

    People can be removed 

    Background: I navigate to the add People form
        Given I tap on the people Home section
    
        @test @deletePeople
        Scenario: I verify that people can be removed 
            When I tap the Add people button
            And I fill in form with: 
            | name   | age    | phone   | count   |
            | <name> | <age>  | <phone> | <count> |
            When the people List page is correctly displayed for <count> people
            Then I press remove button of item <count>

            Examples: 
            | name    | age | phone       | count |
            | Mary    | 25  | 89999050433 | 1     |