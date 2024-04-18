class LoginPageApp
{
    get userNameTextBox()
    {
        return $("//input[@placeholder='Username']")
    }
    get passwordTextBox()
    {
        return $("//input[@placeholder='Password']")
    }
    get loginButton()
    {
        return $("//input[@id='buttn']")
    }

    async loginAction(username, password)
    {
        await this.userNameTextBox.setValue(username)
        await this.passwordTextBox.setValue(password)
        await this.loginButton.click()
    }
}

export default new LoginPageApp()