const { test, expect } = require('@playwright/test');
const { debug } = require('console');

test('WebTable', async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

    const table = await page.locator('//table[@id= "product"  and not (contains(@name , "courses"))]');

    //number of cols
    const cols = await table.locator('//thead//tr//th');
    console.log('Number of Cols count : ', await cols.count());

    //number of rows
    const rows = await table.locator('//tbody//tr')
    console.log('Number of rows count : ', await rows.count());
    const rowcount = await rows.count();
    const colcount = await cols.count();
    const sum = await getTableValues(rowcount,colcount,table);
    console.log(sum);
    let amtLabel = await page.locator('div.totalAmount').textContent();
    let amt =  amtLabel.match(/[0-9]/g).join('');
    console.log(amt);
    await expect(parseInt(amt)).toEqual(sum);
   // await expect(amt).toContain(sum);
})

async function getTableValues(rows, cols,table) {
     let sum = 0;
    for (let i = 1; i <= rows; i++) {
        const rowloc = await table.locator('//tbody//tr[' + i + ']');
        for (let j = 1; j <= cols; j++) {
            
            const colloc =  rowloc.locator('//td[' + j + ']');
            console.log(await colloc.textContent())
            if(j===4)
            {
              let amt=  await colloc.textContent();
              sum = sum + parseInt(amt);
            }    
        }

          
    }
    return sum;



}




