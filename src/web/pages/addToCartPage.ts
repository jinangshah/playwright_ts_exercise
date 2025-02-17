import { Page, expect } from "@playwright/test";
import Log from "../../support/logger/Log";

export default class dashboard {
    constructor(private page: Page) { }
    private Elements = {
            listedProduct: "(//div[@class='inventory_item_name '])[1]",
            addToCartButton: "//button[@id='add-to-cart']",
            shoppingCartCount: "//span[@class='shopping_cart_badge']",
            removeButton: "//button[@id='remove']"
        }

    public async selectProduct(){
        // simple test Navigate to Product Page
        await this.page.waitForLoadState('networkidle')
        await expect(this.page.locator(this.Elements.listedProduct)).toBeVisible();
        await this.page.locator(this.Elements.listedProduct).click();
        Log.info('Selected the Product');
    }

    public async verifyAvailability(){
        // simple test to verify product is in stock
        await this.page.waitForLoadState('domcontentloaded');
        await expect(this.page.locator(this.Elements.addToCartButton)).toBeEnabled();
    }

    public async addProductToCart(){
        // simple test to add Product to cart
        await this.page.locator(this.Elements.listedProduct).click();
        await expect(this.page.locator(this.Elements.shoppingCartCount)).toContainText('1');
        await expect(this.page.locator(this.Elements.removeButton)).toBeVisible();
    }
}