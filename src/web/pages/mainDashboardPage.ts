import { Page, expect } from "@playwright/test";
import Log from "../../support/logger/Log";

export default class dashboard {
    constructor(private page: Page) { }
    private Elements = {
            pageTitle: "//div[@class='app_logo']",
            secondaryHeader: "//div[@class='header_secondary_container']/span",
            listedProduct: "(//div[@class='inventory_item_name '])[1]"
        }

    public async verifyDashBoard(){
        // simple test to verify DashBoard & its contents
        await this.page.waitForLoadState('networkidle')
        await expect(this.page.locator(this.Elements.pageTitle)).toContainText('Swag Labs');
        await expect(this.page.locator(this.Elements.secondaryHeader)).toBeVisible();
        await expect(this.page.locator(this.Elements.secondaryHeader)).toContainText('Products');
        Log.info('Landed on the DashBoard');
    }

    public async verifyProduct(){
        // simple test to verify one of the products
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page.locator(this.Elements.listedProduct)).toBeVisible();
        await expect(this.page.locator(this.Elements.listedProduct)).toContainText('Sauce Labs Backpack');
    }
}