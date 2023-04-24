# REST-API

 Création d'un API REST pour les questions du quiz
 ------------------
 Lien vers [API sta FOOT](https://peaceful-chamber-91125.herokuapp.com/)  

 
<img width="960" alt="Capture d’écran 2022-07-08 090956" src="https://user-images.githubusercontent.com/102300897/177937196-d1640203-2aad-4ccf-84ad-0187e1b2d893.png">


AH OUI! c'est ce que donne le visuel c'est parce que c'est juste du back-end il y a pas du front

## Les Technologies utilisées:  
* Node.js  
* Express.js  
* JavaScript  
* Git   
* Json
* Postman (Pour le Test)*
* Heroku (Pour l'hébergement)

## Ressource:
* [Model](https://rapidapi.com/blog/nodejs-express-rest-api-example/)
* [Les methodes](https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28)
* [Postman](https://www.geeksforgeeks.org/basics-of-api-testing-using-postman/)

## Fonctionnement:  
<img width="960" alt="Capture d’écran 2022-07-08 085449" src="https://user-images.githubusercontent.com/102300897/177934555-c7408ac0-ba02-409b-aa66-53387ff87c7e.png">
On utilise la methode :  
* GET:Pour avoir un joueur  https://peaceful-chamber-91125.herokuapp.com/apiid  
   * Si l'entrée est trouvée, l'API retourne les statistiques en format en format JSON avec code statut __200__
   * Si non envoie __Players not found__ avec le status code approprié (404)

* POST: pour inserer un joueur https://peaceful-chamber-91125.herokuapp.com/api/v1/stats et insérer les données sous format Json dans le body avec l'option Raw  
  * L'API affiche le status code 201 après réussite de l'opération.  
```
{  
      "id": 1001,
      "name": "Jo",
      "wins": 10,
      "losses": 3,
      "points_scored": 7
  }
```  
  
* PUT : Pour modifier les données d'une question     
  * Si la mise à jour est réussie, l'API affiche le status code 200.
  * Si l'entrée n'est pas trouvée, l'API retourne un message d'erreur avec le status code approprié (404) __Question not found__

* DELETE: Pour effacer une question   
  * Si l'entrée n'est pas trouvée, l'API retourne un message d'erreur avec le status code approprié (404) __Question not foound__
  * Sinon affiche code statut __200__ 
