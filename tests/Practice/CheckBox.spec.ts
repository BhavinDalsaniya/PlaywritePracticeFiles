import { test, expect, Locator } from '@playwright/test';

test("Checking the Checkbox Functionality", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    let allcheckbox: Locator = page.locator("//input[@type='checkbox' and @class='form-check-input']");

    let needtoselectDays= ['Sunday', 'Wednesday']
    let countofdays:number = await allcheckbox.count()
    console.log(countofdays)

    let startingnum: number = 0
    for (let i=0;i<countofdays;i++) {
        const valueofthatelemet = await allcheckbox.nth(i).getAttribute('value')
        console.log('allcheckbox.getAttribute(value) ', valueofthatelemet)
        const normalizedDays = needtoselectDays.map(day => day.toUpperCase());
        if(normalizedDays.includes(valueofthatelemet?.toUpperCase() as string)){
            console.log('Came Inside the If')
            await allcheckbox.nth(startingnum).check();
        }
        startingnum++
    }

    await page.waitForTimeout(5000);

})