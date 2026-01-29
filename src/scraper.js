const puppeteer = require('puppeteer')

async function scrapeProduct(url) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage()
    await page.goto(url);
    
    //destructuring the image elements
    const [el] = await page.$x('//html/body/div[13]/div[2]/div[3]/div[1]/div/div/div/c-wiz/div/div[1]/div[2]/div[1]/a/img[1]')
    const src =  await el.getProperty('src');
    const srcTxt = src.jsonValue();

    console.log({srcTxt});
}

scrapeProduct('https://www.google.com/search?client=firefox-b-1-d&hs=fLaU&sca_esv=d63f659bb3b1e0c4&sxsrf=ANbL-n5wFrFUgxSuzJWvJqlb8UZ-jaQ2QA:1769665916061&udm=2&fbs=ADc_l-aN0CWEZBOHjofHoaMMDiKpaEWjvZ2Py1XXV8d8KvlI3ppPEReeCOS7s1VbbZz2TLsHwpSX8VU1h5wlQRdyYz8mgmyd_eZo_tiZsdW2U82hFwzhufIgkfFw_z53B_nU6w6vKYVKUtlvhqKdPkV0j4mUI8_zTVaD8Xww78VpnB8chEtWlj-6vmTuq7pLHyEE4DVQeroeJPKwT5sE6_G7ip5x_2xobQ&q=lebron&sa=X&ved=2ahUKEwiU5rCih7CSAxVOLFkFHZejIkAQtKgLegQIDxAB&biw=1920&bih=919&dpr=1&aic=0#sv=CAMSVhoyKhBlLWN0UHFPZVh3VWJBdHFNMg5jdFBxT2VYd1ViQXRxTToOM1lHOVpBOEM1T3FLRE0gBCocCgZtb3NhaWMSEGUtY3RQcU9lWHdVYkF0cU0YADABGAcg-vCflQIwAkoKCAEQAhgCIAIoAg');
 
