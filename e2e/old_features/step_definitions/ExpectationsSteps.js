import { When, Given, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(120 * 1000);

When('I expect the member list header text to be {string}', async (text) => {
    //await expect(element(by.id('memberListHeader'))).toHaveText(text);
});

Then('I expect the Add Member button to have {string} as label', async (label) => {
    await expect(element(by.id('addMemberIcon'))).toHaveLabel(label);
});

Then('I expect the Add Member button to have {string} as ID', async (id) => {
    await expect(element(by.label('addMemberLabel'))).toHaveId(id);
});


When('I verify that the first image of the row exists', async () => {
    await expect(element(by.id('image-europe-0'))).toExist();
});

Then('I verify that the last image of the row exist', async () => {
    await expect(element(by.id('image-europe-2'))).not.toExist();
});

When('I verify that the first image of the row is visible', async () => {
    await expect(element(by.id('image-europe-0'))).toBeVisible();
});

Then('I verify that the last image of the row is not visible', async () => {
    await expect(element(by.id('image-europe-2'))).not.toBeVisible();
});

//Given('I tap on the {string} section', async(section) => {
//    await element(by.id(`homeSectionText-${section.toLowerCase()}`)).tap()
//});
