@connexion
Feature: Authentification - OrangeHRM
     En tant que utilisateur je souhaite m authentifier

  Background: 
    Given je me connecte a l application orangeHRM

  @cnx
  Scenario: Authentification - OrangeHRM
    When Je saisi UserName "Admin"
    And Je saisi Pasword "admin123"
    And Je clique sur le bouton login
    Then Redirection vers le compte Admin"Welcome"