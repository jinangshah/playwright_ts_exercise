import { Page, expect } from "@playwright/test";
import Log from "../../support/logger/Log";
import { Elements } from "./locators/cart&checkoutLocators";

export default class dashboard {
    constructor(private page: Page) { }

    private formInputs = {
            firstName: "Jinang",
            lastName: "Shah",
            psotCode: "2150"
    }

    public async verifyCart(){
        // simple test to verify cart page
        await this.page.waitForLoadState('networkidle');
        await expect(this.page.locator(Elements.cartPageTitle)).toContainText('Your Cart');
        // TO DO Passing dynamic xpaths & verifying price against the products
        await expect(this.page.locator(Elements.itemInfo)).toContainText('Sauce Labs Backpack');
        Log.info('Verified Cart');
    }

    public async proceedToCheckout(){
        // simple test to proceed to checkout
        await expect(this.page.locator(Elements.BtnCheckout)).toBeVisible();
        await this.page.locator(Elements.BtnCheckout).click();
        Log.info('Proceeding to checkout');
    }

    public async fillShippingInfo(){
        // simple test to fill up shipping info
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForLoadState('domcontentloaded');
        await this.page.locator(Elements.formFirstName).fill(this.formInputs.firstName);
        await this.page.locator(Elements.formLastName).fill(this.formInputs.lastName);
        await this.page.locator(Elements.formPostCode).fill(this.formInputs.psotCode);
        await this.page.locator(Elements.BtnContinue).click();
        Log.info('Proceeding to Order Summary')
    }

    public async verifyOrderDetails(){
        // simple test to verify order summary
        //TO DO verifying summary dynamically
        await expect(this.page.locator(Elements.itemInfo)).toContainText('Sauce Labs Backpack');
        await this.page.locator(Elements.BtnFinish).click();
        Log.info('Order Placed');
    }

    public async confirmOrder(){
        // simple test to verify placed order
        await expect(this.page.locator(Elements.orderPlacedMsg)).toContainText('Thank you for your order!');
        await expect(this.page.locator(Elements.BtnBackToHome)).toBeVisible();
        this.page.locator(Elements.BtnBackToHome).click();
    }
}