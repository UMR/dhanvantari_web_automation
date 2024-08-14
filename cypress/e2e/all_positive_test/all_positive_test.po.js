class all_positive_test {    
    
    getOtp() {
        return new Promise((myResolve) => {
            cy.task("pinServer").then((result) => {
                myResolve(result[0].otp);
            });
        });
    }   
}
export default all_positive_test;