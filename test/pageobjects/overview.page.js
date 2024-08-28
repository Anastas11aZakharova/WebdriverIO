import { $ } from "@wdio/globals";

class OverviewPage {
  get overviewTitile() {
    return $("span=Checkout: Overview");
  }

  get sauceLabsBackpackProduct() {
    return $('div[data-test="inventory-item"]');
  }
  get finishBtn() {
    return $("button=Finish");
  }
  get taxLabel() {
    return $('div[data-test="tax-label"]');
  }
  get totalPriceLabel() {
    return $('div[data-test="total-label"]');
  }
  async clickOnFinishBtn() {
    await this.finishBtn.click();
  }
}

export default new OverviewPage();
