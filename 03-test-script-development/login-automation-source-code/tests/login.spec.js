const { test, expect } = require('@playwright/test');
const { currentEnv } = require('../testData/environments');
const users = require('../testData/users');
const selectors = require('../testData/selectors');
const messages = require('../testData/testMessages');

test.describe('Login Functionality Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(currentEnv.baseUrl);
        // Take screenshot of initial page
        await page.screenshot({ path: `./test-results/screenshots/${test.info().title}/initial-state.png` });
    });

    test('Positive Login Test - Valid Credentials', async ({ page }) => {
        // Create unique directory for this test's screenshots
        const screenshotDir = `./test-results/screenshots/positive-login`;

        // 1. Initial state already captured in beforeEach

        // 2. Enter username
        await page.fill(selectors.loginPage.usernameInput, users.validUser.username);
        await page.screenshot({ path: `${screenshotDir}/after-username-input.png` });

        // 3. Enter password
        await page.fill(selectors.loginPage.passwordInput, users.validUser.password);
        await page.screenshot({ path: `${screenshotDir}/after-password-input.png` });

        // 4. Click submit button
        await page.click(selectors.loginPage.submitButton);
        await page.screenshot({ path: `${screenshotDir}/after-submit-click.png` });

        // 5. Verify URL
        await expect(page).toHaveURL(/.*logged-in-successfully/);
        await page.screenshot({ path: `${screenshotDir}/successful-login-page.png` });

        // 6. Verify success message
        await expect(page.getByText(messages.success.loginSuccess)).toBeVisible();
        await page.screenshot({ path: `${screenshotDir}/success-message-visible.png` });

        // 7. Verify logout button
        await expect(page.locator(selectors.loggedInPage.logoutButton)).toBeVisible();
        await page.screenshot({ path: `${screenshotDir}/logout-button-visible.png` });
    });

    test('Negative Login Test - Invalid Username', async ({ page }) => {
        const screenshotDir = `./test-results/screenshots/invalid-username`;

        // 1. Initial state already captured in beforeEach

        // 2. Enter invalid username
        await page.fill(selectors.loginPage.usernameInput, users.invalidUser.username);
        await page.screenshot({ path: `${screenshotDir}/after-invalid-username.png` });

        // 3. Enter password
        await page.fill(selectors.loginPage.passwordInput, users.invalidUser.password);
        await page.screenshot({ path: `${screenshotDir}/after-password-input.png` });

        // 4. Click submit
        await page.click(selectors.loginPage.submitButton);
        await page.screenshot({ path: `${screenshotDir}/after-submit-click.png` });

        // 5 & 6. Verify error message
        const errorMessage = page.locator(selectors.loginPage.errorMessage);
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText(users.invalidUser.errorMessage);
        await page.screenshot({ path: `${screenshotDir}/error-message-visible.png` });
    });

    test('Negative Login Test - Invalid Password', async ({ page }) => {
        const screenshotDir = `./test-results/screenshots/invalid-password`;

        // 1. Initial state already captured in beforeEach

        // 2. Enter valid username
        await page.fill(selectors.loginPage.usernameInput, users.invalidPassword.username);
        await page.screenshot({ path: `${screenshotDir}/after-username-input.png` });

        // 3. Enter invalid password
        await page.fill(selectors.loginPage.passwordInput, users.invalidPassword.password);
        await page.screenshot({ path: `${screenshotDir}/after-invalid-password.png` });

        // 4. Click submit
        await page.click(selectors.loginPage.submitButton);
        await page.screenshot({ path: `${screenshotDir}/after-submit-click.png` });

        // 5 & 6. Verify error message
        const errorMessage = page.locator(selectors.loginPage.errorMessage);
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toHaveText(users.invalidPassword.errorMessage);
        await page.screenshot({ path: `${screenshotDir}/error-message-visible.png` });
    });
});

// Add helper function to ensure screenshot directory exists
const fs = require('fs');
const path = require('path');

test.beforeAll(async () => {
    // Create screenshots directory if it doesn't exist
    const screenshotsDir = path.join(process.cwd(), 'test-results', 'screenshots');
    
    // Create main screenshots directory
    if (!fs.existsSync(screenshotsDir)) {
        fs.mkdirSync(screenshotsDir, { recursive: true });
    }

    // Create directories for each test
    const testDirs = ['positive-login', 'invalid-username', 'invalid-password'];
    testDirs.forEach(dir => {
        const testDir = path.join(screenshotsDir, dir);
        if (!fs.existsSync(testDir)) {
            fs.mkdirSync(testDir, { recursive: true });
        }
    });
});