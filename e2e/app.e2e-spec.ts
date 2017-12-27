import { AppPage } from './app.po';

// @TODO write MORE!

describe('oncokb App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to OncoKB Variant Display!');
  });
});
