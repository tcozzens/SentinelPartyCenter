import { KofCPage } from './app.po';

describe('kof-c App', function() {
  let page: KofCPage;

  beforeEach(() => {
    page = new KofCPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
