@background
Feature: Background - OrangeHRM
   En tant que utilisateur je souhaite de vérifier les fonctionnement de background

  Background: 
    Given je me connecte a l application orangeHRM
    When Je saisi UserName "Admin"
    And Je saisi Pasword "admin123"
    And Je clique sur le bouton login

  @cnx
  Scenario: Authentification - OrangeHRM
    Then Redirection vers le compte Admin"Welcome"

  @buzz
  Scenario: Cliquer sur le module Buzz
    When Je clique sur le module Buzz

  @rec
  Scenario: Cliquer sur le module Recruitment
    When Je clique sur le module Recruitment
