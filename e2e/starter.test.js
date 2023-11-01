describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should have a button', async () => {
    await expect(element(by.id('button-details'))).toBeVisible();
  });
});
