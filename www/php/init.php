<?php
// composer autoload
require __DIR__ . '/vendor/autoload.php';

//muss noch umgeändert werden auf linzerlunch@gmail.com login ... konnte mich nicht einloggen

//Application ID & Admin API key
$client = new \AlgoliaSearch\Client('RVF0T6C2EI', '8f14ba6bedb4e7c47f03f83905317f8a');

$index = $client->initIndex('restaurants');
$batch = json_decode(file_get_contents('restaurants.json'), true);
$index->addObjects($batch);

//// TODO: Öffnungszeiten einbinden




/*Notes:

- siehe agolia docs -
implement infinite scroll
sorting results - add sort ranking
filter results around a location - app!
& display results on a map - geo search
offline mode - app!

später interessant - im dashboard user verhalten beobachten
*/
