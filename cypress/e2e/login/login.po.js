class Login {
    loginToPatientPortal() {
        cy.visit('http://umrtest.com/dhanvantari')
        cy.fixture('ibcommon.json').then((user) => {
            cy.get('#username').type(user.username)
            cy.get('#password').type(user.password)
            cy.get('#login-btn').click()
        })
    }
   
    async getOtp() {
        return new Promise((myResolve) => {
            cy.task("pinServer").then((result) => {
                myResolve(result[0].otp);
            });
        });
    }

    deleteBeneficiary() {
        return new Promise((myResolve) => {
            cy.task("pinServer1").then((result) => {
                myResolve(result[0].otp);
            });
        });
        } 
}

export default Login