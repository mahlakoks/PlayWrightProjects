import test from "@playwright/test";

test('eCommerce Login Test', async ({ page }) => {
    await page.goto('https://ecommerce-playground.lambdatest.io/');

    await page.hover("(//div//span[contains(text(),'My account')])[2]");
    await page.getByRole('button', { name: 'My account' }).click();
    await page.getByRole('link', { name: 'Login', exact: true }).click();
    await page.getByPlaceholder('E-Mail Address').fill('playtest@gmail.com');

    await page.getByPlaceholder('Password').fill('Pass123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('link', { name: 'Edit your account' }).click();

    await page.getByPlaceholder('First Name').fill('Nigel Recoder');
    await page.getByRole('button', { name: 'Continue' }).click();

    await page.hover("(//div//span[contains(text(),'My account')])[2]");
    await page.getByRole('link', { name: 'Logout', exact: true }).click();
  });