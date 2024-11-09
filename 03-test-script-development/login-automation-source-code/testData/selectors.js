const selectors = {
    loginPage: {
        usernameInput: '#username',
        passwordInput: '#password',
        submitButton: '#submit',
        errorMessage: '#error',
        rememberMeCheckbox: '#remember-me',
        forgotPasswordLink: '#forgot-password'
    },
    loggedInPage: {
        welcomeMessage: '.welcome-message',
        logoutButton: '.wp-block-button__link.has-text-color.has-background.has-very-dark-gray-background-color',
        userProfile: '.user-profile',
        navigationMenu: '.nav-menu'
    },
    commonElements: {
        loader: '.loading-spinner',
        errorAlert: '.alert-error',
        successAlert: '.alert-success'
    }
};

module.exports = selectors;
