 //Meu projeto não tem navegação pela bottom bar 
 //então códigos que se referem a ela não vão funcionar
import assert from 'chai';

class CommonPage {

    get homeNavigationImage() {
        return element(by.id('homeNavigationImage')).atIndex(0);
    }

    get homeNavigationSection() {
        return element(by.id('homeNavigationSection')).atIndex(0);
    }

    get citiesNavigationImage() {
        return element(by.id('citiesNavigationImage')).atIndex(0);
    }

    get citiesNavigationSection() {
        return element(by.id('citiesNavigationSection')).atIndex(0);
    }

    get membersNavigationImage() {
        return element(by.id('membersNavigationImage')).atIndex(0);
    }

    get membersNavigationSection() {
        return element(by.id('membersNavigationSection')).atIndex(0);
    }

    async tapNavigationSection(section){
        switch (section) {
            case 'Home':
                await expect(this.homeNavigationImage).toBeVisible();
                await this.homeNavigationSection.tap();
                break;
            case 'Cities':
                await expect(this.citiesNavigationImage).toBeVisible();
                await this.citiesNavigationSection.tap();
                break;
            case 'Members': 
                await expect(this.membersNavigationImage).toBeVisible();
                await this.membersNavigationSection.tap();
            default:
                assert.fail(`The entered ${section} is a invalid Navigation section`)
                break;
        }
    }
}

export default new CommonPage();