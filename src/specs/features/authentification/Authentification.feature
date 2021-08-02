@connexion
Feature: Authentification - OrangeHRM
     En tant que utilisateur je souhaite m authentifier

  @cnx
  Scenario: Authentification - OrangeHRM
    Given Je me connecte a l application orangeHRM
    When Je saisi UserName
    And Je saisi Pasword
    And Je clique sur le bouton login
    Then Redirection vers le compte Admin
