// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export const environment = {
  production: false,
  isBackendServerAvailable: true,
  url: "http://localhost:8080",
  authToken: 'oauth_token',
  facebookUrl: 'http://graph.facebook.com/v2.9',
  server: {
    url: 'http://localhost:8080',
    logoutUrl: 'http://localhost:8080/logout',
    userUrl: 'http://localhost:8080/user',
    tokenUrl: 'http://localhost:8080/user/token',
    loginUrl: 'http://localhost:8080/login',
  },
  client: {
    loginUrl: '/login',
    logoutUrl: '/logout',
    dashboard: {
      url: '/dashboard',
      aboutUrl: '/dashboard/about',
      pricesUrl: '/dashboard/prices',
      reportsUrl: '/dashboard/reports',
      trainingsUrl: '/dashboard/trainings',
      weightsUrl: '/dashboard/weights',
    }
  }
};
