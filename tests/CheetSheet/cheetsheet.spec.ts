import { test } from 'playwright/test'
import { expect } from 'playwright/test';

const { chromium } = require('playwright');

test('launch and close', async () => {
    const browser = await chromium.launch();
    await browser.close()
})

test('Context Management', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
})

test('open a new page or tab', async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();
    //1st Method
    const newpagepromise = context.waitForEvent('page');
    page.locator('').click();
    const newpage = await newpagepromise
    //2nd Method
    const [newpage2] = await Promise.all([
        context.waitForEvent('page'), page.locator('').click()
    ])
    await newpage2.waitForLoadState();
})

test('page information', async ({ page }) => {
    page.goto('');
    const url = page.url();
    const title = page.title();
})

test('page assertion', async ({ page }) => {
    await expect(page).toHaveURL('')
    await expect(page).toHaveTitle('')
})

test('page navigation', async ({ page }) => {
    page.goto('');
    page.reload();
    page.goBack();
    page.goForward();
})

test('page element', async ({ page }) => {
    const element7 = page.locator('')
    const element = page.getByText('Submit');
    const element1 = page.getByTitle('Close')
    const element2 = page.getByLabel('Username');
    const element3 = page.getByRole('button', { name: 'Submit' })
    const element4 = page.getByPlaceholder('Enter your email');
    const element5 = page.getByAltText('Company Logo');
    const element6 = page.getByTestId('submit-button');
})

test('waiting element', async ({ page }) => {
    await page.locator('').waitFor({ state: 'attached' })
    await page.locator('').waitFor({ state: 'visible', timeout: 3000 })
    await page.locator('').waitFor({ state: 'hidden' })
    await page.locator('').waitFor({ state: 'detached' })
})

test('element state', async ({ page }) => {
    let text = await page.locator('').textContent();
    let text1 = await page.locator('').innerText();
    let text2 = await page.locator('').innerHTML();
    let text3 = await page.locator('').getAttribute('href')
    let text4 = await page.locator('').inputValue();

    const isVisible = await page.locator('#element').isVisible();
    const isHidden = await page.locator('#element').isHidden();
    const isEnabled = await page.locator('#element').isEnabled();
    const isDisabled = await page.locator('#element').isDisabled();
    const isChecked = await page.locator('#checkbox').isChecked();
    const isEditable = await page.locator('#input').isEditable();
})

test('assertion', async ({ page }) => {
    expect(page.locator('#element').textContent()).toBe('GHAGAH')
    expect(page.locator('#element')).toBeAttached()
    expect(page.locator('#element')).toBeVisible
    expect(page.locator('#element')).toBeHidden
    expect(page.locator('#element')).toContainText('jaahga')
    expect(page.locator('#element')).toContainText('jaahga', { ignoreCase: true })

    expect(page.locator('#element')).not.toContainText('Error');
    expect(page.locator('#input')).toHaveValue('Hello World');
    expect(page.locator('#multi-select')).toHaveValues(['red', 'green']);
    expect(page.locator('#element')).toHaveClass("error");
    expect(page.locator('#element')).not.toHaveClass("error");
    expect(page.locator('#element')).toHaveCSS('display', 'block');
    expect(page.locator('#element')).toHaveAttribute('alt-text');
    expect(page.locator('#element')).toHaveAttribute('alt-text', 'Company Logo');
})

test('Drag and drop', async ({ page }) => {
    page.locator('').click();
    page.locator('').click({ button: 'right' })
    page.locator('').dblclick();
    page.locator('').click({ position: { x: 10, y: 10 } })
    page.locator('').hover();
    page.locator('').hover({ position: { x: 10, y: 10 } });
    page.locator('').dragTo(page.locator(''))
})

test('Mouse Action', async ({ page }) => {
    page.mouse.move(100, 200)
    //Single Scenario
    const rome = page.locator("#box6");
    const italy = page.locator("#box106");
    rome.hover()
    page.mouse.down();
    italy.hover();
    page.mouse.up();

    page.mouse.click(100, 200, { button: 'right' });
    page.mouse.dblclick(100, 200);
})

test('Input Element Interactions', async ({ page }) => {
    page.locator('').fill('')
    page.locator('').press('Enter')
    page.locator('').press('Control+A')
    //Use pressSequentially to type text input with a delay between each key
    page.locator('#input').pressSequentially('Hello', { delay: 100 });
    page.locator('').pressSequentially('hell')
    page.locator('').clear()
    page.locator('').check()
    page.locator('').uncheck()
    page.locator('').selectOption('red')
    page.locator('').selectOption(['Red', 'Green'])
    page.keyboard.press('Enter');
    page.keyboard.press('Control+A')
    page.keyboard.type('Hello')
    page.keyboard.type('Hello', { delay: 100 })
    page.keyboard.down('Shift')
    page.keyboard.up('Shift')
})

test('Element Interactions', async ({ page }) => {
    // Focus an element
    await page.locator('#input').focus();
    // Remove focus from an element
    await page.locator('#input').blur();
    // Focuses on an element and selects all its text content
    await page.locator('#element').selectText();
})

test('File Upload and Download', async ({ page }) => {
    const upload = page.locator('')
    upload.setInputFiles('path of file')
    // Upload multiple files to a file input element
    let el1 = page.locator('input[type="file"]');
    await el1.setInputFiles(['photos/mountain.png', 'photos/river.png']);
    // Clear a file input element
    let el2 = page.locator('input[type="file"]');
    await el2.setInputFiles([]);
})

test('Download File', async ({ page }) => {
    const downloadevent = page.waitForEvent('download')
    //trigger download
    page.locator('').click();
    //wait for download complete
    const downloadnormal = await downloadevent;
    downloadnormal.saveAs('report.pdf')
})

test('Download File', async ({ page }) => {
    page.on('dialog', async dialog => {
        await dialog.accept();
    });
    // Listen for a prompt dialog and enter text before accepting it
    page.on('dialog', async dialog => {
        await dialog.accept('Hello World');
    });
    // Listen for a confirmation dialog and dismiss it
    page.on('dialog', async dialog => {
        await dialog.dismiss();
    });
    // Listen for an alert dialog and get its message
    page.on('dialog', async dialog => {
        if (dialog.message() === 'Are you sure?') {
            await dialog.accept();
        } else {
            await dialog.dismiss();
        }
    });
    page.locator("#alertBtn").click(); // Opens dialog
})

test('Cookies', async ({  }) => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const cookiess = context.cookies();
    context.clearCookies();
    context.clearCookies( { name : 'session-id' });
    context.clearCookies({ domain: 'example.com' });
})

test('Viewport / Window Size', async ({ page }) => {
    const setviewportsize = page.viewportSize()
    page.setViewportSize( {width :1280 , height :980})
})

test('Screenshots', async ({ page }) => {
    page.locator('').screenshot( { path : 'element-png'})
    page.screenshot( {path : 'path'})
    page.screenshot( { path : 'path' , fullPage :true})
})