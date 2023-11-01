import { assert, expect as chaiExpect } from "chai";
import testData from "../testData/TestData";
import utilites from "../helper/Utilites";
import BaseData from "../testData/BaseData";

class MemberListPage {

    get MemberListHeader() {
        return element(by.id('memberListHeader'));
    }

    get addMemberIcon() {
        return element(by.id('addMemberIcon'));
    }

    get noResultsText() {
        return element(by.id('noResultsText'))
    }

    get member_1() {
        return element(by.id('member-0'));
    }

    get memberFullName_1(){
        return element(by.id('memberFullName-0'));
    }

    get memberId_1() {
        return element(by.id('memberId-0'));
    }

    get memberDelete_1() {
        return element(by.id('memberDelete-0'));
    }

    member(memberNumber) {
        return element(by.id(`member-${memberNumber - 1}`))
    }

    memberDelete(memberNumber) {
        return element(by.id(`memberDelete-${memberNumber}`));
    }

    get deleteModalText() {
        return element(by.id('deleteModalText'));
    }

    get deleteModalYesButton() {
        return element(by.id('deleteModalButton-Yes'));
    }

    get deleteModalNoButton() {
        return element(by.id('deleteModalButton-Yes'))
    }

    async verifyMemberListPage(memberCount) {
        //await expect(this.MemberListHeader).toHaveText('Members');
        await expect(this.addMemberIcon).toBeVisible();

        switch(memberCount){
            case 0:
                await expect(this.noResultsText).toHaveText('No Members added in the list');
                break;
            case 1:
                await expect(this.noResultsText).not.toBeVisible();
                // await expect(this.memberFullName_1).toHaveText(
                //    `${testData.getName_1()} ${testData.getSurname_1()} -`);
                await expect(this.memberFullName_1).toHaveText(
                    `Teste Test -`)
                await utilites.getElementText(this.memberId_1);
                chaiExpect(await utilites.getElementText(this.memberFullName_1))
                    .to.include('Test');
                break;
            default:
                assert.fail(`The entered ${memberCount} is an invalid count for Members`);
        }
    }

    async deleteMember(member){
        await this.memberDelete(member - 1).tap();

        await expect(this.deleteModalText).toHaveText(`
            Are you sure you want to delete ${BaseData.getName(member.toString())} ${BaseData.getSurname(member.toString())}?`)

        await expect(this.deleteModalYesButton).toHaveText('YES');
        await expect(this.deleteModalNoButton).toHaveText('NO');

        await this.deleteModalYesButton.tap();
    }
}

export default new MemberListPage();