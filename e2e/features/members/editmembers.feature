Feature: Edit Member

    Members can be edit via the add member form

    Background: I navigate to the edit Member form 
        Given I tap on the 'Members' Home section
        And I tap the Add Member icon

    @members @editMember
    Scenario Outline: I verify that members can be added through the add member form
        When I fill in the form with: 
        | name   | surname | b_day   | b_month   | b_year   | address_one    | address_one   | city      | postcode | country   | start_hour   | start_minute   | member        |
        | <name> | Test    | <b_day> | <b_month> | <b_year> | Test Address 1 | Test Address 2| Test City | test1n   | <country> | <start_hour> | <start_minute> | <memberCount> |
        And the Member List page is correctly displayed for <memberCount> members
        When I tap on the Member number <memberCount>
        And I tap on the Edit Member icon
        Then The Edit Member page is correctly displayed with:
        | name   | surname | b_day   | b_month   | b_year   | start_day   | address_one    | address_one   | city      | postcode | country   | start_hour   | start_minute   | member        |
        | <name> | Test    | <b_day> | <b_month> | <b_year> | <start_day> | Test Address 1 | Test Address 2| Test City | test1n   | <country> | <start_hour> | <start_minute> | <memberCount> |
         When I fill in the form with: 
        | name     | surname | b_day     | b_month     | b_year     | address_one       | address_one      | city           | postcode      | country     | start_hour     | start_minute     | member        |
        | <name_2> | Test    | <b_day_2> | <b_month_2> | <b_year_2> | Test Address edit | Test Address edit| Test City edit | test1n edit   | <country_2> | <start_hour_2> | <start_minute_2> | <memberCount> |
        Then The Show Member page is correctly displayed with:
        | name   | surname | b_day   | b_month   | b_year   | start_day   | address_one    | address_one   | city      | postcode | country   | start_hour   | start_minute   | member        |
        | <name> | Edit    | <b_day> | <b_month> | <b_year> | <start_day> | Test Address 1 | Test Address 2| Test City | test1n   | <country> | <start_hour> | <start_minute> | <memberCount> |
        When I tap the back button
        Then the Member List page is correctly displayed for <memberCount> members

        Examples:
        | names | b_day | b_month | b_year | country | start_hour | start_minute | memberCount | names_2 | b_day_2 | b_month_2 | b_year_2 | country_2 | start_hour_2 | start_minute_2 |
        | Jose  | 20    | 09      | 1981   | Canada  | 19         | 35           | 1           | Juuu    | 10      | 06        | 1991     | Canada    | 19           | 35             |
