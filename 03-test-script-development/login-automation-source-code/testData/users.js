const users = {
  validUser: {
      username: 'student',
      password: 'Password123',
      expectedRole: 'student',
      permissions: ['read', 'write']
  },
  invalidUser: {
      username: 'incorrectUser',
      password: 'Password123',
      errorMessage: 'Your username is invalid!'
  },
  invalidPassword: {
      username: 'student',
      password: 'incorrectPassword',
      errorMessage: 'Your password is invalid!'
  },
  adminUser: {
      username: 'admin',
      password: 'AdminPass123',
      expectedRole: 'admin',
      permissions: ['read', 'write', 'admin']
  }
};

module.exports = users;