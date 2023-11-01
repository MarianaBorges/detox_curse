import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import Utilites from "../../helper/Utilites";

setDefaultTimeout(120 * 1000);

// Machers by multiple 
When('I tap on the Count Days by type and text', async () => {
    const type = device.getPlatform() === 'ios' ? 'RCTTextView' : 'android.widget.TextView';

    await element(by.type(type).and(by.text('Count Days'))).multiTap(3);
})
Then('I tap on the Count Cars by ancestor and descendant text', async () => {
    await element(by.id('count_button_id').withDescendant(by.text('Count Cars'))).longPress();

    //await device.pressBack();
    //await Utilites.sleep(5000);
})
Then('I tap on the Count Heads by descendant text and ancestor type', async () => {
    //const type = device.getPlatform() === 'ios' ? 'RCTTextView' : 'android.view.ViewGroup';

    //await element(by.id('Count Heads').withAncestor(by.type(type))).tap();

    await element(by.id('Count_Heads_id')).tap({x:5, y:7})
})
//Machers by id 
When('I tap on Count Days by ID', async () => {
    await element(by.id('Count_Days_id')).tap();
})

Then('I tap on Count Cars by ID', async () => {
    await element(by.id('Count_Cars_id')).tap();
})

Then('I tap on Count Heads by ID', async () => {
    await element(by.id('Count_Heads_id')).tap();
})

Then('I tap on Count Tips by ID', async () => {
    await element(by.id('Count_Tips_id')).tap();
})
//Macher by label
When('I tap on Count Days by label', async () => {
    await element(by.label('Count_Days_Label')).tap();
})

Given('I tap on Counters section by text', async () => {
    console.log('Aki')
    await element(by.text('Count')).tap();
})
//Macher by Text
When('I tap on Count Days by text', async () => {
    await element(by.text('Count Days')).tap();
})

Then('I tap on Count Cars by text', async () => {
    await element(by.text('Count Cars')).tap();
})

Then('I tap on Count Heads by text', async () => {
    await element(by.text('Count Heads')).tap();
})

Then('I tap on Count Tips by text', async () => {
    await element(by.text('Count Tips')).tap();
})