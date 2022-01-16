let phpScriptUrl = new URL(document.location.href + 'js/fetch_json/fetch.php');

let divTest = document.querySelector('#test');
let ul = document.querySelector('#list');
let formContainer = document.querySelector('#form');
let inputName = formContainer.querySelector('#name');
let inputScore = formContainer.querySelector('#score');
let submit = formContainer.querySelector('#submit');
let message = '';

//////////////////////////////////////
/**
 * Cherche dans la liste si une entrée correspond au nom entré.
 * Si c'est le cas et que le nouveau score est superieur, on met à jour le score
 * Sinon, on entre le nouveau joueur
 */
submit.addEventListener('click', function() {
    let name = inputName.value;
    let score = parseInt(inputScore.value);

    if((name.length > 0 && typeof name === 'string') && typeof score === 'number') {
        
        //verifier si le joueur existe
        let player = false;
        ul.childNodes.forEach(node => {
            if(node.id === name) {
                player = node;

                if(score > node.points) {
                    node.points = score;
                    node.textContent = name + ' : ' + node.points;
                    message = 'score updated';
                }
                else {
                    message = 'no record to update';
                }
            }
        })

        if(player === false) {
            console.log('pas de joueur');
            let new_player = new Object();
            new_player.points = score;

            let li = document.createElement('li');
            li.id = name;
            li.points = score;

            li.textContent = li.id + ' : ' + li.points;
            ul.appendChild(li);
        }

        /**
         * Pour sauvegarder dans le fichier json: 
         *      - je creer un objet contenant les joueurs et leur scores à partir des données de la liste
         *      - j'ajoute a l'url les parametres action=save et json = JSON.stringify(obj)
         *      - je fetch le script php à l'url demandée avec les parametres en GET:
         *          - php écrit l'objet dans le fichier json
         * 
         *      - je recupere la réponse du script php (un texte: 'save !')
         */
        let obj = new Object();
        let liAll = document.querySelectorAll('li');
        liAll.forEach(li => {
            obj[li.id] = {points: li.points};
        })

        let url = new URL(phpScriptUrl);
        let params = {
            action: 'save', 
            json: JSON.stringify(obj)
        }
        for (let k in params) {
            url.searchParams.append(k, params[k]);
        }

        fetch(url)
        .then(response => response.text())
        .then(text => console.log(text))
    }
})
/**
 * Fetch et manipulation des données du fichier JSON
 * On appelle le php seulement pour lire et écrire dans le fichier
 */

 //je recupere les données du fichier json via le script php et j'affiche la liste
fetch(phpScriptUrl)
.then(response => response.json())
.then(json => {
    scores = json;
    //je peut iterer sur l'objet pour creer la liste
    for (const key in json) {
        if (json.hasOwnProperty(key)) {
            const player = json[key];

            let li = document.createElement('li');
            li.id = key;
            li.points = player.points;

            li.textContent = key + ' : ' + player.points;
            ul.appendChild(li);
        }
    }

    ul.classList.remove('hidden');
    formContainer.classList.remove('hidden');    
})
// .then(response => {
//     //je peut recuperer les entrées de la liste
//     let liDenise = ul.querySelector('#denise');
//     console.log(liDenise, liDenise.points);
// })


//une fois ajoutées dans le dom je peux manipuler les données récupérées par fetch
// console.log(ul);



