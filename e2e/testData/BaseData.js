import assert from 'chai';
import testData from './TestData';
import configData from './ConfigData';

class BaseData {
    getId(memberNumber){
        switch (memberNumber) {
            case '1':
                return testData.getId_1();
            default:
                assert.fail(`The entered ${memberNumber} is an invalid number`);
        }
    }

    getName(memberNumber){
        switch (memberNumber) {
            case '1':
                return testData.getName_1();
            default:
                assert.fail(`The entered ${memberNumber} is an invalid Name`);
        }
    }

    getSurname(memberNumber){
        switch (memberNumber) {
            case '1':
                return testData.getSurname_1();
            default:
                assert.fail(`The entered ${memberNumber} is an invalid surname`);
        }
    }

    getMemberInputName(name) {
        switch (name) {
            case 'TestName_1':
                return configData.name_1;

            case 'TestName_2':
                return configData.name_2;
        
            default:
                return name;
        }
    }

    getEmail(memberNumber){
        switch (memberNumber) {
            case '1':
                return testData.getEmail_1();
            default:
                assert.fail(`The entered ${memberNumber} is an invalid number for member email`);
        }
    }

    getStartDate(memberNumber){
        switch (memberNumber) {
            case '1':
                return testData.getStartDate_1();
            case '2':
                return testData.getStartDate_2();
            default:
                assert.fail(`The entered ${memberNumber} is an invalid number for member email`);
        }
    }

    getMonthNumber(month) {
        switch(month) {
            case 'January':
                return '01';
            case 'February':
                return '02';
            case 'March':
                return '03';
            case 'April':
                return '04';
            case 'May':
                return '05';
            case 'June':
                return '06';
            case 'July':
                return '07';
            case 'August':
                return '08';
            case 'September':
                return '09';
            case 'October':
                return '10';
            case 'November':
                return '11';
            case 'December':
                return '12';
            }
    }
}

export default new BaseData();