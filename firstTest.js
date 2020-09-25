const { Builder, By, Key, until } = require("selenium-webdriver");

(async function example() {
  let driver = await new Builder().forBrowser("firefox").build();
  try {
    await driver.get("http://www.orbitz.com");
    await driver
      .findElement(By.id("hotel-destination-hp-hotel"))
      .sendKeys("Mmuseumm, Cortlandt Alley, New York, NY, USA", Key.ENTER);
    await driver.wait(
      until.titleIs(
        "4 Cortlandt Alley, New York, NY 10013, USA Hotel Search Results"
      ),
      10000
    );
  } finally {
    const pageTitle = await driver.getTitle();
    if (
      pageTitle ===
      "4 Cortlandt Alley, New York, NY 10013, USA Hotel Search Results"
    ) {
      console.log("\u2705 Test Passed! Page Title as expected.");
    } else {
      console.log("\u274C Test Failed! Unexpected Page Title! ");
    }
    await driver.quit();
  }
})();
