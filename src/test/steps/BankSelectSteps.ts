import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";




// Lancement et navigation vers Application

Given('User navigates to the application', async function () {
  await this.page.goto('https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com');
  const checkbox = this.page.locator('.sc-frniUE.fILdiP.sc-hsfCcR.hJTuhR');
  await checkbox.click();

  const bankchoiceButt = this.page.locator('.sc-giBObj.fsPiEc');
  bankchoiceButt.click();

});

setDefaultTimeout(60 * 1000 * 2)


// Filling of search bar


Given('User enter {string} on search bar', async function (bankName: string) {

  const searchInput = this.page.locator('.search-input__Input-sc-9ef27473-2.iqalfA');

  await searchInput.fill(bankName);
});


// Scenario result 1 + 2

Then('The bank {string} should be in suggestions list', async function (bankName) {
  const bank = await this.page.locator('.sc-bqvdXA.kjaCKu', { hasText: 'BNP Paribas' });
  expect (bank).toBeVisible();
});

// Scenario result 3 + 4
Then('The bank should not be in suggestions list', async function () {
  const SuggestionList = this.page.locator('.sc-geoRQH.iQExIK', { hasText: 'Suggestions' });
  expect(SuggestionList).toBeHidden();
});









