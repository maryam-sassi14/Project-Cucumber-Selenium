package com.orangeHRM.e2eTests.authentification.stepsDefinitions;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orangeHRM.e2eTests.authentification.pages.AuthentificationPage;
import com.orangeHRM.e2eTests.utils.CommonMethods;
import com.orangeHRM.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthentificationStepDefinition {
 
  public WebDriver driver;	
  
  private  AuthentificationPage authentificationPage = new AuthentificationPage();
  private CommonMethods commonMethods = new CommonMethods();
  
  public AuthentificationStepDefinition() {
	  driver = Setup.driver;
  }
  
	@Given("^Je me connecte a l application orangeHRM$")
	public void jeMeConnecteALApplicationOrangeHRM() throws Throwable {
		commonMethods.openApplicationWithConfigFile();
	}

	@When("^Je saisi UserName \"([^\"]*)\"$")
	public void jeSaisiUserName(String name) throws Throwable {	
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationPage.filluserName(name);
	}

	@When("^Je saisi Pasword \"([^\"]*)\"$")
	public void jeSaisiPasword(String password) throws Throwable {
		authentificationPage.fillPassword(password);
	}

	@When("^Je clique sur le bouton login$")
	public void jeCliqueSurLeBoutonLogin() throws Throwable {
		authentificationPage.clickbouttonLogin();
	}

	@Then("^Redirection vers le compte Admin\"([^\"]*)\"$")
	public void redirectionVersLeCompteAdmin(String message) throws Throwable {
		String welcomeMessage = AuthentificationPage.messageWelcome.getText();
	    Assert.assertTrue(welcomeMessage.contains(message));
	}

}
