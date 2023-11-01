import { When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import countersPages from "../../pageObjects/CountersPages";

setDefaultTimeout(120 * 1000);

When('I press {string} {int} times', async (count, number) => {
    await countersPages.pressCountButton(count, number);
})

Then('Label {string} should show {string}', async (count, number) => {
    await expect(countersPages.countAmount(count)).toHaveText(number);
});