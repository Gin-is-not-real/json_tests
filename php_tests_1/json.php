<?php
    $file_path = 'php_tests_1/data.json';

    echo "<h2>json.php</h2>";
    // get the full content of a file : {String}
    $str_content = file_get_contents($file_path);
    echo '<h4>Resultat de file_get_contents($file_path)</h4>';
    echo '<div>' . var_dump($str_content) . '</div>';

    // convert a json string on Object or Array
    $decoded_content = json_decode($str_content);
    echo '<h4>Resultat de json_decode(\'$str_content\')</h4>';
    echo '<div>' . var_dump($decoded_content) . '</div>';

    // iterate on array with for loop
    echo '<h4>Resultat de boucle for sur $decoded_content (array)</h4>';
    for($i = 0; $i < count($decoded_content); $i++) {
        echo '<div>' . var_dump($decoded_content[$i]) . '</div>';
    }

    // iterate on array with foreach loop
    echo '<h4>Resultat de boucle foreach sur $decoded_content (array)</h4>';
    foreach ($decoded_content as $key => $value) {
        echo '<div>' . var_dump($key, $value) . '</div>';
    }

    // iterate on object(stdClass) with for loop
    echo '<h4>Resultat de boucle foreach sur $decoded_content (object(stdClass))</h4>';
    foreach ($decoded_content[0] as $key => $value) {
        echo '<div>' . var_dump($key, $value) . '</div>';
    }

    // create an array with all names on files
    $keys = array();
    for($i = 0; $i < count($decoded_content); $i++) {
        array_push($keys, $decoded_content[$i]->name);
    }
    echo '<h4>Création d\'un tableau de clés à a partir du tableau de données</h4>';
    echo '<div>' . var_dump($keys) . '</div>';

    // search a good needle in keys array
    $needle = 'test';
    $needle_exist = array_search($needle, $keys);
    echo '<h4>Rechercher "' . $needle . '" dans le tableau de clés avec array_search($needle, $keys))</h4>';
    echo '<div>' .  var_dump($needle_exist) . '</div>';

    // search a bad needle in keys array
    $needle = 'bad test';
    $needle_exist = array_search($needle, $keys);
    echo '<h4>Rechercher "' . $needle . '" dans le tableau de clés avec array_search($needle, $keys))</h4>';
    echo '<div>' .  var_dump($needle_exist) . '</div>';

    // create an object anonyme
    $new_obj = new class{};
    $new_obj->name = 'add with php';
    $new_obj->points = 30;
    echo '<h4>Creer un objet</h4>';
    echo '<div>' .  var_dump($new_obj) . '</div>';

    //search the object name on keys array and push if isn't
    $needle = $new_obj->name;
    echo '<h4>Chercher le nom de l\'objet dans le tableau de clés dans le tableau</h4>';
    echo '<div>' .  var_dump(array_search($needle, $keys)) . '</div>';

    if(!array_search($needle, $keys)) {
        // add the object on array if isn't
        echo '<h4>Ajouter l\'objet au tableau decoded_content si il n\'y est pas deja</h4>';
        array_push($decoded_content, $new_obj);
    }
    else {
        echo '<h4>"' . $needle . '" est déja présent dans le tableau</h4>';
    }
    echo '<div>' .  var_dump($decoded_content) . '</div>';

    // encode le tableau en JSON
    echo '<h4>Re-encode le tableau en JSON avec json_encode($decoded_content)</h4>';
    $json = json_encode($decoded_content);
    echo '<div>' .  var_dump($json) . '</div>';

    // écrit dans le fichier
    file_put_contents($file_path, $json);
    $new_content = file_get_contents($file_path);
    echo '<h4>Ecrit dans le fichier avec file_put_contents($file_path, $json)</h4>';
    echo '<div>' .  var_dump($new_content) . '</div>';

