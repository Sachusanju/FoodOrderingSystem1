class HomePage
{
    get navigateHome()
    {
        return $("//a[contains(.,'Home')]")
    }
    get navigateMyOrders()
    {
        return $("//a[contains(text(),'My Orders')]")
    }
    get navigateLogout()
    {
        return $("//a[contains(text(),'Logout')]")
    }
    get pistoFood()
    {
        return $("//a[contains(text(),'Pisto')]")
    }
    get frenchMenu()
    {
        return $("//div[@class='col-xs-12 col-sm-6 col-md-4 food-item']/descendant::a[@class='btn theme-btn-dash pull-right']/preceding::h5/child::a[contains(.,'French onion soup')]")
    }
}

export default new HomePage()