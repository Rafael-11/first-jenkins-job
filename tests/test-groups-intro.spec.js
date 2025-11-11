import { test } from "@playwright/test";
test.describe("",()=>{
    test.beforeEach(async()=>{
        console.log("Before each testcase");
    });

    test.afterEach(async()=>{
        console.log("After each testcase");
    });
    

      test("Test case 1", async ()=>{
  console.log("Test case 1 is executed");
});
  test("Test case 2", async ()=>{
  console.log("Test case 2 is executed");
});

  test("Test case 3", async ()=>{
  console.log("Test case 3 is executed");
});

  test("Test case 4", async ()=>{
  console.log("Test case 4 is executed");
});

});