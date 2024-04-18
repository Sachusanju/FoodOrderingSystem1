class registerPage
{
    get userName()
    {
        return $("//input[@id = 'example-text-input' and @name='username']")
    }
    get firstName()
    {
        return $("//input[@id = 'example-text-input' and @name='firstname']")
    }
    get lastName()
    {
        return $("//input[@id = 'example-text-input-2']")
    }
    get emailAddress()
    {
        return $("//input[@id = 'exampleInputEmail1']")
    }
    get phoneNumber()
    {
        return $("//input[@id = 'example-tel-input-3']")
    } 
    get password()
    {
        return $("//input[@id = 'exampleInputPassword1']")
    }
    get confirmPassword()
    {
        return $("//input[@id = 'exampleInputPassword2']")
    }
    get address()
    {
        return $("//textarea[@id = 'exampleTextarea']")
    }
    get registerButton()
    {
        return $("//input[@type='submit']")
    }
}
export default new registerPage()