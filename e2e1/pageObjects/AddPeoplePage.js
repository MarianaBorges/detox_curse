import peopleTestData from "../testData/PeopleTestData";

class AddPeople {
    get nameInput() {
        return element(by.id('name-input'));
    }

    get ageInput() {
        return element(by.id('age-input'));
    }

    get phoneInput() {
        return element(by.id('phone-input'));
    }

    get saveButton() {
        return element(by.id('saveButton'));
    }

    get emailInput() {
        return element(by.id('email-input'));
    }

    async fillForm(data) {
        const email = this.generateRandomEmail()

        await this.nameInput.typeText(data.name);
        await this.nameInput.tapReturnKey();

        await this.ageInput.typeText(data.age);
        await this.ageInput.tapReturnKey();

        await this.phoneInput.typeText(data.phone);
        await this.phoneInput.tapReturnKey();

        await this.emailInput.typeText(email);
        await this.emailInput.tapReturnKey();

        AddPeople.saveData(data.name, data.age, data.phone, email);
    }

    static saveData(name, age, phone, email){
        peopleTestData.setAge(age);
        peopleTestData.setName(name);
        peopleTestData.setPhone(phone);
        peopleTestData.setEmail(email)
    }

    generateRandomEmail() {
        const values = '123456789';
        let email = 'test_';
        for (let i = 0; i <= 5; i++) {
            email += values.charAt(Math.round(values.length * Math.random()));
        }  
        email += '@mary.com';
        return email;
    }
}

export default new AddPeople();