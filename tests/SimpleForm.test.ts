import test, { expect } from "@playwright/test"
import exp from "constants";

test("Test input filed SampleForm",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo");
    const messageInput= page.locator("//input[@id='user-message']");

    const sum1=page.locator("//input[@id='sum1']");
    const sum2=page.locator("//input[@id='sum2']");
    const getSum=page.locator("//button[normalize-space()='Get Sum']");
    const getResult=page.locator("//p[@id='addmessage']");


    let a=123;
    let b=789;
    let c=a+b;

    await sum1.fill(""+a);
    await sum2.fill(""+b);
    await getSum.scrollIntoViewIfNeeded();
    await getSum.click();
    expect(getResult).toHaveText(""+c)
    console.log("Helo world i am here ******   "+await getResult.textContent()) ;  
    console.log("Helo world i am here ******   "+await sum2.inputValue()) ;  




   // messageInput.scrollIntoViewIfNeeded();
    console.log(await messageInput.getAttribute("placeholder")) ;  

    expect(messageInput).toHaveAttribute("placeholder",'Please enter your Message');

    const emailtab= page.locator("//a[normalize-space()='Start free with Email']");
   // emailtab.scrollIntoViewIfNeeded();
    //console.log(await emailtab.get) ;  
await page.waitForTimeout(5000);



});

test("Test checkbox ",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");

    const firstChekbox=page.locator("//input[@id='isAgeSelected']");

    await expect(firstChekbox).not.toBeChecked();

    await firstChekbox.check();

    await expect(firstChekbox).toBeChecked();
    
    await page.waitForTimeout(5000);

});