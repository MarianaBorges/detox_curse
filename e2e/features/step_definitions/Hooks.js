import { BeforeAll, Before, AfterStep, After, AfterAll } from "@cucumber/cucumber";
import detox, { onTestDone, onTestStart } from "detox/internals";
import { detox as config } from '../../../package.json';
import peopleTestData from "../../testData/PeopleTestData";
import utilites from "../../helper/Utilites";
import { mkdirp } from 'fs-extra';
import report from '../../helper/ReportGeneration';
import replace from 'replace-in-file';

const date = new Date();

const formattedDate = ''+date.getDate()+'-'+date.getMonth()+'-'+date.getFullYear()+'_'+date.getHours()+'-'+date.getMinutes()+'-'+date.getSeconds();

BeforeAll({timeout: 120 * 10000}, async () => {
    executionStart = new Date();
    // mkdirp('e2e/.tmp/');
    mkdirp('e2e/reports/');
    await detox.init();
});

Before(async (testCase) => {
    /* let instanceBoolean = false;
    for( let i = 0; i < testCase.pickle.tags.length; i++){
        let tag = testCase.pickle.tags[i].name;
        if ((tag === '@people' && peopleTestData.getLastTag() === '@people')
        || (tag === '@editPeople' && peopleTestData.getLastTag() === '@editPeople')
        ){
            instanceBoolean = true;
        }else if ((tag === '@people') || (tag === '@editPeople')) {
            peopleTestData.setLastTag(tag)
        }
    }
    await device.launchApp({ delete: instanceBoolean, newInstance: true }); */
    await device.launchApp({ newInstance: true });

    const testSummary = {
        fullName: testCase.pickle.name,
        status: 'running'
    }

    await onTestStart(testSummary);
});

AfterStep(async function (step){
    if (step.result.status === 'FAILED') {
        const stepName = step.pickleStep.text.replace(/\s+/g, '-');
        // await device.takeScreenshot(`${device.getPlatform()}_${scenarioName}_${formattedDate}`)
        await this.attach(await utilites.takeScreenshotStream(`${device.getPlatform()}_${stepName}_${formattedDate}`), 'image/png');
    }
})
 
After(async function (scenario) {
    const testSummary = {
        fullName: scenario.pickle.name,
        status: scenario.result.status.toLowerCase()
    }
    await onTestDone(testSummary);
})

AfterAll(async () => {
    const deviceOS = device.getPlatform()
    await detox.cleanup();
    const executionEnd = new Date();

    const options = {
        files: 'e2e/Gulpfile.js',
        from: new RegExp('reporter.generate.*'),
        to: `reporter.generate(${report.getReportGeneration(deviceOS, executionStart, executionEnd)})`    
    };

    await replace(options);
})