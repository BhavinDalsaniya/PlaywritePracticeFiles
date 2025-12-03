import { test, expect } from '@playwright/test';


//Fixture - Global variable  : Page, Broser

test('Log In Functionalaty Check',async ({page})=>{

    await page.goto('http://www.automationpractice.pl/index.php')

    let title:string =await page.title();

    console.log('Page Title',title)
    
    await expect(page).toHaveTitle('My Shop')
})


