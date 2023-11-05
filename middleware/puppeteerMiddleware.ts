import { Request, Response, NextFunction } from 'express';
import puppeteer from 'puppeteer';

async function scrapeGoldPrice() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://xn--42cah7d0cxcvbbb9x.com/");

    let element = await page.waitForSelector(
        '#divDaily > table > tbody > tr:nth-child(2) > td:nth-child(3)'
    );
    let text = await page.evaluate(element => element.textContent, element);

    await browser.close();
    return text;
}

export default async function(req: Request, res: Response, next: NextFunction) {
    try {
        const goldPrice = await scrapeGoldPrice();
        res.json({ goldPrice });
    } catch (error) {
        next(error);
    }
};
