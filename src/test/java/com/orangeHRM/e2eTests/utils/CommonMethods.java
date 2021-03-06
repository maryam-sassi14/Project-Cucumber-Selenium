package com.orangeHRM.e2eTests.utils;


import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class CommonMethods {
	
	public static WebDriver driver;
	public static Properties prop;
	public CommonMethods() {
		driver = Setup.driver;
	}
    public void scrollerButtom() {
	((JavascriptExecutor)driver).executeScript("windwo.scrollBy(0,400)", "");
	}
    
    public void openApplicationWithConfigFile() throws IOException {
    	prop = new Properties();
    	FileInputStream fis = new FileInputStream("src/specs/features/configs/config.properties");
    	prop.load(fis);
    	driver.get(prop.getProperty("url"));
    }
    	
    	
    }
