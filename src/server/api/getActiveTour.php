<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials:true');
// include_once '../classes/Destinations/Destination.php';
include_once '../classes/Tour/Tour.php';

$url = $_SERVER["REQUEST_URI"];
$url_components = parse_url($url);
parse_str($url_components['query'], $params);

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

$tour = new Tour();


$tour_data = $tour->getActiveTour($data["params"]["userId"]);
// $jsonlocations = json_encode(unserialize($tour_data["locations"]));
echo $tour_data;
// $tour_data["locations"] = $jsonlocations;

// echo $tour_data;
