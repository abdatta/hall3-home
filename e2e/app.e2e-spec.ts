import { Hall3HomePage } from './app.po';

describe('hall3-home App', function() {
  let page: Hall3HomePage;

  beforeEach(() => {
    page = new Hall3HomePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
