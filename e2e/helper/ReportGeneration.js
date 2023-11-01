class ReportGeneration {

    getReportGeneration(deviceOS, executionStart, executionEnd) {
        const isIOS = deviceOS === 'ios' ? true : false;
        deviceOS = isIOS ? 'IOS' : 'Android';
        const deviceName = isIOS ? 'iPhone 12 Pro' : 'Pixel XL';
        const deviceOSVersion = isIOS ? '14.5' : '10';
        return JSON.stringify({
            jsonDir:'.tmp/',
            reportPath: '/reports/',
            pageTitle: `Pinnecle QA Academy - ${deviceOS} Test Automation Report`,
            reportName: `Pinnecle QA Academy - ${deviceOS} Test Automation Report: Regression Test Suite`,
            displayDuration: true,
            metadate:{
                device: deviceName,
                platform:{
                    name: deviceOS,
                    version: deviceOSVersion
                },
                app:{
                    name: 'membersApp',
                    version: '1.0.0'
                }
            },
            customData: {
                title: 'Run Information',
                data: [
                    {label: 'Execution Date', value: new Date()},
                    {label: 'Execution Start Time', value: new Date(executionStart)},
                    {label: 'Execution End Time', value: new Date(executionEnd)},
                    {label: 'Execution Duration', value: new Date()},
                    {label: 'Environment', value: 'UTA'},
                    {label: 'Framework', value: 'Detox'}
                ]
            }
        })
    }
}

export default new ReportGeneration();