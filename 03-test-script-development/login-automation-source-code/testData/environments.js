const environments = {
  dev: {
      baseUrl: 'https://dev.practicetestautomation.com/practice-test-login/',
      apiUrl: 'https://dev.api.practicetestautomation.com'
  },
  staging: {
      baseUrl: 'https://staging.practicetestautomation.com/practice-test-login/',
      apiUrl: 'https://staging.api.practicetestautomation.com'
  },
  prod: {
      baseUrl: 'https://practicetestautomation.com/practice-test-login/',
      apiUrl: 'https://api.practicetestautomation.com'
  }
};

module.exports = {
  environments,
  currentEnv: environments[process.env.TEST_ENV || 'prod']
};