class WelcomePage
{
    get navigateHome()
    {
        return $("//a[contains(text(),'Home')]")
    }
    get navigateRestaurants()
    {
        return $("//a[contains(text(),'Restaurants')]")
    }
    get navigateregister()
    {
        return $("//a[contains(text(),'Register')]")
    }
    get navigateLogin()
    {
        return $("//a[.='Login']")
    }

}
export default new WelcomePage()