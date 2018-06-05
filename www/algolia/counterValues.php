<?php

$counterRestaurant = 0;
foreach ($index->browse('restaurant') as $hit) {
    $counterRestaurant++;
}
$counterRestaurant += $r;

$counterCafe = 0;
foreach ($index->browse('cafe') as $hit) {
    $counterCafe++;
}
$counterCafe += $c;

$counterBar = 0;
foreach ($index->browse('bar') as $hit) {
    $counterBar++;
}
$counterBar += $b;

//$counterRestaurant = count('restaurant') + $r;
//$counterCafe = count('cafe') + $c;
//$counterBar = count('bar') + $b;

$data = array(
  array(
  "restaurant" => $counterRestaurant,
  "cafe" => $counterCafe,
  "bar" => $counterBar
));

$fp = fopen('counterValues.json', 'w');
fwrite($fp, json_encode($data));
fclose($fp);
