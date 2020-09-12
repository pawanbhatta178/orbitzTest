const { Builder, By, Key, until } = require("selenium-webdriver");
const test = require("selenium-webdriver/testing");
const assert = require("assert");

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
      1000
    );
  } finally {
    test.describe("TestSearchPage", function () {
      test.it("SearchPageTitle", async function () {
        const pageTitle = await driver.getTitle();
        await assert.equal(
          pageTitle,
          "4 Cortlandt Alley, New York, NY 10013, USA Hotel Search Results"
        );
      });
      test.after(async function () {
        await driver.quit();
      });
    });
  }
})();
