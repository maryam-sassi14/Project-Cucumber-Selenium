package com.orangeHRM.e2eTests.authentification_outline.stepsDefinitions;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orangeHRM.e2eTests.authentification.pages.AuthentificationPage;
import com.orangeHRM.e2eTests.utils.CommonMethods;
import com.orangeHRM.e2eTests.utils.Setup;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class AuthentificationOutlineStepDefinition {
 
	public WebDriver driver;
	
	private  AuthentificationPage authentificationPage = new AuthentificationPage();
	private CommonMethods commonMethods = new CommonMethods();
	
	public AuthentificationOutlineStepDefinition() {
	    driver = Setup.driver;
	}
	 

@Given("^je me connecte a l application orangeHRM$")
public void jeMeConnecteALApplicationOrangeHRM() throws Throwable {
	commonMethods.openApplicationWithConfigFile();
}

@When("^je saisi UserName \"([^\"]*)\"$")
public void jeSaisiUserName(String name) throws Throwable {
	PageFactory.initElements(driver, AuthentificationPage.class);
	authentificationPage.filluserName(name);
}

@When("^je saisi Pasword \"([^\"]*)\"$")
public void jeSaisiPasword(String password) throws Throwable {
	authentificationPage.fillPassword(password);
}

@When("^je clique sur le bouton login$")
public void jeCliqueSurLeBoutonLogin() throws Throwable {
	authentificationPage.clickbouttonLogin();
}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
