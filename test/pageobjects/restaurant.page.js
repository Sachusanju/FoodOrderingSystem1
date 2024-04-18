class RestaurantPage
{
    get nandanPalaceViewMenuButton()
    {
        return $("//a[.='Nandan Palace']/ancestor::div[@class='bg-gray restaurant-entry']/descendant::a[@href='dishes.php?res_id=511' and @class='btn btn-purple']")
    }
    get hungrooViewMenuButton()
    {
        return $("//a[.='Hungroo']/ancestor::div[@class='bg-gray restaurant-entry']/descendant::a[@class='btn btn-purple' and @href='dishes.php?res_id=514']")
    }
    
}
export default new RestaurantPage()