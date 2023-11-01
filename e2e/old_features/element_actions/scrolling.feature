Feature: Scrolling can be carried out

    As a user I can scroll vertically and horizontally

    @actions @Scrolling @verticalscrolling
    Scenario: I can scroll vertically 
    Given I tap on the 'Members' section
    And I tap the Add Member Icon
    When I scroll 'formBackground' 350 pixels 'down'
    And I scroll 'formBackground' 350 pixels 'up'
    And I scroll 'formBackground' 350 pixels 'down' with X: 0.5 and Y: 0.1
    Then I scroll 'formBackground' 350 pixels 'up' with X: 0.5 and Y: 0.9

    @actions @Scrolling @verticalscrolling
    Scenario: I can scroll vertically to edges
    Given I tap on the 'Members' section
    And I tap the Add Member Icon    
    When I scroll 'formBackground' to the 'bottom'
    Then I scroll 'formBackground' to the 'top'


    @actions @Scrolling @verticalscrolling @test
    Scenario: I can scroll vertically to element
    Given I tap on the 'Members' section
    And I tap the Add Member Icon 
    When I scroll 'formBackground' to 'formLabel-startdate' at 50 pixels 'down'
    Then I scroll 'formBackground' to 'formLabel-surname' at 50 pixels 'up'

    @actions @Scrolling @horizontallyscrolling
    Scenario: I can scroll horizontally on FlatList
        Given I tap on the 'Cities' section
        When I scroll 'imageBackground-europe' to 'image-europe-3' at 50 pixels 'right'
        Then I scroll 'imageBackground-europe' to 'image-europe-0' at 50 pixels 'left'
        