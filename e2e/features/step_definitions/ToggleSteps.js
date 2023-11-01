import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(120 * 1000);

When('I press toggle', async () => {
    await element(by.id('toggle')).tap();
    await expect(element(by.id('toggle'))).toHaveToggleValue(true)
});

Then('square Should change color', async() => {
    await expect(element(by.id('square'))).toBeVisible();
    await expect(element(by.id('circle'))).not.toExist();
})