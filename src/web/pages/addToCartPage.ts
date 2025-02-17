import { Page, expect } from "@playwright/test";
import Log from "../../support/logger/Log";
import { Elements } from "./locators/cart&checkoutLocators"

export default class dashboard {
    constructor(private page: Page) { }

    public async selectProduct(){
        // simple test Navigate to Product Page
        await this.page.waitForLoadState('networkidle')
        await expect(this.page.locator(Elements.listedProduct)).toBeVisible();
        await this.page.locator(Elements.listedProduct).click();
        Log.info('Selected the Product');
    }

    public async verifyAvailability(){
        // simple test to verify product is in stock
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page.locator(Elements.addToCartButton)).toBeEnabled();
    }

    public async addProductToCart(){
        // simple test to add Product to cart
        await this.page.locator(Elements.listedProduct).click();
        await expect(this.page.locator(Elements.shoppingCartCount)).toContainText('1');
        await this.page.locator(Elements.shoppingCartLink).click();
        await expect(this.page.locator(Elements.removeButton)).toBeVisible();
    }
}