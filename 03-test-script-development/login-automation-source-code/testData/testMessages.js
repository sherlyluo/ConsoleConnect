const messages = {
    validation: {
        emptyUsername: 'Please fill in username',
        emptyPassword: 'Please fill in password',
        invalidUsername: 'Your username is invalid!',
        invalidPassword: 'Your password is invalid!',
        accountLocked: 'Account is locked due to multiple failed attempts'
    },
    success: {
        loginSuccess: 'Congratulations student. You successfully logged in!',
        logoutSuccess: 'You have been successfully logged out'
    },
    errors: {
        generalError: 'An error occurred. Please try again later',
        timeoutError: 'The request has timed out',
        networkError: 'Please check your internet connection'
    }
};

module.exports = messages;