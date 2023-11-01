import { Given, When, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(120 * 1000);

When('I tap on the {string} title and image', async(continental) => {
    await element(by.id(`continentLabel-${continental.toLowerCase()}`)).tap();
    await element(by.id(`imageTitle-${continental.toLowerCase()}-0`)).tap();
    await element(by.id(`image-${continental.toLowerCase()}-0`)).tap();
});

Given('I tap on the {string} section', async(section) => {
    await element(by.id(`homeSectionText-${section.toLowerCase()}`)).tap()
});

