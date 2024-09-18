const {test,expect}=require('@playwright/test');

test('Frame',async ({page})=>{
 
 await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
const allFrames = await page.frames();
console.log(allFrames.length);

// await page.click("ul[class='navigation clearfix']>li>a[href='mentorship']");
 //await  page.frame('iframe-name').click("ul[class='navigation clearfix']>li>a[href='mentorship']");
 await page.frame({url : 'https://rahulshettyacademy.com/'}).click("ul[class='navigation clearfix']>li>a[href='mentorship']");
 await page.waitForTimeout(5000);

})