'use strict';
const webdriver = require('selenium-webdriver');
const By = webdriver.By;
const until = webdriver.until;
module.exports = function(driver) {
    const elements = {
      searchbtn:'//*[@name="btnK"]',
      inputtxt:'#lst-ib',
      resultpage:'//a[@href="https://github.com/"]',
    };
    return {
        url: function (value){
          return browser.url("https://www.google.com");
        },
        entertxt: function(value){
          return browser.setValue(elements.inputtxt,value);
        },
        searchbutton:function(value){
          return browser.click(elements.searchbtn);
        },
        resulttxt: function(value) {
          return browser.waitForExist(elements.resultpage,10000);
        }
    };
}