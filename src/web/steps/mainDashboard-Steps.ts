import { Given, Then, When } from "@cucumber/cucumber";
import mainDashboardPage from "../pages/mainDashboardPage";


Given('User is on Dashboard Page', async function () {
    await new mainDashboardPage(this.page).verifyDashBoard();
});

Then('Verify one of the products listed', async function () {
    await new mainDashboardPage(this.page).verifyProduct();
});
