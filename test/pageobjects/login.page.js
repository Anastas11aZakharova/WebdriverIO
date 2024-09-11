import { $ } from "@wdio/globals";
import Page from "./page.js";


class LoginPage extends Page {
 
  get inputUsername() {
    return $('input[data-test="username"]');
  }

  get inputPassword() {
    return $('input[data-test="password"]');
  }

  get btnLogin() {
    return $('input[data-test="login-button"]');
  }
  get swagLabsHeader() {
    return $("div=Swag Labs");
  }
  get errorMessage() {
    return $('h3[data-test="error"]');
  }

  
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnLogin.click();
  }

  open() {
    return super.open();
  }
}

export default new LoginPage();
