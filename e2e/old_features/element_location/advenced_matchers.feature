Feature: Advenced matchers
    Elements can be matched dynamically and navigation elements can be located

    @advencedmatchers @dynimic 
    Scenario: Home sections can be matched dynamically
    Given I tap on the "<section>" section

    Examples:
    | section |
    | Counters |

    @advencedmatchers @list 
    Scenario: List element can be matched dynamically
        Given I tap on the "Cities" section
        Then I tap on the "<continent>" title and image

        Examples:
            | continent  |
            | Europe     |
            | USA/Canada |
