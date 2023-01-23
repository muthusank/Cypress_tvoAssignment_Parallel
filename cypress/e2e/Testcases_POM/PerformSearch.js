export class Perform_Search
{
DoSearch()
{
cy.fixture('SearchKeyword').then( (data)=>
    {
            //Click on Search Icon
            cy.xpath("//input[@class='MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart']").should('have.length', 1).click()
            //For Input1
            cy.xpath("//input[@class='MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart']").type(data.InputKeyword)
            cy.wait(2000)
            cy.xpath("//input[@class='MuiInputBase-input MuiInput-input MuiInputBase-inputAdornedStart']").type('{enter}')
            cy.wait(4000)
            cy.screenshot("Search")
    })  

}
}