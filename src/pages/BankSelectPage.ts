import { Page, Locator } from '@playwright/test';

export class BankSelectPage {
  readonly page: Page;
  readonly checkbox: Locator;
  readonly bankChoiceButton: Locator;
  readonly searchInput: Locator;
  readonly suggestionItem: Locator;
  readonly suggestionSection: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkbox = page.locator('.sc-frniUE.fILdiP.sc-hsfCcR.hJTuhR');
    this.bankChoiceButton = page.locator('.sc-giBObj.fsPiEc');
    this.searchInput = page.locator('.search-input__Input-sc-9ef27473-2.iqalfA');
    this.suggestionItem = page.locator('.sc-kpAHqd.fSufIa');
    this.suggestionSection = page.locator('.sc-geoRQH.iQExIK', { hasText: 'Suggestions' });
  }

  async navigate() {
    await this.page.goto('https://connect.algoan.com/v2/init?client_id=030d0c7dfcfdcfcc135c6cf5&redirect_uri=https://dashboard.algoan.com');
  }

  async acceptConsentAndOpenBankList() {
    await this.checkbox.click();
    await this.bankChoiceButton.click();
  }

  async searchBank(name: string) {
    await this.searchInput.fill(name);
  }

  async isBankVisible(bankName: string): Promise<boolean> {
    const bank = this.page.locator('.sc-kpAHqd.fSufIa', { hasText: bankName });
    return bank.isVisible();
  }

  async isSuggestionHidden(): Promise<boolean> {
    return this.suggestionSection.isHidden();
  }
}
