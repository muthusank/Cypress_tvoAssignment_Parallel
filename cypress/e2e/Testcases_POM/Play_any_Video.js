export class Playvideo
{
Play_video()
{
//Launch tvo website in the Browser
cy.xpath("//div/a[@href='/video/documentaries/1001-nights-apart']").should('have.length', 1).click()
cy.wait(2000)
//Verify the page title
cy.title().should('eq','1001 Nights Apart | TVO Today')
//cy.xpath("//div/a[@href='/video/documentaries/1001-nights-apart']").screenshot("Play Video")
cy.screenshot("Play Video")
cy.wait(2000)
}
}