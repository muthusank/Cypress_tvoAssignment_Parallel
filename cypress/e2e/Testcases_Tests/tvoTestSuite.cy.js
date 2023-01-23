import { Launchwebsite } from "../Testcases_POM/Launch"
import { MenuNavigation } from "../Testcases_POM/Menu_Navigation"
import { All_DocsandSeries } from "../Testcases_POM/Click_All Docs & Series"
import { DocsCategory } from "../Testcases_POM/Choose_DocsCategory"
import { Playvideo } from "../Testcases_POM/Play_any_Video" 
import { Perform_Search } from "../Testcases_POM/PerformSearch"

describe('tvoAutomation Testsuite', () => 
{
 
//Initilizations & Declarations
const launch = new Launchwebsite()
const Menu = new MenuNavigation()
const DocsSeries = new All_DocsandSeries()
const Docs = new DocsCategory()
const Play = new Playvideo()
const Search = new Perform_Search()

before(function()
  {
    //Launch Website
    launch.Application_launch()
  })

it('testcases', () => 
  {
    //Navigate to Menu
    Menu.Menu_Navigation()
    //Click on All Docs & Series
    DocsSeries.Click_on_AllDocsandSeies()
    //Choose Docs Category
    Docs.ChooseDocsCategory()
    //Play one video in Docs Category
    Play.Play_video()
    //Perform Search with different Keyword input
    Menu.Menu_Navigation()
    Search.DoSearch()
})

})

