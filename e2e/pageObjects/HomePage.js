import assert from "chai";

class HomePage {

    get countersSection () {
        return element(by.id('homeSectionText-counters'));
    }

    get membersSection () {
        return element(by.id('homeSectionText-members'));
    }

    get citiesSection () {
        return element(by.id('homeSectionText-cities'));
    }

    get animationSection () {
        return element(by.id('homeSectionText-toggle'));
    }

    get extrasSection () {
        return element(by.id('homeSectionText-extras'));
    }

    get peopleSection() {
        return element(by.id('homeSectionText-peoples'));
    }

    async verifyHomePage () {
        await expect(this.countersSection).toHaveText('Count');
        await expect(this.membersSection).toHaveText('Members');
        await expect(this.citiesSection).toHaveText('Cities');
        //await expect(this.animationSection).toHaveText('Animation')
    }

    async tapHomeSection(section){
        switch (section) {
            case 'Count':
                await this.countersSection.tap();
                break;
            case 'People':
                await this.peopleSection.tap();
                break;
            case 'Cities':
                await this.citiesSection.tap();
                break;
            case 'Members':
                await this.membersSection.tap();
                break;
            case 'toggle':
                await this.animationSection.tap();
                break;
            default:
                assert.fail(`The entered section ${section} is an invalid Home section`);
        }
    }
}

export default new HomePage();