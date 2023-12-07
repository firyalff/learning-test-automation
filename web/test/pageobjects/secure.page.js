import { $ } from "@wdio/globals";
import Page from "./page.js";

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
  /**
   * define selectors using getter methods
   */
  get pageTitle() {
    return $("h1");
  }

  get errorToast() {
    return $(
      ".Toastify__toast-container Toastify__toast-container--top-center"
    );
  }
}

export default new SecurePage();
