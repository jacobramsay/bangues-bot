const rp = require('request-promise');
const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

const mereketPleceUrl = 'https://www.picuki.com/profile/moreketplece';

async function getHtmlWithPupeteer() {
    const puppet = await puppeteer.launch();
    const page = await puppet.browser.newPage();
    const pageContent = (await page.goto(mereketPleceUrl)).content;
    return pageContent.html;
}

async function getHtml() {
    return await rp(mereketPleceUrl);
};

async function getPosts(nbPosts) {
    const html = await getHtml();
    const $ = cheerio.load(html);
    const posts = [];
    for (let i = 0; i < nbPosts; i++) {
      posts.push($('li > div > div > a > img', html)[i].attribs.src);
    }
    return posts;
}


module.exports = { getHtml, getPosts, getHtmlWithPupeteer };