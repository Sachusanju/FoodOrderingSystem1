class cartSummary
{
    get orderNowButton()
    {
        return $("//input[@type='submit']")
    }
}
export default new cartSummary()