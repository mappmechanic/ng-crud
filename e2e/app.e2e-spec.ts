import { NgCrudPage } from './app.po';

describe('ng-crud App', function() {
  let page: NgCrudPage;

  beforeEach(() => {
    page = new NgCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
