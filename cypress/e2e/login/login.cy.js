import Login from "../login/login.po";

describe('IB web login test functionalities', () => {
    const ln = new Login()

    it('should not login with invalid userID', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('http://umrtest.com/dhanvantari')
        ln.enterValidUserID()
        ln.enterInvalidPassword()
        ln.clickLogin()
        ln.verifyUnsuccessfulLogin()
    })

    it('should not login with invalid password', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('http://umrtest.com/dhanvantari')
        ln.enterValidUserID()
        ln.enterInvalidPassword()
        ln.clickLogin()
        ln.verifyUnsuccessfulLogin()
    })

    it('should not login with invalid user ID and password', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('http://umrtest.com/dhanvantari')
        ln.enterValidUserID()
        ln.enterInvalidPassword()
        ln.clickLogin()
        ln.verifyUnsuccessfulLogin()
    })

    it('should login with valid userID and password', () => {
        cy.clearCookies()
        cy.clearLocalStorage()
        cy.visit('http://umrtest.com/dhanvantari')
        ln.enterValidUserID()
        ln.enterValidPassword()
        ln.clickLogin()
        ln.verifySuccessfulLogin()
    })
})
