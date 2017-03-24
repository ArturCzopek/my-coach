import {MyCoachPage} from "./app.po";

describe('my-coach App', () => {
  let page: MyCoachPage;

  beforeEach(() => {
    page = new MyCoachPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
