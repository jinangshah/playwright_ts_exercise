import { Page, expect } from "@playwright/test";
import Log from "../../support/logger/Log";
import { Elements } from "./locators/dashboardLocators"

export default class dashboard {
    constructor(private page: Page) { }

    public async verifyDashBoard(){
        // simple test to verify DashBoard & its contents
        await this.page.waitForLoadState('networkidle')
        await expect(this.page.locator(Elements.pageTitle)).toContainText('Swag Labs');
        await expect(this.page.locator(Elements.secondaryHeader)).toBeVisible();
        await expect(this.page.locator(Elements.secondaryHeader)).toContainText('Products');
        Log.info('Landed on the DashBoard');
    }

    public async verifyProduct(){
        // simple test to verify one of the products
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page.locator(Elements.listedProduct)).toBeVisible();
        await expect(this.page.locator(Elements.listedProduct)).toContainText('Sauce Labs Backpack');
    }
}