class nandanPalace
{
    get addTocart()
    {
        return $("//input[@type='submit']")
    }
    get deleteIcon()
    {
        return $("//i[@class='fa fa-trash pull-right']")
    }
    get menuItemName()
    {
        return $(".title-row")
    }
    get qtyTextBox()
    {
        return $("//input[@class='b-r-0']")
    }
    get checkoutOption()
    {
        return $("//a[.='Checkout']")
    }
}
export default new nandanPalace()