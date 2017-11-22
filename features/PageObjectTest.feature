Feature: PageObject
Check Page Object for reuse in automation test
Scenario: Google search
  When User input "github" into search textbox
  And Selects search button
  Then Result page displays
 
 