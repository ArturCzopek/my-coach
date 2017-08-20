import {UserService} from "./user.service";
import {Http} from "@angular/http";
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";


class MockHttp extends Http {
  constructor() {
    super(null, null);
  }
}

describe('UserService', () => {

  const userService: UserService = new UserService(new MockHttp());

  it('#getTokenFromRouteParams should get token from route params', () => {

    const tokenToReturn = '1234';
    const activatedRoute = new ActivatedRoute();
    activatedRoute.snapshot = new ActivatedRouteSnapshot();
    activatedRoute.snapshot.params = {
      'oauth-token': tokenToReturn
    };

    const tokenFromService = userService.getTokenFromRouteParams(activatedRoute);
    expect(tokenFromService).toBe(tokenToReturn);
  });


  it('#getTokenFromRouteParams should get undefined token if not present', () => {

    const activatedRoute = new ActivatedRoute();
    activatedRoute.snapshot = new ActivatedRouteSnapshot();
    activatedRoute.snapshot.params = {};

    const tokenFromService = userService.getTokenFromRouteParams(activatedRoute);
    expect(tokenFromService).toBeUndefined();
  });
});
