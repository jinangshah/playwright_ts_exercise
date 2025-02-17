import { Given, When, Then } from "@cucumber/cucumber";
import loginPage from "../pages/loginPage";
import Log from "../../support/logger/Log";


Given('User Navigates to application', async function (){
    await new loginPage(this.page).navigateToLoginPage();
});

When('User enters username as {string}', async function(username,password){
    await new loginPage(this.page).emailLogin(username,password);
});

When('User enters password as {string}', async function(username,password){
    await new loginPage(this.page).emailLogin(username,password);
});

Then('User should be able to Login', async function(){
    await new loginPage(this.page).loginSuccess();
    await new loginPage(this.page).loginFail();
});
