
import all_positive_test from "../all_positive_test/all_positive_test.po";
import Login from "../login/login.po";


describe('Web All Positive Test Functionalities', function () {
    const allPositive = new all_positive_test()
    const login = new Login()
    const path = require('path')
    
    this.beforeAll(() => {
        cy.window().then(win => win.sessionStorage.clear())
        cy.clearCookies()
        cy.clearLocalStorage()
        login.deleteBeneficiary()
        login.loginToPatientPortal()
    })

    it('1. Verify successful login', () => {
        //allPositive.loginToPatientPortal()
    })

})