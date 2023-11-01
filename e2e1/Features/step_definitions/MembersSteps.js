import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import memberList from "../../pageObjects/MemberListPage";
import formPage from "../../pageObjects/FormPage";
import showMemberPage from "../../pageObjects/ShowMemberPage";

setDefaultTimeout(120 * 1000);

Then('The Show Member page is correctly displayed with:', async (formData) => {
    await showMemberPage.verifyShowMemberPage(formData.hashes()[0])
})

When('I fill in the form with:', async (formData) => {
    await formPage.fillForm(formData.hashes()[0]);
});

When('the Member List page is correctly displayed for {int} members', async (memberCount) =>{
    await memberList.verifyMemberListPage(memberCount);
});

Then('I tap the Add Member icon', async () => {
    await memberList.addMemberIcon.atIndex(0).tap();
})

When('I tap on the Member number {int}', async (memberCount) => {
    await memberList.member(memberCount).tap();
})

Then('the Add Member page is correctly displayed', async () => {
    await memberList.verifyMemberListPage();
});