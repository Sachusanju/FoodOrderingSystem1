import login1Page from "../pageobjects/login1.page.js";
import welcomePage from "../pageobjects/welcomePage.js";
import homePage from "../pageobjects/home.page.js";
import myOrderPage from "../pageobjects/myOrderPage.js";

describe('MyOrder module',()=>{
    it('scenario4', async()=>
    {
        let i=1
        await browser.url("http://rmgtestingserver/domain/Online_Food_Ordering_System/index.php")
        await welcomePage.navigateLogin.click()
        await login1Page.loginAction('Sachusanju','Sanjana@1')
        await homePage.navigateMyOrders.click()
        let total_row = await $$("//table/tbody/tr")
        console.log("==========>"+total_row.length);
        for(i=1;i<=total_row.length;i++)
        {
        
            let item = await $("//table/tbody/tr["+i+"]/td[@data-column='Item']").getText()
            let qty = await $("//table/tbody/tr["+i+"]/td[@data-column='Quantity']").getText()
            let price = await $("//table/tbody/tr["+i+"]/td[@data-column='price']").getText()
            let dateNtime = await $("//table/tbody/tr["+i+"]/td[@data-column='Date']").getText()
            console.log(`
            ==========================================================================================
            ${item}---------${qty}---------${price}-----------${dateNtime}`);
        }
        let deleteOrder = await myOrderPage.deleteIcon
        await $("//table/tbody/tr[last()]/td[last()]/a").click()
        await browser.acceptAlert()
    })
})
