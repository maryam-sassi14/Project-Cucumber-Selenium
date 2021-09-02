package com.orangeHRM.e2eTests.Background.pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class BackgroundPage {
	
	   /*Locators*/
		final static String BUZZ_ID = "menu_buzz_viewBuzz";
		final static String RECRUITMENT_ID =  "menu_recruitment_viewRecruitmentModule";	
	
		/*FindBy*/
		@FindBy(how=How.ID, using=BUZZ_ID)
		public static WebElement buzz_module;
		@FindBy(how=How.ID, using=RECRUITMENT_ID)
		public static WebElement recruitment_module;
		
		
		/*Methods*/
		public void clickBuzzModule() {
			buzz_module.click();
		}
		public void clickRecruitmentModule() {
			recruitment_module.click();
		}
}


