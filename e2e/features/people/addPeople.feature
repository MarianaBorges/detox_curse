Feature: Add People

    People can be created via the add People form

    Background: I navigate to the add People form
        Given I tap on the people Home section
    
        @test @people
        Scenario: I verify that people can be added through the add member form
            When I tap the Add people button
            And I fill in form with: 
            | name   | age   | phone   | count  |
            | <name> | <age> | <phone> | <count>|
            Then the people List page is correctly displayed for <count> people

            Examples:
            | name       | age | phone       | count |
            | TestName_1 | 25  | 89999050433 | 1     |
            | TestName_2 | 26  | 89999050431 | 2     |
