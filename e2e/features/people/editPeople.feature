 Feature: Edit People

    People can be edited via the add People form

    Background: I navigate to the add People form
        Given I tap on the people Home section
    
        @test @editPeople
        Scenario: I verify that people can be added through the add people form
            When I tap the Add people button
            And I fill in form with: 
            | name   | age    | phone   | count   |
            | <name> | <age>  | <phone> | <count> |
            When the people List page is correctly displayed for <count> people
            And I press list item <count>
            Then I fill in form with: 
            | name   | age  | phone   | count   |
            | Mary 2 | 17   | <phone> | <count> |
            When the people List page is correctly displayed for <count> people

            Examples: 
            | name    | age | phone       | count |
            | Mary    | 25  | 89999050433 | 1     |