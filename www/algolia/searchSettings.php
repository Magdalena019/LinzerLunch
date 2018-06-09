<?php
require 'init.php';

//infinite scroll
$index->setSettings([
  'paginationLimitedTo' => 0
]);

$index->setSettings(array(
  "searchableAttributes" => [
    "info"
  ]
));

$search = $_POST["search"];

$counter = 0;
foreach ($index->browse($search) as $hit) {
    $counter++;
}

echo $counter;

?>
