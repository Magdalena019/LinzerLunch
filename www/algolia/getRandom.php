<?php
require 'init.php';

$hits = [];
foreach ($index->browse('') as $hit) {
    $hits[] = $hit;
}

$random = $hits[array_rand($hits)];
