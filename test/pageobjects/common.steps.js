import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import ProductPage from "../pageobjects/product.page.js";
import Helper from "../pageobjects/helper.js";
import CartPage from "../pageobjects/cart.page.js";
import CheckoutPage from "../pageobjects/checkout.page.js";
import OverviewPage from "../pageobjects/overview.page.js";
import CompletePage from "../pageobjects/complete.page.js";

class CommonSteps {
    
  
   async addBackPackToTheCartAndValidate() {
        await ProductPage.clickOnAddToCartBtn();
        await expect(ProductPage.cartIcon).toBeExisting();
        await expect(ProductPage.cartIcon).toHaveText("1");
        await ProductPage.clickOnCartIcon();
        await expect(CartPage.yourCartTitle).toBeExisting();
        await expect(CartPage.yourCartTitle).toHaveText("Your Cart");
        await expect(CartPage.sauceLabsBackpackProduct).toBeExisting();
    }
  }
  
  export default new CommonSteps();
  