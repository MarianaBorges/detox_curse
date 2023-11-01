import { BeforeAll, Before, AfterAll } from "@cucumber/cucumber";
import detox from "detox/internals";
import { detox as config } from '../../../package.json';
import peopleTestData from "../../testData/PeopleTestData";

BeforeAll({timeout: 60 * 10000}, async () => {
    await detox.init();
});

Before(async (testCase) => {
    /* let instanceBoolean = false;
    for( let i = 0; i < testCase.pickle.tags.length; i++){
        let tag = testCase.pickle.tags[i].name;
        if (tag === '@people' && peopleTestData.getLastTag() === '@people'){
            instanceBoolean = true;
        }else if (tag === '@people') {
            peopleTestData.setLastTag(tag)
        }
    }
    await device.launchApp({ delete: instanceBoolean, newInstance: true }); */
    await device.launchApp({ newInstance: true });
});

AfterAll(async () => {
    await detox.cleanup();
})