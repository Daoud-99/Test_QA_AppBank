Feature: Bank Selection test

  Background: 
    Given User navigates to the application 
 
  Scenario: Selection of disponible bank by exact name 
    When User enter "BNP Paribas" on search bar 
    Then The bank "BNP Paribas" should be in suggestions list

  Scenario: Selection of disponible bank by partial name 
    When User enter "BNP" on search bar 
    Then The bank "BNP Paribas" should be in suggestions list
  
  Scenario: Search with unnecessary spaces 
    When User enter " BNP Paribas " on search bar 
    Then The bank should not be in suggestions list

  Scenario: No bank found 
    When User enter "nonDispoBank" on search bar   
    Then The bank should not be in suggestions list

  
  

