import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import memberList from "../../pageObjects/MemberListPage";
import formPage from "../../pageObjects/FormPage";
import showMemberPage from "../../pageObjects/ShowMemberPage";

setDefaultTimeout(120 * 1000);

When('I delete Member number {int}', async (member) => {
    await memberList.deleteMember(member);
})

Then('The Show Member page is correctly displayed with:', async (formData) => {
    await showMemberPage.verifyShowMemberPage(formData.hashes()[0])
})

Then('I fill in the form with:', async (formData) => {
    await formPage.fillForm(formData.hashes()[0]);
});

When('the Member List page is correctly displayed for {int} members', async (memberCount) =>{
    await memberList.verifyMemberListPage(memberCount);
});

Then('I tap the Add Member icon', async () => {
    await waitFor(memberList.addMemberIcon.atIndex(0)).toBeVisible().withTimeout(10000)
    await memberList.addMemberIcon.atIndex(0).tap();
})

When('I tap on the Member number {int}', async (memberCount) => {
    await memberList.member(memberCount).tap();
})

Then('the Add Member page is correctly displayed', async () => {
    await memberList.verifyMemberListPage();
});

Then('The Edit Member page is correctly displayed with:', async (formData) => {
    await formPage.verifyEditMemberPage(formData.hashes()[0]);
});

Then('I tap on the Edit Member icon', async () => {
    await showMemberPage.editMemberIcon.tap();
})