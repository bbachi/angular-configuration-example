import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitle1Text() {
    return element(by.css('app-root app-dashboard .testtypes')).getText() as Promise<string>;
  }

  getTitle2Text() {
    return element(by.css('app-root app-dashboard .testdescrip')).getText() as Promise<string>;
  }
}
