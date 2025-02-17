import { Given, Then, When } from "@cucumber/cucumber";
import addToCartPage from "../pages/addToCartPage";


Given('User Selects a product', async function () {
    await new addToCartPage(this.page).selectProduct();
});

When('Product is available', async function () {
    await new addToCartPage(this.page).verifyAvailability();
});

Then('User should be able to add product to cart', async function (){
    await new addToCartPage(this.page).addProductToCart();
})
