Feature: press toggle 
    Should change color when a press toggle

    Background: I navigate to the add People form
        Given I tap on the 'toggle' Home section
        
        @toggle
        Scenario Outline: teste ai
        When I press toggle
        Then square Should change color 