import { AppGuidoPage } from './app.po';

describe('app-guido App', () => {
  let page: AppGuidoPage;

  beforeEach(() => {
    page = new AppGuidoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
