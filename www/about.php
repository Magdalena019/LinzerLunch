<?php
/**
 * Created by PhpStorm.
 * User: Natascha
 * Date: 07.04.2018
 * Time: 11:34
 */

require 'vendor/autoload.php';

//Twig Init
$loader = new Twig_Loader_Filesystem('templates');
$twig = new Twig_Environment($loader);

echo $twig->render('about.twig');
