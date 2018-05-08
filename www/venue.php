<?php

require 'vendor/autoload.php';

//Twig Init
$loader = new Twig_Loader_Filesystem('templates');
$twig = new Twig_Environment($loader);

echo $twig->render('venue.twig');
