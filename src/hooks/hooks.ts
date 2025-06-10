import { Before, After, Status } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext, Page } from "@playwright/test";


let browser: Browser;
let context: BrowserContext;
let page: Page;

// Avant chaque scénario
Before(async function () {
  browser = await chromium.launch({ headless: false }); // Browser launch
  context = await browser.newContext();                 // Create a "private window"
  page = await context.newPage();                       // Open a page in this window
  this.page = page;                                     // Attach to Cucumber context (Save for the steps)
});

// Après chaque scénario
After(async function (scenario) {
  const scenarioName = scenario.pickle.name.replace(/[^a-zA-Z0-9-_]/g, "_");
  const screenshotPath = `./test-results/screenshots/${scenarioName}.png`;

  // Prendre le screenshot
  const img = await this.page.screenshot({ path: screenshotPath, fullPage: true });

  // Attacher au rapport (si utilisé avec reporter compatible)
  await this.attach(img, "image/png");

  // Nettoyer
  await context.close();
  await browser.close();
});
