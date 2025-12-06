import { test } from 'playwright/test'

test.describe('Group1', () => {

    test('Aecond Grouping', ({ page }) => {
        console.log('this is inside Second test')
    });

    test('Third Grouping', ({ page }) => {
        console.log('this is inside Third test')
    });

    test('Birst Grouping', ({ page }) => {
        console.log('this is inside first test')
    });

    test('Fourth Grouping', ({ page }) => {
        console.log('this is inside Fourth test')
    });

    
})


test.describe('Group2', () => {


    test('@sanity Aecond Grouping', async ({ page }) => {

        await page.goto("https://practice.expandtesting.com/dynamic-table");
        
        test.slow()
        console.log('this is inside Second test')
    });

    test('Third Grouping', ({ page }) => {
        console.log('this is inside Third test')
    });

    test('Birst Grouping', ({ page }) => {
        console.log('this is inside first test')
    });

    test.beforeAll(async () => {
        console.log('Runs once before all tests');
    });

    test.afterAll(async () => {
        console.log('Runs once After all tests');
    });

})



