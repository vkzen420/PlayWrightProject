const {test,expect}=require('@playwright/test');

test('Alert',async ({page})=>{

await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
 page.on('dialog',async dialog =>{
  
    expect(dialog.type()).toContain('confirm');
    expect(dialog.message()).toContain('Hello , Are you sure you want to confirm?');
   // await dialog.accept(); 
    await dialog.dismiss();
   
})

//await page.locator('#alertbtn').click();
await page.locator('#confirmbtn').click();
//confirmbtn


})