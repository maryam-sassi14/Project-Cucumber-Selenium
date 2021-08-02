$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Authentification - OrangeHRM",
  "description": "   En tant que utilisateur je souhaite m authentifier",
  "id": "authentification---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 4613408900,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "authentification---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Je me connecte a l application orangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Je saisi UserName",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Je saisi Pasword",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Redirection vers le compte Admin",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "duration": 2098214400,
  "status": "passed"
});
});