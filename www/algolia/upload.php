<?php
require 'init.php';
require '../php/add.php';
require 'counterValues.php';

//fetch data and send it to algolia
$restaurant = json_decode(file_get_contents('restaurant.json'), true);
$index->addObjects($restaurant);
