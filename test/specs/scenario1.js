import welcomePage from "../pageobjects/welcomePage.js";
import registerPage from "../pageobjects/registerPage.js";
import login1Page from "../pageobjects/login1.page.js";
import homePage from "../pageobjects/home.page.js";
import FoodMenuListPage from "../pageobjects/FoodMenuListPage.js";
import nandanPalacePage from "../pageobjects/nandanPalacePage.js";
import cartSummaryPage from "../pageobjects/cartSummaryPage.js";
 
describe('scenario1', () =>{
    it('end-to-end testing', async() =>{
        await browser.url('http://rmgtestingserver/domain/Online_Food_Ordering_System/index.php')
        await welcomePage.navigateregister.click()
        let randomNumber = Math.floor(Math.random() * 100) + 1
        let userName = 'RahulRaksh'+randomNumber
        console.log("=====>"+userName);
        await registerPage.userName.setValue(userName)
        await registerPage.firstName.setValue('Rahul')
        await registerPage.lastName.setValue('Shetty')
        let emailAddress = 'rahul'+randomNumber+'@gmail.com'
        console.log("======>"+emailAddress);
        await registerPage.emailAddress.setValue(emailAddress)
        await registerPage.phoneNumber.setValue(1234567898)
        let password = 'Shetty@123'
        await registerPage.password.setValue(password)
        await registerPage.confirmPassword.setValue('Shetty@123')
        await registerPage.address.setValue('xyz location')
        await browser.pause(8000)
        await registerPage.registerButton.click()
        await browser.pause(8000)
        await login1Page.loginAction(userName,password)
        await browser.pause(5000)
        await homePage.pistoFood.click()
        let menuItems = await FoodMenuListPage.pistoListMenu
        console.log("============>"+menuItems.length)
        await menuItems.forEach(async(ele) => {
            await ele.click()
        });

        await browser.pause(3000)
        await nandanPalacePage.checkoutOption.click()
        await cartSummaryPage.orderNowButton.click()
        await browser.acceptAlert()
        await browser.acceptAlert()

        //await hp.navigateMyOrders.click()
        await browser.pause(3000)
        await homePage.navigateLogout.click()
    })
 })