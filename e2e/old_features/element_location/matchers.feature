Feature: Element matchers
    Elements can be located using the various matchers supported by Detox

    Background: I navigate to the Counters section
    Given I tap on Counters section by text 

    @matchers @text
    Scenario: I can locate elements by text
    When I tap on Count Days by text
    And I tap on Count Cars by text
    And I tap on Count Heads by text
    Then I tap on Count Tips by text 

    @matchers 
    Scenario: I can locate elements by label
    When I tap on Count Days by label

    @matchers @id
    Scenario: I can locate elements by ID
        When I tap on Count Days by ID
        And I tap on Count Cars by ID
        And I tap on Count Heads by ID
        Then I tap on Count Tips by ID 

    @matchers @multiple
    Scenario: I can locate elements by multiple matchers
        When I tap on the Count Days by type and text
        And I tap on the Count Cars by ancestor and descendant text 
        Then I tap on the Count Heads by descendant text and ancestor type