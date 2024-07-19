import test, { expect } from "@playwright/test";

test("Test Alerts",async({page})=>{
await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

await page.on("dialog",async(alert)=>{
    console.log(alert.message());
    await alert.accept();
});

await page.locator("//button[contains(normalize-space(),'Click Me')]").nth(0).click();

});

test("Test confirm Alerts",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    
    await page.on("dialog",async(alert)=>{
        console.log(alert.message());
        await alert.dismiss();
    });
    await page.locator("//button[contains(normalize-space(),'Click Me')]").nth(1).click();
    
    const getConfirt=page.locator("//p[@id='confirm-demo']");
    
    expect(getConfirt).toContainText("You pressed Cancel!");
    
    
    });

    test("Test prompt Alerts",async({page})=>{
        await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");
    
        
        page.on("dialog",async(alert)=>{
            console.log(alert.message());
    
            await alert.accept("Hloni");
        });
        await page.locator("//button[contains(normalize-space(),'Click Me')]").nth(2).click();
        
        const getConfirt=page.locator("//p[@id='prompt-demo']");
        
        expect(getConfirt).toContainText("Hloni");
        
        
        });

        test("Test boostrap alert",async({page})=>{
         await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");

         await page.locator("//button[@data-target='#myModal']").nth(0).click();
         await page.locator("//div[@id='myModal']//button[@type='button'][normalize-space()='Save Changes']").click();

        });