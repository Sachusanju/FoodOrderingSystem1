import wp from "../pageobjects/welcomePage.js";
import lp from "../pageobjects/login1.page.js";
import hp from "../pageobjects/home.page.js";
import rp from "../pageobjects/restaurant.page.js";
import nandanp from "../pageobjects/nandanPalacePage.js";
import cartSummaryP from "../pageobjects/cartSummaryPage.js";
import fs from "fs"

let credentials = JSON.parse(fs.readFileSync('././test/testData/loginData.json'))
describe('login to application', () =>
{
    credentials.forEach(data => {
     let usn = data.username
     let pwd = data.password   
        console.log("=========>"+usn+"=======>"+pwd);
    it('login as a end user', async() =>
    {
        
        await browser.maximizeWindow()
        await browser.url('http://rmgtestingserver/domain/Online_Food_Ordering_System/index.php')
        await wp.navigateLogin.click()
        //login credentials
        await lp.loginAction(usn,pwd)
        await browser.pause(5000)
        //navigate to restaurant
        await wp.navigateRestaurants.click()
        await rp.nandanPalaceViewMenuButton.click()
        await nandanp.addTocart.click()
        await browser.pause(8000)
        let foodMenu = await nandanp.menuItemName.getText()
        console.log("============>"+foodMenu)
       // await expect($(`//div[contains(.,'Hoskote Biryani') and @class='title-row']`)).toHaveText(expect.stringContaining('Hoskote Biryani'))
        await nandanp.deleteIcon.click()
        await browser.pause(5000)
        await nandanp.qtyTextBox.setValue('4')
        await browser.pause(5000)
        await nandanp.addTocart.click()
        await nandanp.checkoutOption.click()
        await browser.pause(5000)
        await cartSummaryP.orderNowButton.click()
        await browser.acceptAlert()
        await browser.acceptAlert()

        //await hp.navigateMyOrders.click()
        await browser.pause(5000)
        await hp.navigateLogout.click() 
    })
});
})