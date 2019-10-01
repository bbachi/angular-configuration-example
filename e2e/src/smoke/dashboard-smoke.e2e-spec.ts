import { AppPage } from './dashboard-smoke.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Nothing Selcted! when no selection is made on test types', () => {
    page.navigateTo();
    expect(page.getTestDescription()).toEqual('Nothing Selcted!');
  });

  it('should display corresponding test description on click of test type', () => {
    page.navigateTo();
    browser.actions().click(page.getListGroupItems()).perform()
    expect(page.getTestDescription()).toEqual('These tests refer to testing isolated components which means testing without any dependencies.');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
