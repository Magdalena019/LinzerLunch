<?php
require 'init.php';

$hits = [];
foreach ($index->browse('') as $hit) {
    $hits[] = $hit;
}

$random = $hits[array_rand($hits)];

echo json_encode($random);
?>
