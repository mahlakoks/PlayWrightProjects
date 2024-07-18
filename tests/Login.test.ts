import {chromium, expect, test} from "@playwright/test";

const myAccout ="(//div//span[contains(text(),'My account')])[2]";
const login ="text=Login";
const email="#input-email";
const password="//input[@id='input-password']";
const loginSubmit="//input[@value='Login']";

test("Login test demo",async ()=>{

    const browser =await chromium.launch({
        headless:false
    });
    const contex  =await browser.newContext();
    const page = await contex.newPage();


    await page.goto("https://ecommerce-playground.Lambdatest.io/");
     await page.hover(myAccout);
   await page.click(login);
   
   await page.fill(email,"playtest@gmail.com");
   await page.fill(password,"Pass123")
   await page.click(loginSubmit);

   await expect(page.getByText("Edit your account in")).toBeVisible;
   await page.waitForTimeout(5000);


     // 
})

test("Logout test demo",async ()=>{

    const browser =await chromium.launch({
        headless:false
    });
    const contex  =await browser.newContext();
    const page = await contex.newPage();


    await page.goto("https://ecommerce-playground.Lambdatest.io/");
     await page.hover("(//div//span[contains(text(),'My account')])[2]");
   await page.click("text=Login");
   
   await page.fill("#input-email","playtest@gmail.com");
   await page.fill("//input[@id='input-password']","Pass123")
   await page.click("//input[@value='Login']");

   await expect(page.getByText("Edit your account in")).toBeVisible;
   await page.waitForTimeout(5000);


     // 
})

test("Register test demo",async ()=>{

    const browser =await chromium.launch({
        headless:false
    });
    const contex  =await browser.newContext();
    const page = await contex.newPage();


    await page.goto("https://ecommerce-playground.Lambdatest.io/");
     await page.hover("(//div//span[contains(text(),'My account')])[2]");
   await page.click("text=Login");
   
   await page.fill("#input-email","playtest@gmail.com");
   await page.fill("//input[@id='input-password']","Pass123")
   await page.click("//input[@value='Login ghggh']");

   await expect(page.getByText("Edit your account in not")).toBeVisible;
   await page.waitForTimeout(5000);


     // 
})