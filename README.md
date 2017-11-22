# PageObjectModel
This repository was create to guide new user of CucumberJS, chimp and Gherkin how to user PageObject Model for re-use element
Usage
1. After download this , please use NPM install for install all support in Page.json
2. Use chimp .\features\PageObjectTest.feature to run this package
Structure:
--->Features
------->PageObjectTest.feature
------->step_definitions
---------->Page.js
--->Pages
----->Testpage.js

Please updates this Page/Testpage.js if you wants to change to your own testcases
Notice : 
+ Change field under 
    const elements = {
    .............
    };
  -> To input element to this package
+ Change field under 
      return {
      ...........
        },
    };
   -> To create function for reusable
   
If you have some question , please contact me via gmail : truonggiangle91@gmail.com
