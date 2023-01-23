
export class All_DocsandSeries
{
Click_on_AllDocsandSeies()
{
cy.xpath("//span[text()='Docs & Series']").click() 
//Verify the page title
cy.title().should('eq','Series & Docs | TVO.org')
cy.screenshot("All Docs & Series")
cy.wait(2000)
}
}