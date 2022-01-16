<?php
$file_path = '../../scores/scores.json';

$content = file_get_contents($file_path);
$decoded_content = json_decode($content);
$encoded_content = json_encode($decoded_content);

echo $content;