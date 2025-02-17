import { Given, Then } from '@cucumber/cucumber';
import checkout from "../pages/checkoutPage"

Given('Item is added to cart', async function () {
    await new checkout(this.page).verifyCart();
});

Then('Proceed to Checkout', async function () {
    await new checkout(this.page).proceedToCheckout();
});

Then('Fill Shipping Information', async function () {
    await new checkout(this.page).fillShippingInfo();
});

Then('Verify Order Details', async function () {
    await new checkout(this.page).verifyOrderDetails();
});

Then('Confirm Order', async function () {
    await new checkout(this.page).confirmOrder();
});
