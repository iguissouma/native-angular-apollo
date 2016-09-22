import { NativeAngularApolloPage } from './app.po';

describe('native-angular-apollo App', function() {
  let page: NativeAngularApolloPage;

  beforeEach(() => {
    page = new NativeAngularApolloPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
