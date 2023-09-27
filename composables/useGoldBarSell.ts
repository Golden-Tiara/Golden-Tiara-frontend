const puppeteer = require("puppeteer");

export default async function() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.goldtraders.or.th");
    let element = await page.waitForSelector(
      "#DetailPlace_uc_goldprices1_lblBLSell > b > font"
    );
    let text = await page.evaluate((element: { textContent: any; }) => element.textContent, element);
  
    await browser.close();
    return text
}