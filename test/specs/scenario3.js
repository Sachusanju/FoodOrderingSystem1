import welcomePage from "../pageobjects/welcomePage.js"
import login1Page from "../pageobjects/login1.page.js"
import homePage from "../pageobjects/home.page.js"
import FoodMenuListPage from "../pageobjects/FoodMenuListPage.js"
import nandanPalacePage from "../pageobjects/nandanPalacePage.js"
import cartSummaryPage from "../pageobjects/cartSummaryPage.js"

describe('login to application', () =>
{
    it('login as a end user', async() =>
    {
        let addtocart
        await browser.maximizeWindow()
        await browser.url('http://rmgtestingserver/domain/Online_Food_Ordering_System/index.php')
        await welcomePage.navigateLogin.click()
        //login credentials
        await login1Page.loginAction('Sachusanju','Sanjana@1') 
        await browser.pause(5000)
        await homePage.frenchMenu.click()

        
                addtocart = await FoodMenuListPage.pistoListMenu
                console.log("==============>"+addtocart.length);
                await addtocart.forEach(async ele1 =>{
                        await ele1.click()
                })
                await nandanPalacePage.checkoutOption.click()
               // await browser.pause(3000)
                await cartSummaryPage.orderNowButton.click()
                
                await browser.acceptAlert()
                await browser.acceptAlert()
                await browser.pause(5000)
                await homePage.navigateHome.click()
    
        await homePage.navigateMyOrders.click()
        await browser.pause(5000)
        await homePage.navigateLogout.click()
    
    })
})