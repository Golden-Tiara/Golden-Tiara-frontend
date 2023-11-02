// const puppeteer = require("puppeteer");

// // (async () => {
// //     const browser = await puppeteer.launch();
// //     const page = await browser.newPage();
// //     await page.goto('https://www.goldtraders.or.th');
// //     let element = await page.waitForSelector('#DetailPlace_uc_goldprices1_lblBLSell > b > font')
// //     let text = await page.evaluate(element=>element.textContent,element)
// //     console.log(text)

// //     browser.close();
// // }) ();

// async function goldBarSell() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://www.goldtraders.or.th");
//   let element = await page.waitForSelector(
//     "#DetailPlace_uc_goldprices1_lblBLSell > b > font"
//   );
//   let text = await page.evaluate((element) => element.textContent, element);
//   return text

//   browser.close();
// }

// goldBarSell();


// async function goldBarBuy() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://www.goldtraders.or.th");
//   let element = await page.waitForSelector(
//     "#DetailPlace_uc_goldprices1_lblBLBuy > b > font"
//   );
//   let text = await page.evaluate((element) => element.textContent, element);
//   return text

//   browser.close();
// }
// goldBarBuy();

// async function goldJewelrySell() {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto("https://www.goldtraders.or.th");
//   let element = await page.waitForSelector(
//     "#DetailPlace_uc_goldprices1_lblOMSell > b > font"
//   );
//   let text = await page.evaluate((element) => element.textContent, element);
//   console.log(text);

//   browser.close();
// }

// goldJewelrySell();
