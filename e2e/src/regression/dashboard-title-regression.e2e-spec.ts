import { AppPage } from './dashboard-regression.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have the title as Types of Tests', () => {
    page.navigateTo();
    expect(page.getTitle1Text()).toEqual('Types of Tests');
  });

  it('should have the title as Test Description', () => {
    page.navigateTo();
    expect(page.getTitle2Text()).toEqual('Test Description');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
