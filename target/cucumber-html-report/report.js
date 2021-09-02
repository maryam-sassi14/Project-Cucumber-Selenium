$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("background/Background.feature");
formatter.feature({
  "line": 2,
  "name": "Background - OrangeHRM",
  "description": " En tant que utilisateur je souhaite de vérifier les fonctionnement de background",
  "id": "background---orangehrm",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@background"
    }
  ]
});
formatter.before({
  "duration": 3952301000,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "je me connecte a l application orangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisi UserName \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisi Pasword \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.jeMeConnecteALApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2605397800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiUserName(String)"
});
formatter.result({
  "duration": 174841300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiPasword(String)"
});
formatter.result({
  "duration": 126690300,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 3287598400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Authentification - OrangeHRM",
  "description": "",
  "id": "background---orangehrm;authentification---orangehrm",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "Redirection vers le compte Admin\"Welcome\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome",
      "offset": 33
    }
  ],
  "location": "AuthentificationStepDefinition.redirectionVersLeCompteAdmin(String)"
});
formatter.result({
  "duration": 74629400,
  "status": "passed"
});
formatter.after({
  "duration": 1841852000,
  "status": "passed"
});
formatter.before({
  "duration": 2545639600,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "je me connecte a l application orangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisi UserName \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisi Pasword \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.jeMeConnecteALApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2426355800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiUserName(String)"
});
formatter.result({
  "duration": 134481100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiPasword(String)"
});
formatter.result({
  "duration": 128706700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 2752613900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Cliquer sur le module Buzz",
  "description": "",
  "id": "background---orangehrm;cliquer-sur-le-module-buzz",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@buzz"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "Je clique sur le module Buzz",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundStepDefinition.jeCliqueSurLeModuleBuzz()"
});
formatter.result({
  "duration": 3308561800,
  "status": "passed"
});
formatter.after({
  "duration": 1308347900,
  "status": "passed"
});
formatter.before({
  "duration": 2307891500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "je me connecte a l application orangeHRM",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "Je saisi UserName \"Admin\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Je saisi Pasword \"admin123\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Je clique sur le bouton login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationOutlineStepDefinition.jeMeConnecteALApplicationOrangeHRM()"
});
formatter.result({
  "duration": 2597384700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 19
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiUserName(String)"
});
formatter.result({
  "duration": 138579000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin123",
      "offset": 18
    }
  ],
  "location": "AuthentificationStepDefinition.jeSaisiPasword(String)"
});
formatter.result({
  "duration": 129008700,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.jeCliqueSurLeBoutonLogin()"
});
formatter.result({
  "duration": 2699896200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Cliquer sur le module Recruitment",
  "description": "",
  "id": "background---orangehrm;cliquer-sur-le-module-recruitment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@rec"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "Je clique sur le module Recruitment",
  "keyword": "When "
});
formatter.match({
  "location": "BackgroundStepDefinition.jeCliqueSurLeModuleRecruitment()"
});
formatter.result({
  "duration": 1238287900,
  "status": "passed"
});
formatter.after({
  "duration": 1369585900,
  "status": "passed"
});
});