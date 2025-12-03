import { test, expect, Locator } from "@playwright/test"

test("Checking all the Iphone Scenaio", async ({ page }) => {

    await page.goto("https://www.bstackdemo.com/")

    let allpricelocatorbeforeselect:Locator = page.locator("//div[@class='shelf-item__price']/div[@class='val']");
    let allLocator:Locator[] = await allpricelocatorbeforeselect.all()

    for (let i = 1; i <= allLocator.length; i++) {
        let stringiphoneprice: string | null = await allLocator[i].textContent();
    }









    let alliphonelocatorbeforeselect = page.locator("//p[@class='shelf-item__title']");


    let countofphone: number = await allpricelocatorbeforeselect.count()
    const pricearraybeforeselect: string[] = [];
    const iphoneNamearraybeforeselect: string[] = [];
    for (let i = 1; i <= countofphone; i++) {
        let stringiphonelocator: Locator = page.locator("(//div[@class='shelf-item__price']/div[@class='val'])[" + i + "]")
        let stringiphonenamelocator: Locator = page.locator("(//p[@class='shelf-item__title'])[" + i + "]")

        let stringiphoneprice: string | null = await stringiphonelocator.textContent();

        console.log('stringiphoneprice', stringiphoneprice)

        if (stringiphoneprice != null) {
            pricearraybeforeselect.push(stringiphoneprice.trim().replace('$', ''))
        }
    }

    console.log('pricearraybeforeselect', pricearraybeforeselect)
    const aftersortpricearraybeforeselect: string[] = pricearraybeforeselect.sort();
    console.log('aftersortpricearraybeforeselect after sort', aftersortpricearraybeforeselect)

    await page.locator("//Select").selectOption({ label: 'Lowest to highest' })

    await page.waitForTimeout(5000)
    allpricelocatorbeforeselect = page.locator("//div[@class='shelf-item__price']/div[@class='val']");
    countofphone = await allpricelocatorbeforeselect.count()
    const pricearrayafterselect: string[] = [];
    console.log('entering to second for loop')

    for (let i = 1; i <= countofphone; i++) {
        let stringiphonelocator: Locator = page.locator("(//div[@class='shelf-item__price']/div[@class='val'])[" + i + "]")

        let stringiphoneprice: string | null = await stringiphonelocator.textContent();

        console.log('stringiphoneprice', stringiphoneprice)
        if (stringiphoneprice != null) {
            pricearrayafterselect.push(stringiphoneprice.trim().replace('$', ''))
        }
    }

    let orderisok: boolean = false
    for (let i = 1; i < countofphone; i++) {
        if (Number(pricearrayafterselect[i + 1]) < Number(pricearrayafterselect[i])) {
            orderisok = true
        }
    }

    if (orderisok) {
        console.log('Price is not coming properly')
    } else {
        console.log('Price is coming properly no wrong price')
    }

    // await page.waitForTimeout(10000);
})


test('Product sort and print lowest/highest price with names', async ({ page }) => {
  // Navigate to the URL
  await page.goto('https://www.bstackdemo.com/');
  await page.setViewportSize({ width: 1280, height: 720 });

  // Locate the "Order by" dropdown using CSS selector and select "Lowest to highest"
  const orderByDropdown = page.locator('div.sort>select');
  await expect(orderByDropdown).toBeVisible(); // Assert dropdown is visible
  await expect(orderByDropdown).toBeEnabled(); // Assert dropdown is enabled

  await orderByDropdown.selectOption({ label: 'Lowest to highest' });

   // Wait for sorting to reflect
  await page.waitForTimeout(3000);

  // Get all product price and name elements using CSS
  const priceElements:Locator = page.locator('div.val');
  const nameElements:Locator = page.locator('p.shelf-item__title');

  const prices:string[] = await priceElements.allTextContents();
  const names:string[] = await nameElements.allTextContents();

  expect(prices.length).toBe(names.length); // Assert that prices and names count are equal

  console.log('Printing Product Names along with their Prices.......');
  for (let i = 0; i < names.length; i++) {
    console.log(`${names[i]} : ${prices[i]}`);
  }

  console.log(`Lowest Priced Product: ${names[0]} : ${prices[0]}`);
  console.log(`Highest Priced Product: ${names[names.length - 1]} : ${prices[prices.length - 1]}`);
});
