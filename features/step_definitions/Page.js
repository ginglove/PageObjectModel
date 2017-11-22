const test = require('../../pages/Testpage')(driver)
module.exports = function search(){
    this.When(/^User input "([^"]*)" into search textbox$/,function(text){
        test.url();
        test.entertxt(text);
    });
    this.When(/^Selects search button$/,function(){
        test.searchbutton();
    });
    this.Then(/^Result page displays$/,function(){
        test.resulttxt();
    });
}