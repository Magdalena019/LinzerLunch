<?php
require_once("../includes/defines.inc.php");
require __DIR__ . '../../vendor/autoload.php';

$client = new \AlgoliaSearch\Client(ID, KEY);
$index = $client->initIndex('restaurants');


/*
//infinite scroll
$index->setSettings([
  'paginationLimitedTo' => 0 // Disable the limit
]);
*/
