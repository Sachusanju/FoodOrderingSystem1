class foodMenu
{
    get pistoListMenu()
    {
        return $$("//div[@class='food-item']/descendant::input[@class='btn theme-btn']")
    }
    get jaykaQtyInputTextBox()
    {
        return $("//a[.='jayka']/ancestor::div[@class='food-item']/descendant::input[@class='b-r-0']")
    }
    get jaykaAddtocartButton()
    {
        return $("//a[.='jayka']/ancestor::div[@class='food-item']/descendant::input[@class='btn theme-btn']")
    }
}

export default new foodMenu()