<?php
$error = false;

$name = input($_POST['name']);
$path = input($_POST['pictures']);
$description = input($_POST['description']);

$street = input($_POST['street']);
$zip = input($_POST['zip']);
$city = input($_POST['city']);

$web = input($_POST['web']);
$menu = input($_POST['menu']);
$email = input($_POST['email']);
$phone = input($_POST['phone']);

$restaurant = (isset($_POST['restaurant']) ? "restaurant" : "");
$cafe = (isset($_POST['cafe']) ? "cafe" : "");
$bar = (isset($_POST['bar']) ? "bar" : "");

$r = (isset($_POST['restaurant']) ? 1 : 0);
$c = (isset($_POST['cafe']) ? 1 : 0);
$b = (isset($_POST['bar']) ? 1 : 0);

$monAMstart = input($_POST['mon1vm']);
$monAMend = input($_POST['mon2vm']);
$monPMstart = input($_POST['mon1nm']);
$monPMend = input($_POST['mon2nm']);

$tueAMstart = input($_POST['tue1vm']);
$tueAMend = input($_POST['tue2vm']);
$tuePMstart = input($_POST['tue1nm']);
$tuePMend = input($_POST['tue2nm']);

$wedAMstart = input($_POST['wed1vm']);
$wedAMend = input($_POST['wed2vm']);
$wedPMstart = input($_POST['wed1nm']);
$wedPMend = input($_POST['wed2nm']);

$thuAMstart = input($_POST['thu1vm']);
$thuAMend = input($_POST['thu2vm']);
$thuPMstart = input($_POST['thu1nm']);
$thuPMend = input($_POST['thu2nm']);

$friAMstart = input($_POST['fri1vm']);
$friAMend = input($_POST['fri2vm']);
$friPMstart = input($_POST['fri1nm']);
$friPMend = input($_POST['fri2nm']);

$satAMstart = input($_POST['sat1vm']);
$satAMend = input($_POST['sat2vm']);
$satPMstart = input($_POST['sat1nm']);
$satPMend = input($_POST['sat2nm']);

$sunAMstart = input($_POST['sun1vm']);
$sunAMend = input($_POST['sun2vm']);
$sunPMstart = input($_POST['sun1nm']);
$sunPMend = input($_POST['sun2nm']);

$wifi = (isset($_POST['wifi']) ? "wifi" : "");
$nonSmoker = (isset($_POST['nonSmoker']) ? "nonSmoker" : "");
$smoker = (isset($_POST['smoker']) ? "smoker" : "");
$veggie = (isset($_POST['veggie']) ? "veggie" : "");
$vegan = (isset($_POST['vegan']) ? "vegan" : "");
$breakfast = (isset($_POST['breakfast']) ? "breakfast" : "");
$glutenFree = (isset($_POST['glutenFree']) ? "glutenFree" : "");
$delivery = (isset($_POST['delivery']) ? "delivery" : "");
$lunch = (isset($_POST['lunch']) ? "lunch" : "");
$garden = (isset($_POST['garden']) ? "garden" : "");

$info = $restaurant . " " . $cafe . " " . $bar . " " . $wifi . " " . $nonSmoker . " " . $smoker  . " " . $veggie . " " . $vegan . " " . $breakfast . " " . $glutenFree . " " . $delivery . " " . $lunch . " " . $garden;
$info = input(preg_replace('/\s+/', ' ',$info));

$date = time();
//date('Y-m-d H:i:s', $date)

if (!$error) {
  $data = array(
    array(
    "name" => $name,
    "description" => $description,
    "path" => $path,
    "street" => $street,
    "zip" => $zip,
    "city" => $city,
    "hours" => array(
      "monAMstart" =>  $monAMstart,
      "monAMend" =>  $monAMend,
      "monPMstart" =>  $monPMstart,
      "monPMend" =>  $monPMend,

      "tueAMstart" =>  $tueAMstart,
      "tueAMend" =>  $tueAMend,
      "tuePMstart" =>  $tuePMstart,
      "tuePMend" =>  $tuePMend,

      "wedAMstart" =>  $wedAMstart,
      "wedAMend" =>  $wedAMend,
      "wedPMstart" =>  $wedPMstart,
      "wedPMend" =>  $wedPMend,

      "thuAMstart" =>  $thuAMstart,
      "thuAMend" =>  $thuAMend,
      "thuPMstart" =>  $thuPMstart,
      "thuPMend" =>  $thuPMend,

      "friAMstart" =>  $friAMstart,
      "friAMend" =>  $friAMend,
      "friPMstart" =>  $friPMstart,
      "friPMend" =>  $friPMend,

      "satAMstart" =>  $satAMstart,
      "satAMend" =>  $satAMend,
      "satPMstart" =>  $satPMstart,
      "satPMend" =>  $satPMend,

      "sunAMstart" =>  $sunAMstart,
      "sunAMend" =>  $sunAMend,
      "sunPMstart" =>  $sunPMstart,
      "sunPMend" =>  $sunPMend
    ),
    "web" => $web,
    "menu" => $menu,
    "email" => $email,
    "info" => $info,
    "registered" => $date,
    "objectID" => $counter
  ));

  $fp = fopen('../algolia/restaurant.json', 'w');
  fwrite($fp, json_encode($data));
  fclose($fp);
}

function input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}
