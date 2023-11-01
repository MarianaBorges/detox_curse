import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import listPeoplePage from "../../pageObjects/ListPeoplePage";
import addPeoplePage from "../../pageObjects/AddPeoplePage";
setDefaultTimeout(120 * 1000);

When('I tap the Add people button', async () => {
    await listPeoplePage.addButton.tap();
})

When('I fill in form with:', async (formData) => {
    await addPeoplePage.fillForm(formData.hashes()[0]);
    await addPeoplePage.saveButton.tap();
});

Then('the people List page is correctly displayed for {int} people', async(count) => {
    await listPeoplePage.verifyListPeople(count);
})

Then('I press list item {int}', async (count) => {
    await listPeoplePage.pressPeopleEditItem(count);

    await expect(element(by.text('EditPeople'))).toBeVisible();
})

Then('I press remove button of item {int}', async (count) => {
   await listPeoplePage.removePeopleItem(count);
})

Given('I tap on the people Home section', async () => {
    const homeButton = element(by.id('homeSectionText-peoples'));
    await homeButton.tap();

    await expect(element(by.id('people-screen'))).toBeVisible();
});