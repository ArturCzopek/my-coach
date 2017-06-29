export const environment = {
  production: true,
  isBackendServerAvailable: true,
  url: "http://my-coach-jar.xupeijfv7x.eu-central-1.elasticbeanstalk.com",
    authToken: 'oauth_token',
  facebookUrl: 'http://graph.facebook.com/v2.9',
  server: {
    url: 'http://my-coach-jar.xupeijfv7x.eu-central-1.elasticbeanstalk.com',
    logoutUrl: 'http://my-coach-jar.xupeijfv7x.eu-central-1.elasticbeanstalk.com/logout',
    userUrl: 'http://my-coach-jar.xupeijfv7x.eu-central-1.elasticbeanstalk.com0/user',
    tokenUrl: 'http://my-coach-jar.xupeijfv7x.eu-central-1.elasticbeanstalk.com/user/token',
    loginUrl: 'http://my-coach-jar.xupeijfv7x.eu-central-1.elasticbeanstalk.com/login',
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
