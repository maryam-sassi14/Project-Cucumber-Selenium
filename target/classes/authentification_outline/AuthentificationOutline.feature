@outline
Feature: Authentification Outline - OrangeHRM
   En tant que utilisateur je souhaite m authentifier avec un scénario outline

  Background: 
    Given je me connecte a l application orangeHRM

  @cnx-outline
  Scenario Outline: Authentification Outline - OrangeHRM
    When je saisi UserName "<name>"
    And je saisi Pasword "<password>"
    And je clique sur le bouton login

    Examples: 
      | name    | password   |
      | Admin   | admin123   |
      | Safe    | safe123    |
      | Imen    | imen123    |
      | Rima    | Rima123    |
      | Maryam  | maryam123  |
      | Zakaria | zakaria123 |