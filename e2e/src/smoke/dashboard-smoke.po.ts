import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getListGroupItems() {
     return element(by.css('app-root app-dashboard .list-group-item'));
  }

  getTestDescription() {
    return element(by.css('app-root app-dashboard .panel-body')).getText() as Promise<string>;
  }
}
