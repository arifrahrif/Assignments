const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {

//Creating Account
test.setTimeout(120000);
await page.goto("https://whitelabel.sandbox.array.io/signup?platform=v3");
await page.locator('input[name="firstName"]').type("Thomas");
await page.locator('input[name="lastName"]').type("Devos");
await page.locator('input[name="address"]').type("110 Beer Creek");
await page.locator('input[name="city"]').type("Tuscaloosa");
await page.locator('[data-test-id="select-state"]').selectOption("AL");
await page.locator('[name="zip"]').type("35405",{timeout:6000});
await page.locator('button[type="submit"]').click();
await page.waitForTimeout(2000);



await page.locator(':nth-match([class="svelte-1qqj4dt placeholder-visible"], 1)').selectOption("09",{timeout:2000});
await page.locator(':nth-match([data-test-id="select-null"], 2)').selectOption("06");
await page.locator(':nth-match([data-test-id="select-null"], 3)').selectOption("1957");

await page.locator('[data-test-id="input-ssn-"]').type("3511");
await page.locator('button[type="submit"]').click();
await page.waitForTimeout(4000);


await page.locator(':nth-match([class="svelte-1qqj4dt placeholder-visible"], 1)').selectOption("09",{timeout:6000});
await page.locator(':nth-match([data-test-id="select-null"], 2)').selectOption("06");
await page.locator(':nth-match([data-test-id="select-null"], 3)').selectOption("1957");

await page.locator('[data-test-id="input-ssn-"]').type("666023511");
await page.locator('button[type="submit"]').click();
await page.waitForTimeout(4000);








let expectedVal1 = "ASI Medical";
let expectedVal2 = "Carroll County Bank";
let expectedVal3 = "Great Financial SVC";
let expectedVal4 = ("IEC");
let expectedVal5 = ("KIA Sorento");
let expectedVal6 = ("Lynn Lee Const Co In");
let expectedVal7 = ("New Hampshire");
let expectedVal8 = ("Sallie Mae Servicing");
let expectedVal9 = ("The Toronto-Dominion Bank");
let expectedVal10 = ("Toyota Highlander");
let expectedVal11 = ("Volkswagen Passat");
let expectedVal12 = ("Wells Fargo & Company");
let expectedVal13 = ("$ 200 - $ 249");
let expectedVal14= ("$ 385 - $ 484");



//Capturing all the information of Question 1 to compare with expected list
let actualinfo = await page.locator('[class="radio-button-group-container vertical svelte-waqa5k"]').nth(0).textContent({timeout:2500});

//console.log("Info " + actualinfo)
let expectedList = [expectedVal1,expectedVal2,expectedVal3,expectedVal4,expectedVal5,expectedVal6,expectedVal7,expectedVal8,expectedVal9,expectedVal10,expectedVal11,expectedVal12,expectedVal13,expectedVal14]
let expected;
for(expected=0;expected < expectedList.length;expected++){
    
    if(actualinfo.match(expectedList[expected])){
    await page.locator('text="'+expectedList[expected]+'"').nth(0).click() 
    break;
    }else{await page.locator('text="None of the Above"').nth(0).click() 

    }


}//end of loop 1




    





await page.waitForTimeout(3000);


//Capturing all the information of Question 2 to compare with expected list
let actualinfo2 = await page.locator('[class="radio-button-group-container vertical svelte-waqa5k"]').nth(1).textContent({timeout:2500});

//console.log("Info " + actualinfo2)
for(expected=0;expected < expectedList.length;expected++){
    
if(actualinfo2.match(expectedList[expected])){
    await page.locator('text="'+expectedList[expected]+'"').nth(0).click() 
    break;
}else{
    await page.locator('text="None of the Above"').nth(1).click() 

}
}//end of loop 2



await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
   



await page.waitForTimeout(3000);

//Capturing all the information of Question 3 to compare with expected list
let actualinfo3 = await page.locator('[class="radio-button-group-container vertical svelte-waqa5k"]').nth(2).textContent({timeout:2500});

//console.log("Info " + actualinfo)
for(expected=0;expected < expectedList.length;expected++){
   
    if(actualinfo3.match(expectedList[expected])){
    await page.locator('text="'+expectedList[expected]+'"').nth(0).click() 
    break;
    }else{await page.locator('text="None of the Above"').nth(2).click() 

    }
}//end of loop 3
    

await page.waitForTimeout(3000);



await page.locator('text="Submit"').click();


/*
//Capturing all the information of Option Question if pop-ups(however cannot figure out the syntax because it's random)to compare with expected list
let actualinfo4 = await page.locator('[class="option"]').textContent({timeout:2500});

//console.log("Info " + actualinfo4)
for(expected=0;expected < expectedList.length;expected++){
   
    if(actualinfo4.match(expectedList[expected])){
    await page.locator('text="'+expectedList[expected]+'"').nth(0).click() 
    break;
    }else{await page.locator('text="None of the Above"').nth(2).click() 

    }
}//end of loop 4

*/













await page.locator('text="Show Scores"').click({timeout:40000});

//Click on Settings
await page.locator(':nth-match([class="menuLink svelte-1nlvsw1"], 4)').click();


//Click on Log Out
await page.locator('[class="submenu logout svelte-1nlvsw1"]').click();






//verify that once you logged out you are back to login back by verifying the login content
let result = await page.locator('[data-test-id="login"]').nth(0).textContent({timeout:6000});
expect(result).toBe("Login to account")
});



