import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

import { expect } from "@playwright/test";

import { BankSelectPage } from  '../../pages/BankSelectPage';

// Lancement et navigation vers Application

Given('User navigates to the application', async function () {
  this.bankPage = new BankSelectPage(this.page);
  await this.bankPage.navigate();
  await this.bankPage.acceptConsentAndOpenBankList();
});

setDefaultTimeout(60 * 1000 * 2)


// Filling of search bar


Given('User enter {string} on search bar', async function (bankName: string) {
  await this.bankPage.searchBank(bankName);
});


// Scenario result 1 + 2

Then('The bank {string} should be in suggestions list', async function (bankName: string) {
  const isVisible = await this.bankPage.isBankVisible(bankName);
  expect(isVisible).toBeTruthy();
});

// Scenario result 3 + 4
Then('The bank should not be in suggestions list', async function () {
  const isHidden = await this.bankPage.isSuggestionHidden();
  expect(isHidden).toBeTruthy();
});









