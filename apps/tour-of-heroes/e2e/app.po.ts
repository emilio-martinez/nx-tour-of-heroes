import { browser, by } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  text() {
    return browser.findElement(by.css('h1')).getText();
  }
}
