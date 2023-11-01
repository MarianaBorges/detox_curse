Feature: Typing into input elements

    As a user I can type in suitable elements

    @action @typing 
    Scenario: I can type in a input field
        Given I tap on the 'Members' section
        When I tap the Add Member Icon
        Then I type 'Jose' as Name and 'Test' as Surname
        And I replace 'Test' in Name and 'Jose' in Surname
        Then I enter 'Jose' in Name and 'Test' in Surname