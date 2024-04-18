import homePage from "../pageobjects/home.page.js"
import FoodMenuListPage from "../pageobjects/FoodMenuListPage.js"
import nandanPalacePage from "../pageobjects/nandanPalacePage.js"
import cartSummaryPage from "../pageobjects/cartSummaryPage.js"
import login1Page from "../pageobjects/login1.page.js"

describe('end to end scenario', () =>
{
    it('scenario 5', async() =>{
        await browser.url("http://rmgtestingserver/domain/Online_Food_Ordering_System/index.php")
        await homePage.pistoFood.click()
        let foodName = await $("//a[.='jayka']/ancestor::div[@class='food-item']/descendant::a[.='jayka']").getText()
        let qty = await FoodMenuListPage.jaykaQtyInputTextBox.setValue('6')
        let price = await $("//a[.='jayka']/ancestor::div[@class='food-item']/descendant::span[@class='price pull-left']").getText()
        await FoodMenuListPage.jaykaAddtocartButton.click()
        await nandanPalacePage.checkoutOption.click()
        await login1Page.loginAction('Sachusanju','Sanjana@1')
        await homePage.pistoFood.click()
        await nandanPalacePage.checkoutOption.click()
        await cartSummaryPage.orderNowButton.click()
        await browser.pause(5000)
        await browser.acceptAlert()
        await browser.acceptAlert()
        await browser.pause(3000)
        await homePage.navigateLogout.click()

    })
})