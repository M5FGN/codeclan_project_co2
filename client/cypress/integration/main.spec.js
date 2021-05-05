describe('The Main Page', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })
    it("Loads the app", () => {
        cy.visit('http://localhost:3000/')
    })
    it("Displays the logo", () => {

    })
    it("Check Title", () => {
        cy.title().should('include', "Project CO2");
    })

    it("Check Logo appears", () => {
        cy.get('div[class="logo"]').find("img");
    })

    it("Check Sub Heading appears", () => {
        cy.get('.header_text').contains("Carbon Foot Print Calculator");           
    })

    it("Check Created by appears", () => {
        cy.get('.header_text').contains("Created by Colin, Iain and Mary"); 
    })

    it("Check Instructions appear", () => {
        cy.get('.user_select').contains("A user account is needed to use this calculator ...")
    })

    it("Check Select and existing User appears", () => {
        cy.get('.user_select').contains("Select an existing User ..."); 
    })

    it("Check Or create a New User appears", () => {
        cy.get('.user_select').contains("Or create a New User ..."); 
    })

    it("Check UserList appears", () => {
        cy.get('#userList')
    })

    it("Check Select user is populated", () => {
        const userListPopulated = cy.get('#userList option')
        userListPopulated.should('have.length', 5)
    })

    it("Can select a user", () => {
        cy.get('#userList').select("Bigtuna")
    })

    it("Contains Create an New User Button", () => {
        cy.get('.user_select').contains("Create New User")
    })

    it("Can click on the create user button", () => {
        cy.get('#newuserbutton').click()
    })

    it("Check Create New User Title", () => {
        cy.get('#newuserbutton').click()
        cy.get('div>h2').contains("Create a New User")
    })

    it("Check UserName Label", () => {
        cy.get('#newuserbutton').click()
        cy.get('form>p>label').contains("Username:")
    })

    it("Check FirstName Label", () => {
        cy.get('#newuserbutton').click()
        cy.get('form>p>label').contains("First Name:")
    })

    it("Check LastName Label", () => {
        cy.get('#newuserbutton').click()
        cy.get('form>p>label').contains("Last Name:")
    })

    it("Check Username Text input appears", () => {
        cy.get('#newuserbutton').click()
        cy.get('#username')
    })

    it("Check FirstName Text input appears", () => {
        cy.get('#newuserbutton').click()
        cy.get('#forename')
    })

    it("Check LastName Text input appears", () => {
        cy.get('#newuserbutton').click()
        cy.get('#surname')
    })

    it("Check create user button appears", () => {
        cy.get('#newuserbutton').click()
        cy.get('#createUser')
    })

    it("Check title Diet appear on the page", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('div>h2').contains("Diet")
    })

    it("Check diet form appears on the page", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#diet_form')
    })

    it("Check form instruction appears on the page", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('h4').contains("Choose the value which best describes your meat consumption ...")
    })

    it("Checks the form labels appear on the page", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('form>p>label').contains("I eat meat 7 days a week.")
    })

    it("Checks the form labels appear on the page", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('form>p>label').contains("I eat meat 4 - 6 days per week.")
    })

    it("Checks the form labels appear on the page", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('form>p>label').contains("I eat meat 1 - 3 days per week.")
    })

    it("Checks the form labels appear on the page", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('form>p>label').contains("I don't eat meat.")
    })

    it("Checks the radio input appear on the page", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#meat_full')
    })

    it("Checks the radio input appear on the page", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#meat_partial')
    })

    it("Checks the radio input appear on the page", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#meat_low')
    })

    it("Checks the radio input appear on the page", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#meat_none')
    })

    it("Checks the radio button can be clicked", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#meat_full').check()
    })
    
    it("Checks the radio button can be clicked", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#meat_partial').check()
    })
    
    it("Checks the radio button can be clicked", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#meat_low').check()
    })

    it("Checks the radio button can be clicked", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#meat_none').check()
    })

    it("Check Calculate button appears on the diet form", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#dietCalculate')
    })

    it("Check Calculate button appears on the diet form", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#meat_none').check()
        cy.get('#dietCalculate').click()
    })

    it("Check Return to Home page title appears", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#rtnHome').contains('Return to Home page')
    })

    it("Check Return to home page instruction appears", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('div>p').contains('Return to the Home Page to Log In as a different user ...')
    })

    it("Check Return to Home button appears on the Input Section", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#returnbtn')
    })

    it("Check Return to Home button can be clicked", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#returnbtn').click()
    })

    it("Check Delete User instruction appears", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('div>p').contains('To remove your account, click')
    })

    it("Check Delete User button appears on the Input Section", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#deletebtn')
    })

    xit("Check Delete User button can be clicked", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#deletebtn').click()
    })

    it("Check Delete User Account title appears", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#delUser').contains('Delete your User Account')
    })

    it("Check annual carbon title appears", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('div>h4').contains('Your total annual Carbon Foot Print is ... ') 
    })

    it("Check Odo is appearing", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('#odo')
    })

    it("Check Individual Outputs appears", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('div>h4').contains('Carbon Foot Print is made up') 
    })

    it("Check Individual Outputs appears", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('div').contains('Your diet contributes') 
    })

    it("Check Individual Outputs appears", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('div').contains('Travelling by Car') 
    })

    it("Check Individual Outputs appears", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('div').contains('Travelling by Train') 
    })

    it("Check Individual Outputs appears", () => {
        cy.get('#userList').select("Beesly")
        cy.get('div').contains('Travelling by Bus') 
    })

    it("Check Individual Outputs appears", () => {
        cy.get('#userList').select("Plop")
        cy.get('div').contains('Cycling contributes') 
    })

    it("Check Individual Outputs appears", () => {
        cy.get('#userList').select("Beesly")
        cy.get('div').contains('Walking contributes') 
    })

    it("Check Individual Outputs appears", () => {
        cy.get('#userList').select("Beesly")
        cy.get('div').contains('Air travel contributes') 
    })

    it("Check Individual Outputs appears", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('div').contains('Your Home Heating') 
    })

    it("Check Individual Outputs appears", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('div>p').contains('Your Recycling habits') 
    })

    it("Check Chart appears", () => {
        cy.get('#userList').select("Bigtuna")
        cy.get('.highcharts-plot-background')
    })
    
})
