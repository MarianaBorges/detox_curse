import moment from "moment";
import utilites from "../helper/Utilites";
import testData from "../testData/TestData";
import baseData from "../testData/BaseData";

class FormPage {

    get addMemberHeader() {
        //não definido nesse projeto
        return element(by.id('addMemberHeader'));
    }
     get editMemberHeader() {
        return element(by.id('editMemberHeader'))
     }

    //form fields 
    get formBackground() {
        return by.id('formBackground');
    }

    get nameLabel() {
        return element(by.id('formLabel-name'));
    }

    get nameInput() {
        return element(by.id('formInput-name'));
    }

    get surnameLabel() {
        return element(by.id('formLabel-surname'));
    }

    get surnameInput() {
        return element(by.id('formInput-surname'));
    }

    get dateOfBirthLabel() {
        return element(by.id('formLabel-dateOfBirth'));
    }

    get dateOfBirthInput() {
        return element(by.id('formInput-dateOfBirth'));
    }

    get dateOfBirthPicker() {
        return element(by.id('formDataPiker'));
    }

    get confirmPickerButton() {
        return element(by.id('confirmPickerButton'));
    }

    get cancelPikerButton() {
        return element(by.id('cancelPickerButton'));
    }

    get startDayLabel() {
        return element(by.id('formLabel-startDay'));
    }

    get startDayInput() {
        return element(by.id('formInput-startDay'));
    }

    get emailLabel() {
        return element(by.id('formLabel-email'));
    }

    get emailInput() {
        return element(by.id('formInput-email'));
    }

    get addressLineOneLabel() {
        return element(by.id('formLabel-addressLineOne'));
    }

    get addressLineOneInput() {
        return element(by.id('formInput-addressLineOne'));
    }

    get addressLineTwoLabel() {
        return element(by.id('formLabel-addressLineTwo'));
    }

    get addressLineTwoInput() {
        return element(by.id('formInput-addressLineTwo'));
    }

    get cityLabel() {
        return element(by.id('formLabel-city'));
    }

    get cityInput() {
        return element(by.id('formInput-city'));
    }

    get postcodeLabel() {
        return element(by.id('formLabel-postcode'));
    }

    get postcodeInput() {
        return element(by.id('formInput-postcode'));
    }

    get countryLabel() {
        return element(by.id('formLabel-country'));
    }

    get countryInput() {
        return element(by.id('formInput-country'));
    }

    get startdateLabel() {
        return element(by.id('formLabel-startdate'));
    }

    get startdateInput() {
        return element(by.id('formInput-startdate'));
    }

    get startTimeLabel() {
        return element(by.id('formLabel-startTime'));
    }

    get startTimeInput() {
        return element(by.id('formInput-startTime'));
    }

    get saveMemberButton() {
        return element(by.id('saveMemberButton'));
    }

    // Functions used in encapsulation
    async verifyAddMemberPage() {
        await expect(this.addMemberHeader).toHaveText('Add Member');
        await this.verifyFormLabels();

        await expect(this.nameInput).toHaveText('');
        await expect(this.surnameInput).toHaveText('');
        await expect(this.dateOfBirthInput).toHaveText('');
        await expect(this.startDayInput).toHaveText('');
        await expect(this.emailInput).toHaveText('');

        await utilites.scrollToElement(
            this.postcodeInput, this.formBackground, 150, 'down'
        )

        await expect(this.addressLineOneInput).toHaveText('');
        await expect(this.addressLineTwoInput).toHaveText('');
        await expect(this.cityInput).toHaveText('');

        await element(this.formBackground).swipe('up');

        await expect(this.postcodeInput).toHaveText('');
        await expect(this.countryInput).toHaveText('');
        await expect(this.startdateInput).toHaveText('');
        await expect(this.startTimeInput).toHaveText('');

        await element(this.formBackground).swipe('down');
    }

    async verifyEditMemberPage(formData) {
        await expect(this.addMemberHeader).toHaveText(`Edit Member ${baseData.getid(formData.memberCount)}`);
        await this.verifyFormLabels();

        await expect(this.nameInput).toHaveText(formData.name);
        await expect(this.surnameInput).toHaveText(formData.surname);
        await expect(this.dateOfBirthInput).toHaveText(
            `${formData.b_day}-${formData.b_month}-${formData.b_year}`
        );
        const startDate = moment(baseData.getStartDate(formData.member))
        await expect(this.startDayInput).toHaveText(moment(startDate).format('dddd'));
        await expect(this.emailInput).toHaveText(formData.email);

        await utilites.scrollToElement(
            this.postcodeInput, this.formBackground, 150, 'down'
        )

        await expect(this.addressLineOneInput).toHaveText(formData.address_One);
        await expect(this.addressLineTwoInput).toHaveText(formData.address_Two);
        await expect(this.cityInput).toHaveText(formData.city);

        await element(this.formBackground).swipe('up');

        await expect(this.postcodeInput).toHaveText(formData.postcode);
        await expect(this.countryInput).toHaveText(formData.country);
        await expect(this.startdateInput).toHaveText(`
            ${moment(startDate).format('DD')}-${moment(startDate).format('MM')}-${moment(startDate).format('YYYY')}
        `);
        await expect(this.startTimeInput).toHaveText(`${formData.start_hour}:${formData.start_minute}`);

        await element(this.formBackground).swipe('down');
    }

    async fillForm(formData) {
        const name = baseData.getMemberInputName(formData.name)

        await utilites.typeInElement(this.nameInput, name);
        await utilites.typeInElement(this.nameInput, formData.name);
        await this.dateOfBirthLabel.tap();
        await this.selectDatePickerDate(formData.b_day, formData.b_month, formData.b_year);
        await this.confirmPicker();
        await this.startDayLabel.tap();
        const startDate = this.generateRandomDate();
        await this.selectPickerValue(this.startDayPicker, moment(startDate).format('dddd').toString())
        const email = this.generateRandomEmail();
        await utilites.typeInElement(this.emailInput, email);

        await utilites.scrollToElement(
            this.postcodeInput, this.formBackground, 150, 'down'
        );

        await utilites.typeInElement(this.addressLineOneInput, formData.address_one);
        await utilites.typeInElement(this.addressLineTwoInput, formData.address_two);
    
        await element(this.formBackground).swipe('up');

        await utilites.typeInElement(this.cityInput, formData.city);
        await utilites.typeInElement(this.postcodeInput, formData.postcode);
        await this.countryLabel.tap();

        await element(this.formBackground).swipe('up', 'fast', 0.25);

        await this.selectPickerValue(this.countryPicker, formData.country, 'up');
        await this.startdateLabel.tap();

        await this.selectCalendarDate(
            moment(startDate).format('dddd'), 
            moment(startDate).format('D'),  
            moment(startDate).format('MMMM'), 
            moment(startDate).format('YYYY'));
        
        await this.startTimeLabel.tap();
        await this.setTime(formData.start_hour, formData.start_minute);
        await this.confirmPicker();

        this.saveMemberData(formData.member, name, formData.surname, email, startDate);
    }
    
    // Support functions
    async verifyFormLabels() {
        await expect(this.nameLabel).toHaveText('Name:');
        await expect(this.surnameLabel).toHaveText('Surname:');
        await expect(this.dateOfBirthLabel).toHaveText('Date of Birth:');
        await expect(this.startDayLabel).toHaveText('Start Day');
        await expect(this.emailLabel).toHaveText('Email:');

        await utilites.scrollToElement(
            this.postcodeInput, this.formBackground, 150, 'down'
        )

        await expect(this.addressLineOneLabel).toHaveText('Address Line One:');
        await expect(this.addressLineTwoLabel).toHaveText('Address Line Two:');
        await expect(this.cityLabel).toHaveText('City:');

        await element(this.formBackground).swipe('up');

        await expect(this.postcodeLabel).toHaveText('Postcode:');
        await expect(this.countryLabel).toHaveText('Country:');
        await expect(this.startdateLabel).toHaveText('Start Date:');
        await expect(this.startTimeLabel).toHaveText('Start Time:');

        await element(this.formBackground).swipe('down');
    }


    async scrollToElement(targetElement, background, pixels, direction) {
        await waitFor(targetElement)
                .toBeVisible()
                .whileElement(background)
                .scroll(pixels, direction, direction === 'left' ? 0.25 : NaN);
    }

    async selectCalendarDate(weekday, day, month, year) {
        while (await utilites.softTextAssertion(element(by.id('HEADER_MONTH_NAME')),
            `${month} ${year}`) === false ){
                await element(by.id('native.calendar.CHANGE_MONTH_RIGHT_ARROW')).tap();
        }
        await element(by.label(` ${weekday} ${day} ${month} ${year} `)).atIndex(0).tap();
    }

    async selectDatePickerDate(day, month, year){
        if (device.getPlatform() === 'ios'){
            await  this.dateOfBirthPicker.setDatePickerDate(`${day}-${month}-${year}`, 'dd-MM-yyyy');
            await element(by.id('confirmDateButton')).tap();
        } else {
            await element(by.text('2003')).tap();
            while (await utilites.softElementAssertion(element(by.text(year))) === false) {
                await element(by.type('android.widget.ListView')).swipe('down', 'slow', 0.4);
            }
            await element(by.text(year)).tap();
            await element(by.text('OK')).tap();
        }
    }

    /*async setTime(hours, minutes) {
        if (device.getPlatform() === 'ios') {
            await element(this.formBackground).swipe('up', 'fast', 0.5);
            await element(by.id('formTimePicker')).setDatePickerDate(`${hours}:${minutes}`, 'HH:mm')
        } else {
            await element(by.label('Swich to text input mode for the time input.')).tap();
            await this.tyInElement(element(by.type('android.widget.EditText')).atIndex(0), )
        } 
    }*/

    async confirmPicker() {
        if (device.getPlatform() === 'ios') {
            await this.confirmPickerButton.tap();
        } else {
            await element(by.text('OK')).tap();
        }
    }

    async cancelPiker() {
        if (device.getPlatform() === 'ios') {
            await this.cancelPikerButton.tap();
        } else {
            await element(by.text('CANCEL')).tap();
        }
    }

    async saveMemberData(memberNumber, name, surname, email, startDate){
        switch(memberNumber) {
            case '1':
                testData.setName_1(name);
                testData.setSurname_1(surname);
                testData.setEmail_1(email);
                testData.setStartDate_1(startDate)
                break;
            case '2':
                testData.setName_2(name);
                testData.setSurname_2(surname);
                testData.setEmail_2(email);
                testData.setStartDate_2(startDate)
                break;
            default:
                assert.fail(`The entered ${memberNumber} is an invalid Member`)
        }
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

    generateRandomDate() {
        const randomDay = Math.floor(Math.random() * 90);
        let date = moment().add(randomDay, 'days');
        /* if (moment(date).format('MMMM') === 'March') {
            date = moment(date.add(1, 'month'));
        } */

        return data;
    }
}

export default new FormPage();