Feature: Delete Member

    Members cam be Deleted via the list member screen

    Background: I navigate to the Add Member form 
        Given I tap on the 'Members' Home section
        And I tap the Add Member icon

    @members @deleteMembers
    Scenario Outline: I verify that members can be added through the add member form
        When I fill in the form with: 
        | name   | surname | b_day   | b_month   | b_year   | address_one    | address_one   | city      | postcode | country   | start_hour   | start_minute   | member        |
        | <name> | Test    | <b_day> | <b_month> | <b_year> | Test Address 1 | Test Address 2| Test City | test1n   | <country> | <start_hour> | <start_minute> | <memberCount> |
        And the Member List page is correctly displayed for <memberCount> members
        When I delete Member number <memberCount>
        Then the Member List page is correctly displayed for <memberCount_2> members

        Examples:
        | names | b_day | b_month | b_year | country | start_hour | start_minute | memberCount | memberCount_2 |
        | Jose  | 20    | 09      | 1981   | Canada  | 19         | 35           | 1           | 0             |