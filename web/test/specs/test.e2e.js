import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";

describe("Login staffinc suite", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();
    await LoginPage.login("invalidusr@invalid.com", "invalidpwd");
    (await SecurePage.errorToast).waitForDisplayed({
      timeout: 10000,
    });
    // await expect(SecurePage.errorToast).toHaveText("Invalid Credential");
  });
});
