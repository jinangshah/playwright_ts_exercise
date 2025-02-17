import { Page, expect } from "@playwright/test";
import Log from "../../support/logger/Log";

export default class dashboard {
    constructor(private page: Page) { }
    private Elements = {
            cartPageTitle: "//span[@class='title']",
            itemInfo: "//div[@class='inventory_item_name']",
            BtnCheckout: "//button[@id='checkout']",
            formFirstName: "//input[@id='first-name']",
            formLastName: "//input[@id='last'-name']",
            formPostCode: "//input[@id='postal-code']",
            BtnContinue: "//input[@id='continue']",
            BtnFinish: "//button[@id='finish']",
            orderPlacedMsg: "//h2[@class='complete-header']",
            BtnBackToHome: "button[@id='back-to-products']"
        }
    private formInputs = {
            firstName: "Jinang",
            lastName: "Shah",
            psotCode: "2150"
    }

    public async verifyCart(){
        // simple test to verify cart page
        await this.page.waitForLoadState('networkidle');
        await expect(this.page.locator(this.Elements.cartPageTitle)).toContainText('Your Cart');
        await expect(this.page.locator(this.Elements.itemInfo)).toContainText('Sauce Labs Backpack');
        Log.info('Verified Cart');
    }

    public async proceedToCheckout(){
        // simple test to proceed to checkout
        await expect(this.page.locator(this.Elements.BtnCheckout)).toBeVisible();
        await this.page.locator(this.Elements.BtnCheckout).click();
        Log.info('Proceeding to checkout');
    }

    public async fillShippingInfo(){
        // simple test to fill up shipping info
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.locator(this.Elements.formFirstName).fill(this.formInputs.firstName);
        await this.page.locator(this.Elements.formLastName).fill(this.formInputs.lastName);
        await this.page.locator(this.Elements.formPostCode).fill(this.formInputs.psotCode);
        await this.page.locator(this.Elements.BtnContinue).click();
        Log.info('Proceeding to Order Summary')
    }

    public async verifyOrderDetails(){
        // simple test to verify order summary
        await expect(this.page.locator(this.Elements.itemInfo)).toContainText('Sauce Labs Backpack');
        await this.page.locator(this.Elements.BtnFinish).click();
        Log.info('Order Placed');
    }

    public async confirmOrder(){
        // simple test to verify placed order
        await expect(this.page.locator(this.Elements.orderPlacedMsg)).toContainText('Thank you for your order!');
        await expect(this.page.locator(this.Elements.BtnBackToHome)).toBeVisible();
        this.page.locator(this.Elements.BtnBackToHome).click();
    }
}