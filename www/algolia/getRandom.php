<?php
require 'init.php';

$search = $_POST["search"];

$index->setSettings(array(
  "searchableAttributes" => ["info"]
));

$hits = [];
foreach ($index->browse($search) as $hit) {
    $hits[] = $hit;
}

$random = $hits[array_rand($hits)];

echo json_encode($random);
?>
