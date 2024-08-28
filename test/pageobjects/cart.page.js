import { $ } from "@wdio/globals";

class CartPage {
  get yourCartTitle() {
    return $("span=Your Cart");
  }
  get sauceLabsBackpackProduct() {
    return $('div[data-test="inventory-item"]');
  }
  get checkoutBtn() {
    return $("button=Checkout");
  }
  get removeBtn() {
    return $("button=Remove");
  }
  get backpackPrice() {
    return $(
      "//div[text() = 'Sauce Labs Backpack']/../../..//*[@data-test='inventory-item-price']"
    );
  }
  get backpackDescription() {
    return $(
      "//div[text() = 'Sauce Labs Backpack']/../../div[@data-test='inventory-item-desc']"
    );
  }
  async clickOnCheckoutBtn() {
    await this.checkoutBtn.click();
  }
  async clickOnRemoveBtn() {
    await this.removeBtn.click();
  }
}

export default new CartPage();
