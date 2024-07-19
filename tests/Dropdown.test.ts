import test from "@playwright/test";


test("Dropdow test",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
   // await  page.locator("//select[@id='select-demo']").click();

    await page.selectOption("//select[@id='select-demo']",{
        index:6
               // label:"Wednesday"

    });
    await page.waitForTimeout(3000);

    await page.waitForTimeout(3000);

});

test("Dropdow multiple select test",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo");
   // await  page.locator("//select[@id='select-demo']").click();

    await page.selectOption("//select[@id='multi-select']",[
        {index:1},
        {value:"Ohio"},
        {label:"Texas"}
    ]);

    await page.waitForTimeout(3000);

});

test.only("Test jQuery DropDown",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo");

    await page.click("(//span[@role='combobox'])[1]");
    await page.locator("//ul[@id='select2-country-results']").locator("li",{
        hasText:"India"
    }).click()


    await page.click("//input[contains(@placeholder,'Select state(s)')]");
   // await page.locator("(//ul[@id='select2-ye28-results'])[1]").click();

    await page.locator("//ul[@id='select2-ye28-results']").locator("li",{
        hasText:"Alaska"
    }).click()
})