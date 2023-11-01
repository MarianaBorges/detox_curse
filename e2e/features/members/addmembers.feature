Feature: Add Member

    Members cam be created via the add member form

    Background: I navigate to the Add Member form 
        Given I tap on the 'Members' Home section
        And I tap the Add Member icon

    @members @addMembers
    Scenario Outline: I verify that members can be added through the add member form
        When I fill in the form with: 
        | name   | surname | b_day   | b_month   | b_year   | address_one    | address_one   | city      | postcode | country   | start_hour   | start_minute   | member        |
        | <name> | Test    | <b_day> | <b_month> | <b_year> | Test Address 1 | Test Address 2| Test City | test1n   | <country> | <start_hour> | <start_minute> | <memberCount> |
        And the Member List page is correctly displayed for <memberCount> members
        When I tap on the Member number <memberCount>
        When The Show Member page is correctly displayed with:
        | name   | surname | b_day   | b_month   | b_year   | start_day   | address_one    | address_one   | city      | postcode | country   | start_hour   | start_minute   | member        |
        | <name> | Test    | <b_day> | <b_month> | <b_year> | <start_day> | Test Address 1 | Test Address 2| Test City | test1n   | <country> | <start_hour> | <start_minute> | <memberCount> |
        And the Member List page is correctly displayed for <memberCount> members
          
        Examples:
        | names | b_day | b_month | b_year | country | start_hour | start_minute | memberCount |
        | Jose  | 20    | 09      | 1981   | Canada  | 19         | 35           | 1           |
        | Juuu  | 10    | 06      | 1991   | Canada  | 19         | 35           | 2           |

        @members @addMembers1
        Scenario Outline: I verify that members can be added through the add member form
        When I fill in the form with: 
            | name   | surname | b_day   | b_month   | b_year   | address_one    | address_one   | city      | postcode | country   | start_hour   | start_minute   | member        |
            | <name> | Test    | <b_day> | <b_month> | <b_year> | Test Address 1 | Test Address 2| Test City | test1n   | <country> | <start_hour> | <start_minute> | <memberCount> |
        
        Examples:
            | names       | b_day | b_month | b_year | country | start_hour | start_minute | memberCount |
            | TestName_1  | 20    | 09      | 1981   | Canada  | 19         | 35           | 1           |
            | TestName_2  | 10    | 06      | 1991   | Canada  | 19         | 35           | 2           |