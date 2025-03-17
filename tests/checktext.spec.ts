import { test, expect,Page,chromium } from '@playwright/test';
import homepage from '../poms/homepage'

let pg;
let brows;

test('has title', async () => {
  brows  = await chromium.launch({headless:false});
  pg = await brows.newPage();

  const hp =new homepage(pg);
  await hp.goto();
//  await page.goto('https://www.bbc.co.uk/');

  // Expect a title "to contain" a substring.
 // await expect(page).toHaveTitle(/BBC - Home/);
});


test('get started link', async ({ page }) => {
  await page.goto('https://www.bbc.co.uk/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Sign in' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page).toHaveURL(/account.bbc.com/);
});
