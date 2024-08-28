import { $ } from "@wdio/globals";

class CheckoutPage {
  get yourInformationTitile() {
    return $("span=Checkout: Your Information");
  }
  get inputFirstName() {
    return $('input[data-test="firstName"]');
  }
  get inputLastName() {
    return $('input[data-test="lastName"]');
  }
  get inputZipCode() {
    return $('input[data-test="postalCode"]');
  }
  get continueBtn() {
    return $('input[data-test="continue"]');
  }
  get errorMessage() {
    return $('h3[data-test="error"]');
  }

  async enterCheckoutInformation(firstName, lastName, zipCode) {
    await this.inputFirstName.setValue(firstName);
    await this.inputLastName.setValue(lastName);
    await this.inputZipCode.setValue(zipCode);
    await this.continueBtn.click();
  }
}

export default new CheckoutPage();
