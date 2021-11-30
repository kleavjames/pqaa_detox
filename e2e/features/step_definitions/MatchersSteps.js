import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

/**
 * Match by multiple matchers
 */
When('I tap on the Water counter title by type and text', async () => {
  const typeLocator =
    device.getPlatform() === 'ios' ? 'RCTTextView' : 'android.widget.TextView';

  await element(by.type(typeLocator).and(by.text('WATER COUNTER'))).tap();
});

Then('I tap on the Electricity counter by traits and text', async () => {
  await element(
    by.traits(['staticText']).and(by.text('ELECTRICITY COUNTER'))
  ).tap();
});

Then(
  'I tap on the Gas counter by ancestor ID and descendant text',
  async () => {
    await element(
      by.id('counterButton').withDescendant(by.text('GAS COUNTER'))
    ).tap();
  }
);

Then(
  'I tap on the Broadband counter by descendant text and ancestor type',
  async () => {
    const typeLocator =
      device.getPlatform() === 'ios' ? 'RCTView' : 'android.view.ViewGroup';

    await element(
      by.text('BROADBAND COUNTER').withAncestor(by.type(typeLocator))
    ).tap();
  }
);

/**
 * Match by ID
 */
When('I tap on the Water counter by ID', async () => {
  await element(by.id('waterCounter')).longPress(5000);
});

Then('I tap on the Electricity counter by ID', async () => {
  await element(by.id('electricityCounter')).multiTap(3);
});

Then('I tap on the Gas counter by ID', async () => {
  await element(by.id('gasCounter')).multiTap(6);
});

Then('I tap on the Broadband counter by ID', async () => {
  await element(by.id('broadbandCounter')).tap({ x: 5, y: 250 });
});

/**
 * Match by label
 */
When('I tap the Home navigation section by label', async () => {
  await element(by.label('Home')).atIndex(0).tap();
});
Then('I tap on the Water counter by label', async () => {
  await element(by.label('waterCounterLabel')).tap();
});

/**
 * Match by text
 */
Given('I tap on the Counters section by text', async () => {
  await element(by.text('Counters')).tap();
});

When('I tap on the Water counter by text', async () => {
  await element(by.text('WATER COUNTER')).tap();
});

Then('I tap on the Electricity counter by text', async () => {
  await element(by.text('ELECTRICITY COUNTER')).tap();
});

Then('I tap on the Gas counter by text', async () => {
  await element(by.text('GAS COUNTER')).tap();
});

Then('I tap on the Broadband counter by text', async () => {
  await element(by.text('BROADBAND COUNTER')).tap();
});
