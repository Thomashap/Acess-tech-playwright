import { test, expect } from '@playwright/test';
import {BaseClass} from "../UI-user interface/Utils/baseClass";



// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
test("Sample", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");
  const baseClass = new BaseClass(page);
  
  const locator = page.getByText("Flipkart");
  await baseClass.fill(locator, "Hello");
});
