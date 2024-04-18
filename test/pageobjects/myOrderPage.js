class OrderPage
{
    get deleteIcon()
    {
        return $$("//table/tbody/tr/td[last()]/a")
    }
    get itemName()
    {
        return $$("//table/tbody/tr/td[@data-column='Item']")
    }
    get itemQty()
    {
        return $$("//table/tbody/tr/td[@data-column='Quantity']")
    }
    get itemPrice()
    {
        return $$("//table/tbody/tr/td[@data-column='price']")
    }
    get orderdateNtime()
    {
        return $$("//table/tbody/tr/td[@data-column='Date']")
    }
}
export default new OrderPage()