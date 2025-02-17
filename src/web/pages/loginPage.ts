import { Page, expect } from "@playwright/test";
import Log from "../../support/logger/Log";

export default class loginPage {

    constructor(private page: Page) { }
    
    private Elements = {
        pageTitle: "//div[@class='login_logo']",
        emailInput: "//input[@id='user-name']",
        passwordInput: "//input[@id='password']",
        logInButton: "//input[@id='login-button']",
        dashboard: "//div[@class='app_logo']",
        errorMessage: "//h3"
    }

    public async navigateToLoginPage() {
        await this.page.goto(process.env.BASE_URL, { waitUntil: 'domcontentloaded', timeout: 600000 });
        await expect(this.page.locator(this.Elements.pageTitle)).toContainText('Swag Labs');
        Log.info('Landed on Login Page');
    }

    public async emailLogin(username,password) {
        await this.page.waitForLoadState('networkidle');
        await this.page.locator(this.Elements.emailInput).fill(username);
        await this.page.locator(this.Elements.passwordInput).fill(password);
        await this.page.locator(this.Elements.logInButton).click();
        Log.info('Entered Email and Password and clicked login');
        await expect(this.page.locator(this.Elements.dashboard)).toContainText('Swag Labs');
        Log.info('Successfully logged in and landed on Dashboard');
        await this.page.waitForLoadState('networkidle');
    }

    public async loginSuccess() {
        await expect(this.page.locator(this.Elements.dashboard)).toContainText('Swag Labs');
        Log.info('Successfully logged in and landed on Dashboard');
        await this.page.waitForLoadState('networkidle');
    }

    public async loginFail() {
        Log.info('Entered Email and Password and clicked login');
        await expect(this.page.locator(this.Elements.errorMessage)).toContainText('Epic sadface');
        Log.info('Invalid Login');
        await this.page.waitForLoadState('networkidle');
    }
}
