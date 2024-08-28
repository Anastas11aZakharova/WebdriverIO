import { $ } from "@wdio/globals";

class ProductPage {
  get productsTitle() {
    return $("span=Products");
  }
  get burgerBtn() {
    return $("button=Open Menu");
  }
  get logoutBtn() {
    return $("a=Logout");
  }
  get resetBtn() {
    return $("a=Reset App State");
  }

  get twitterLink() {
    return $("a=Twitter");
  }

  get facebookLink() {
    return $("a=Facebook");
  }

  get linkedinLink() {
    return $("a=LinkedIn");
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
  get sauceLabsBackpackAddToCartBtn() {
    return $("//div[text() = 'Sauce Labs Backpack']/../../..//button");
  }

  get cartIcon() {
    return $('a[data-test="shopping-cart-link"]');
  }

  get sortingDropdown() {
    return $('select[data-test="product-sort-container"]');
  }
  get inventoryItemDescriptions() {
    return $$('div[data-test="inventory-item-description"]');
  }
  get inventoryItemImage() {
    return $$('img[class="inventory_item_img"]');
  }
  async clickOnBurgerBtn() {
    await this.burgerBtn.click();
  }
  async clickOnLogoutBtn() {
    await this.logoutBtn.click();
  }
  async clickOnResetAppStateBtn() {
    await this.resetBtn.click();
  }
  async clickOnCartIcon() {
    await this.cartIcon.click();
  }
  async clickOnAddToCartBtn() {
    await this.sauceLabsBackpackAddToCartBtn.click();
  }

  async getNamesSortingOrder() {
    const names = new Array();
    for await (const element of this.inventoryItemDescriptions) {
      names.push(
        await element.$('div[data-test="inventory-item-name"]').getText()
      );
    }
    return getSortDirectionString(names);
  }

  async getPricesSortingOrder() {
    const prices = new Array();
    for await (const element of this.inventoryItemDescriptions) {
      let tmp = await element
        .$('div[data-test="inventory-item-price"]')
        .getText();
      prices.push(tmp.substring(1));
    }
    return getSortDirectionNumber(prices);
  }
  async sortAz() {
    await this.sortingDropdown.selectByAttribute("value", "az");
  }
  async sortZa() {
    await this.sortingDropdown.selectByAttribute("value", "za");
  }
  async sortLohi() {
    await this.sortingDropdown.selectByAttribute("value", "lohi");
  }
  async sortHilo() {
    await this.sortingDropdown.selectByAttribute("value", "hilo");
  }
}

export default new ProductPage();

function getSortDirectionNumber(arr) {
  if (arr.length <= 1) return 0;
  const direction = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if ((arr[i] - arr[i - 1]) * direction < 0) return "unsorted";
  }
  let result = Math.sign(direction);
  switch (result) {
    case 1:
      return "ascending";
    case -1:
      return "descending";
    default:
      return "unsorted";
  }
}

function getSortDirectionString(arr) {
  const c = [];
  for (let i = 1; i < arr.length; i++) {
    c.push(arr[i - 1].localeCompare(arr[i]));
  }

  if (c.every((n) => n <= 0)) return "ascending";
  if (c.every((n) => n >= 0)) return "descending";

  return "unsorted";
}
