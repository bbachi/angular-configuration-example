import { AppPage } from './app-uat.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title in the header', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Angular Testing Configuration');
  });

  it('should display year in the footer', () => {
    page.navigateTo();
    expect(page.getFooterText()).toEqual(new Date().getFullYear().toString());
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
