import { assert, expect as chaiExpect } from "chai";
import peopleTestData from "../testData/PeopleTestData";

class ListPeople {

    get listPeopleScreen() {
        return element(by.id('people-screen'));
    }

    get listPeopleBackground() {
        return by.id('listScrollview');
    }

    get addButton() {
        return element(by.id('addButton'));
    }

    get updateButton() {
        return element(by.id('updateButton'));
    }

    async verifyListPeople(count) {
        await expect(this.listPeopleScreen).toBeVisible();
        await expect(this.updateButton).toBeVisible()
        switch (count) {
            case 2:
                await this.updateButton.tap();
                await waitFor(element(by.text('emptyList'))).not.toBeVisible().withTimeout(5000);
                
                await expect(element(by.id('peopleItem-1'))).toHaveText(`${peopleTestData.getName()} - ${peopleTestData.getAge()} - ${peopleTestData.getPhone()} - ${peopleTestData.getEmail()}`);
                break;
            case 1:
                await this.updateButton.tap();
                await waitFor(element(by.text('emptyList'))).not.toBeVisible().withTimeout(5000);
    
                await expect(element(by.id('peopleItem-0'))).toHaveText(`${peopleTestData.getName()} - ${peopleTestData.getAge()} - ${peopleTestData.getPhone()} - ${peopleTestData.getEmail()}`);
                break;
            case 0:
                await expect(element(by.text('emptyList'))).toBeVisible();
                break;
            default:
                assert.fail(`The entered ${count} is an invalid count for Members`);
                break;
        }
    }

}

export default new ListPeople()