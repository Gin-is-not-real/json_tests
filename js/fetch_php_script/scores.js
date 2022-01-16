let divTest = document.querySelector('#test');

/**
 * Fetch du script scores.php et affichage de la liste + formulaire
 * L'url de l'action du formaulaire est mis à jour aprés avoir inséré dans le HTML (il n'est pas appelé du mm endroit)
 * Le script fonctionne normalement: 
 *      recuperation des données du fichier JSON
 *      recherche d'un joueur
 *      comparaison et mise à jour du score
 *      OU ecriture nouveau joueur dans le fichier JSON
 */

//recupere la liste et le formulaire et l'insere dans la div #test
fetch('js/fetch_php_script/scores.php')
.then(response =>  response.text())
.then(text => {
    console.log(text)
    divTest.innerHTML = text;
})

