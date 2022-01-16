# JSON TESTS
## Manipulations de données JSON

### php_tests_1/
Récuperation de données d'un fichier json  
Manipulation des données (recherche d'existence de donnée, comparaison de valeurs...)  
Ecriture de données dans le fichier JSON

### scores/
Affiche une liste de score et un formulaire permettant d'inscrire un nom et un score  
- Si un score est déja inscrit pour le nom entré, on verifie si le score a besoin d'être mis a jour
- Sinon on entre un nouveau joueur ainsi que son score dans le fichier json

### js/fetch_php_script
**Le fichier js** fetch un script php et affiche la response texte dans le HTML (la liste et le formulaire)  
**Le fichier php** se charge de la recherche du nom, la comparaison du score, la creation et l'ajout d'un nouveau joueur et l'écriture dans le fichier json 

### js/fetch_json
**Le fichier js** fetch un script php pour lire et écrire dans le fichier json. Js s'occupe de toute la logique  
**Le fichier php** se charge seulement de récuperer les données du fichier, ou de le reécrire avec le parametre json (une chaine JSON) passé par JS