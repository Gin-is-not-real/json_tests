let url = 'js/fetch_json/fetch.php';

let divTest = document.querySelector('#test');
let ul = document.querySelector('#list');
let formContainer = document.querySelector('#form');
let inputName = formContainer.querySelector('#name');
let inputScore = formContainer.querySelector('#score');
let submit = formContainer.querySelector('#submit');
let message = '';

//////////////////////////////////////
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

        //save json ?
    }



})
/**
 * Fetch et manipulation des données du fichier JSON
 * On appelle le php seulement pour lire et écrire dans le fichier
 */

 //je recupere les données du fichier json via le script php et j'affiche la liste
fetch(url)
.then(response => response.json())
.then(json => {
    console.log(typeof json, json);

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
.then(response => {
    //je peut recuperer les entrées de la liste
    let liDenise = ul.querySelector('#denise');
    console.log(liDenise, liDenise.points);
})


//une fois ajoutées dans le dom je peux manipuler les données récupérées par fetch
console.log(ul);



