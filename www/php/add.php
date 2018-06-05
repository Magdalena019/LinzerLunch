<?php
$error = false;

$name = input($_POST['name']);
$path = input($_POST['pictures']);

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
    "path" => $path,
    "street" => $street,
    "zip" => $zip,
    "city" => $city,
    "web" => $web,
    "menu" => $menu,
    "email" => $email,
    "info" => $info,
    "registered" => $date
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
