import { test, expect, Locator } from '@playwright/test';

test("Demo on Playwright Locator", async ({ page }) => {
    await page.goto("file:///C:/A%20PlayWrite%20Notes/Play%20Wright%20Notes/Day%2018/ClassDemos%20(1)/ClassDemos/app.html")

    page.getByLabel('Email Address').fill('demo@gmail.com')


    await expect(page.getByTitle("Home page link")).toHaveText("Home");
    await expect(page.getByTitle("HyperText Markup Language")).toHaveText("HTML");


    await page.waitForTimeout(5000);

})