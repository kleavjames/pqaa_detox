import { Then, setDefaultTimeout } from '@cucumber/cucumber';
import Utilities from '../../helper/Utilities';

setDefaultTimeout(120 * 1000);

Then('I tap the back button', async () => {
  if (device.getPlatform() === 'ios') {
    await element(by.id('header-back')).atIndex(0).tap();
  } else {
    await device.pressBack();
    await Utilities.sleep(5000);
  }
});
