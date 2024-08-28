import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import ProductPage from "../pageobjects/product.page.js";
import Helper from "../pageobjects/helper.js";
import CartPage from "../pageobjects/cart.page.js";
import CheckoutPage from "../pageobjects/checkout.page.js";
import OverviewPage from "../pageobjects/overview.page.js";
import CompletePage from "../pageobjects/complete.page.js";

describe("https://www.saucedemo.com/", () => {
  it("Check visiting the frontpage", async () => {
    await LoginPage.open();

    await expect(LoginPage.btnLogin).toBeExisting();
    await expect(LoginPage.swagLabsHeader).toBeExisting();
    await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
  });
  it("Login with valid credentials", async () => {
    await LoginPage.open();

    await expect(LoginPage.btnLogin).toBeExisting();
    await expect(LoginPage.swagLabsHeader).toBeExisting();
    await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
    await LoginPage.login(Helper.userName, Helper.password);
    await expect(ProductPage.productsTitle).toBeExisting();
  });
//   it("Login with invalid username", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.generateRandomString(10), Helper.password);
//     await expect(LoginPage.errorMessage).toBeExisting();
//     await expect(LoginPage.errorMessage).toHaveText(
//       "Epic sadface: Username and password do not match any user in this service"
//     );
//   });
//   it("Login with invalid password", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.userName, Helper.generateRandomString(10));
//     await expect(LoginPage.errorMessage).toBeExisting();
//     await expect(LoginPage.errorMessage).toHaveText(
//       "Epic sadface: Username and password do not match any user in this service"
//     );
//   });
//   it("Login with locked out user", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.lockedUser, Helper.password);
//     await expect(LoginPage.errorMessage).toBeExisting();
//     await expect(LoginPage.errorMessage).toHaveText(
//       "Epic sadface: Sorry, this user has been locked out."
//     );
//   });
//   it("Login with empty user name field", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login("", Helper.password);
//     await expect(LoginPage.errorMessage).toBeExisting();
//     await expect(LoginPage.errorMessage).toHaveText(
//       "Epic sadface: Username is required"
//     );
//   });
//   it("Login with empty password field", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.userName, "");
//     await expect(LoginPage.errorMessage).toBeExisting();
//     await expect(LoginPage.errorMessage).toHaveText(
//       "Epic sadface: Password is required"
//     );
//   });
//   it("Logout", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.userName, Helper.password);
//     await expect(ProductPage.productsTitle).toBeExisting();
//     await ProductPage.clickOnBurgerBtn();
//     await expect(ProductPage.logoutBtn).toBeExisting();
//     await ProductPage.clickOnLogoutBtn();
//     await expect(LoginPage.btnLogin).toBeExisting();
//   });
//   it("Check footer links", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.userName, Helper.password);
//     await expect(ProductPage.productsTitle).toBeExisting();
//     await expect(ProductPage.twitterLink).toBeExisting();
//     await expect(ProductPage.twitterLink).toHaveAttribute(
//       "href",
//       "https://twitter.com/saucelabs"
//     );
//     await expect(ProductPage.facebookLink).toBeExisting();
//     await expect(ProductPage.facebookLink).toHaveAttribute(
//       "href",
//       "https://www.facebook.com/saucelabs"
//     );
//     await expect(ProductPage.linkedinLink).toBeExisting();
//     await expect(ProductPage.linkedinLink).toHaveAttribute(
//       "href",
//       "https://www.linkedin.com/company/sauce-labs/"
//     );
//   });
//   it("Check saving the cart after logout ", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.userName, Helper.password);
//     await expect(ProductPage.productsTitle).toBeExisting();
//     await ProductPage.clickOnAddToCartBtn();
//     await expect(ProductPage.cartIcon).toBeExisting();
//     await expect(ProductPage.cartIcon).toHaveText("1");
//     await ProductPage.clickOnCartIcon();
//     await expect(CartPage.yourCartTitle).toBeExisting();
//     await expect(CartPage.yourCartTitle).toHaveText("Your Cart");
//     await expect(CartPage.sauceLabsBackpackProduct).toBeExisting();
//     await ProductPage.clickOnBurgerBtn();
//     await expect(ProductPage.logoutBtn).toBeExisting();
//     await ProductPage.clickOnLogoutBtn();
//     await expect(LoginPage.btnLogin).toBeExisting();
//     await LoginPage.login(Helper.userName, Helper.password);
//     await expect(ProductPage.productsTitle).toBeExisting();
//     await expect(ProductPage.cartIcon).toHaveText("1");
//     await ProductPage.clickOnCartIcon();
//     await expect(CartPage.yourCartTitle).toBeExisting();
//     await expect(CartPage.yourCartTitle).toHaveText("Your Cart");
//     await expect(CartPage.sauceLabsBackpackProduct).toBeExisting();
//     await CartPage.clickOnRemoveBtn();
//     await expect(ProductPage.cartIcon).toHaveText("");
//   });
//   it("Valid checkout", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.userName, Helper.password);
//     await expect(ProductPage.productsTitle).toBeExisting();
//     await ProductPage.clickOnAddToCartBtn();
//     await expect(ProductPage.cartIcon).toBeExisting();
//     await expect(ProductPage.cartIcon).toHaveText("1");
//     await ProductPage.clickOnCartIcon();
//     await expect(CartPage.yourCartTitle).toBeExisting();
//     await expect(CartPage.yourCartTitle).toHaveText("Your Cart");
//     await expect(CartPage.sauceLabsBackpackProduct).toBeExisting();
//     await CartPage.clickOnCheckoutBtn();
//     await expect(CheckoutPage.yourInformationTitile).toBeExisting();
//     await expect(CheckoutPage.yourInformationTitile).toHaveText(
//       "Checkout: Your Information"
//     );
//     await CheckoutPage.enterCheckoutInformation(
//       Helper.generateRandomString(10),
//       Helper.generateRandomString(10),
//       Helper.generateRandomString(4)
//     );
//     await expect(OverviewPage.overviewTitile).toBeExisting();
//     await expect(OverviewPage.overviewTitile).toHaveText("Checkout: Overview");
//     await expect(OverviewPage.sauceLabsBackpackProduct).toBeExisting();
//     await OverviewPage.clickOnFinishBtn();
//     await expect(CompletePage.completeMessage).toBeExisting();
//     await expect(CompletePage.completeMessage).toHaveText(
//       "Thank you for your order!"
//     );
//   });
//   it("Remove product from cart", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.userName, Helper.password);
//     await expect(ProductPage.productsTitle).toBeExisting();
//     await ProductPage.clickOnAddToCartBtn();
//     await expect(ProductPage.cartIcon).toBeExisting();
//     await expect(ProductPage.cartIcon).toHaveText("1");
//     await ProductPage.clickOnCartIcon();
//     await expect(CartPage.yourCartTitle).toBeExisting();
//     await expect(CartPage.yourCartTitle).toHaveText("Your Cart");
//     await expect(CartPage.sauceLabsBackpackProduct).toBeExisting();
//     await CartPage.clickOnRemoveBtn();
//     await expect(ProductPage.cartIcon).toHaveText("");
//   });
//   it("Missing first name on checkout", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.userName, Helper.password);
//     await expect(ProductPage.productsTitle).toBeExisting();
//     await ProductPage.clickOnBurgerBtn();
//     await ProductPage.clickOnResetAppStateBtn();
//     await ProductPage.clickOnAddToCartBtn();
//     await expect(ProductPage.cartIcon).toBeExisting();
//     await expect(ProductPage.cartIcon).toHaveText("1");
//     await ProductPage.clickOnCartIcon();
//     await expect(CartPage.yourCartTitle).toBeExisting();
//     await expect(CartPage.yourCartTitle).toHaveText("Your Cart");
//     await expect(CartPage.sauceLabsBackpackProduct).toBeExisting();
//     await CartPage.clickOnCheckoutBtn();
//     await expect(CheckoutPage.yourInformationTitile).toBeExisting();
//     await expect(CheckoutPage.yourInformationTitile).toHaveText(
//       "Checkout: Your Information"
//     );
//     await CheckoutPage.enterCheckoutInformation(
//       "",
//       Helper.generateRandomString(10),
//       Helper.generateRandomString(4)
//     );
//     await expect(CheckoutPage.errorMessage).toBeExisting();
//     await expect(CheckoutPage.errorMessage).toHaveText(
//       "Error: First Name is required"
//     );
//     await ProductPage.clickOnBurgerBtn();
//     await ProductPage.clickOnResetAppStateBtn();
//   });
//   it("Missing last name on checkout", async () => {
//     await LoginPage.open();
//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.userName, Helper.password);
//     await expect(ProductPage.productsTitle).toBeExisting();
//     await ProductPage.clickOnBurgerBtn();
//     await ProductPage.clickOnResetAppStateBtn();
//     await ProductPage.clickOnAddToCartBtn();
//     await expect(ProductPage.cartIcon).toBeExisting();
//     await expect(ProductPage.cartIcon).toHaveText("1");
//     await ProductPage.clickOnCartIcon();
//     await expect(CartPage.yourCartTitle).toBeExisting();
//     await expect(CartPage.yourCartTitle).toHaveText("Your Cart");
//     await expect(CartPage.sauceLabsBackpackProduct).toBeExisting();
//     await CartPage.clickOnCheckoutBtn();
//     await expect(CheckoutPage.yourInformationTitile).toBeExisting();
//     await expect(CheckoutPage.yourInformationTitile).toHaveText(
//       "Checkout: Your Information"
//     );
//     await CheckoutPage.enterCheckoutInformation(
//       Helper.generateRandomString(10),
//       "",
//       Helper.generateRandomString(4)
//     );
//     await expect(CheckoutPage.errorMessage).toBeExisting();
//     await expect(CheckoutPage.errorMessage).toHaveText(
//       "Error: Last Name is required"
//     );
//     await ProductPage.clickOnBurgerBtn();
//     await ProductPage.clickOnResetAppStateBtn();
//   });
//   it("Missing post code on checkout", async () => {
//     await LoginPage.open();
//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.userName, Helper.password);
//     await expect(ProductPage.productsTitle).toBeExisting();
//     await ProductPage.clickOnBurgerBtn();
//     await ProductPage.clickOnResetAppStateBtn();
//     await ProductPage.clickOnAddToCartBtn();
//     await expect(ProductPage.cartIcon).toBeExisting();
//     await expect(ProductPage.cartIcon).toHaveText("1");
//     await ProductPage.clickOnCartIcon();
//     await expect(CartPage.yourCartTitle).toBeExisting();
//     await expect(CartPage.yourCartTitle).toHaveText("Your Cart");
//     await expect(CartPage.sauceLabsBackpackProduct).toBeExisting();
//     await CartPage.clickOnCheckoutBtn();
//     await expect(CheckoutPage.yourInformationTitile).toBeExisting();
//     await expect(CheckoutPage.yourInformationTitile).toHaveText(
//       "Checkout: Your Information"
//     );
//     await CheckoutPage.enterCheckoutInformation(
//       Helper.generateRandomString(10),
//       Helper.generateRandomString(10),
//       ""
//     );
//     await expect(CheckoutPage.errorMessage).toBeExisting();
//     await expect(CheckoutPage.errorMessage).toHaveText(
//       "Error: Postal Code is required"
//     );
//     await ProductPage.clickOnBurgerBtn();
//     await ProductPage.clickOnResetAppStateBtn();
//   });
//   it("Backpack price on product page equals price on cart page", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.userName, Helper.password);
//     await expect(ProductPage.productsTitle).toBeExisting();
//     await ProductPage.clickOnBurgerBtn();
//     await ProductPage.clickOnResetAppStateBtn();
//     await expect(ProductPage.backpackPrice).toBeExisting();
//     var priceOnProductPage = await ProductPage.backpackPrice.getText();
//     await ProductPage.clickOnAddToCartBtn();
//     await expect(ProductPage.cartIcon).toBeExisting();
//     await expect(ProductPage.cartIcon).toHaveText("1");
//     await ProductPage.clickOnCartIcon();
//     await expect(CartPage.yourCartTitle).toBeExisting();
//     await expect(CartPage.yourCartTitle).toHaveText("Your Cart");
//     await expect(CartPage.sauceLabsBackpackProduct).toBeExisting();
//     var priceOnCartPage = await CartPage.backpackPrice.getText();
//     await expect(priceOnProductPage).toEqual(priceOnCartPage);
//     await ProductPage.clickOnBurgerBtn();
//     await ProductPage.clickOnResetAppStateBtn();
//   });
//   it("Sorting", async () => {
//     await LoginPage.open();
//     await LoginPage.login(Helper.userName, Helper.password);
//     await expect(ProductPage.cartIcon).toBeExisting();
//     await expect(ProductPage.burgerBtn).toBeExisting();
//     await ProductPage.sortAz();
//     await expect(await ProductPage.getNamesSortingOrder()).toEqual("ascending");
//     await ProductPage.sortZa();
//     await expect(await ProductPage.getNamesSortingOrder()).toEqual(
//       "descending"
//     );
//     await ProductPage.sortLohi();
//     await expect(await ProductPage.getPricesSortingOrder()).toEqual(
//       "ascending"
//     );
//     await ProductPage.sortHilo();
//     await expect(await ProductPage.getPricesSortingOrder()).toEqual(
//       "descending"
//     );
//   });
//   it("Backpack description on product equals discription on cart page", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.userName, Helper.password);
//     await expect(ProductPage.productsTitle).toBeExisting();
//     await expect(ProductPage.backpackPrice).toBeExisting();
//     var descriptionOnProductPage =
//       await ProductPage.backpackDescription.getText();
//     await ProductPage.clickOnBurgerBtn();
//     await ProductPage.clickOnResetAppStateBtn();
//     await ProductPage.clickOnAddToCartBtn();
//     await expect(ProductPage.cartIcon).toBeExisting();
//     await expect(ProductPage.cartIcon).toHaveText("1");
//     await ProductPage.clickOnCartIcon();
//     await expect(CartPage.yourCartTitle).toBeExisting();
//     await expect(CartPage.yourCartTitle).toHaveText("Your Cart");
//     await expect(CartPage.sauceLabsBackpackProduct).toBeExisting();
//     var descriptionOnCartPage = await CartPage.backpackDescription.getText();
//     await expect(descriptionOnCartPage).toEqual(descriptionOnProductPage);
//     await ProductPage.clickOnBurgerBtn();
//     await ProductPage.clickOnResetAppStateBtn();
//   });
//   it("Problem user sees only dog pictures", async () => {
//     await LoginPage.open();
//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.problemUser, Helper.password);
//     await expect(ProductPage.productsTitle).toBeExisting();
//     for await (const element of ProductPage.inventoryItemImage) {
//       await expect(element).toHaveAttribute(
//         "src",
//         "/static/media/sl-404.168b1cce.jpg"
//       );
//     }
//   });
//   it("The tax is added correctly during checkout", async () => {
//     await LoginPage.open();

//     await expect(LoginPage.btnLogin).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toBeExisting();
//     await expect(LoginPage.swagLabsHeader).toHaveText("Swag Labs");
//     await LoginPage.login(Helper.userName, Helper.password);
//     await expect(ProductPage.productsTitle).toBeExisting();
//     await ProductPage.clickOnAddToCartBtn();
//     await expect(ProductPage.cartIcon).toBeExisting();
//     await expect(ProductPage.cartIcon).toHaveText("1");
//     await ProductPage.clickOnCartIcon();
//     await expect(CartPage.yourCartTitle).toBeExisting();
//     await expect(CartPage.yourCartTitle).toHaveText("Your Cart");
//     await expect(CartPage.sauceLabsBackpackProduct).toBeExisting();
//     var priceOnCartPage = parseFloat(
//       (await CartPage.backpackPrice.getText()).slice(1)
//     );
//     await CartPage.clickOnCheckoutBtn();
//     await expect(CheckoutPage.yourInformationTitile).toBeExisting();
//     await expect(CheckoutPage.yourInformationTitile).toHaveText(
//       "Checkout: Your Information"
//     );
//     await CheckoutPage.enterCheckoutInformation(
//       Helper.generateRandomString(10),
//       Helper.generateRandomString(10),
//       Helper.generateRandomString(4)
//     );
//     await expect(OverviewPage.overviewTitile).toBeExisting();
//     await expect(OverviewPage.overviewTitile).toHaveText("Checkout: Overview");
//     await expect(OverviewPage.sauceLabsBackpackProduct).toBeExisting();
//     var tax = parseFloat((await OverviewPage.taxLabel.getText()).slice(6));
//     var totalPrice = parseFloat(
//       (await OverviewPage.totalPriceLabel.getText()).slice(8)
//     );
//     await expect(totalPrice).toEqual(tax + priceOnCartPage);
//   });
});
