<?php
require 'init.php';

$hits = [];
foreach ($index->browse('') as $hit) {
    $hits[] = $hit;
}

$random = $hits[0];

$r = [
  "name" => $random["name"];
]

echo json_encode($r);
?>
