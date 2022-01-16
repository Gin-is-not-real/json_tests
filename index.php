<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JSON TESTS</title>
</head>
<body>
    <?php
        // require('php_tests_1/json.php');
        // require('scores/scores.php');
    ?>
    <hr>
    <div id="test">
        <ul id="list" class="hidden">
        </ul>

        <div id="form" class="hidden">
            <label for="name">name: </label><input type="text" id="name" name="name" required></input>
            <label for="score">score: </label><input type="number" id="score" name="score" required></input>
            <input id="submit" type="submit">
        </div>
    </div>



    <!-- <script type="text/javascript" src="js/fetch_php_script/scores.js"></script> -->
    <script type="text/javascript" src="js/fetch_json/fetch.js"></script>

    <style>
        .hidden {
            visibility: hidden;
        }
    </style>
</body>
</html>