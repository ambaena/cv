const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--disable-dev-shm-usage']
    });
    const page = await browser.newPage();

    const filePath = path.resolve(__dirname, '../resume.html');
    const fileUrl = `file://${filePath}`;
    await page.goto(fileUrl, { waitUntil: 'networkidle2' });
    await page.pdf({
        path: 'resume.pdf',
        format: 'A4',
        printBackground: true
    });

    await browser.close();

})();
