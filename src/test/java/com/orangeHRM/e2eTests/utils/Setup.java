package com.orangeHRM.e2eTests.utils;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Setup {

	public static WebDriver driver;
	static DriverManager driverManager;
@Before
	/**
	 * Call Browser With The Design Pattern Factory Navigator
	 */
	public static void seup() {
		driverManager = DriverManagerFactory.getManager(DriverType.CHROME);
		driver = driverManager.getDriver();
	}
@After
	/**
	 * Embed Screenshot in Test Report is Market as Failed
	 */
	public void embedScreenshot(Scenario scenario) {
		if (scenario.isFailed()) {
			try {
				scenario.write("Current Page Url is " + driver.getCurrentUrl());
				byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
			} catch (WebDriverException somePlatformDontSupportScreenshots) {
				System.err.println(somePlatformDontSupportScreenshots.getMessage());
			}
		}

		driver.quit();

	}

}
