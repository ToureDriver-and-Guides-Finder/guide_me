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

// $tourid = $_POST["options"];

$tour = new Tour();

// echo $data["params"]["des_id"];
// echo $data["params"]["data"];
$name = $data["params"]["data"]["fname"];
$contact = $data["params"]["data"]["contactNo"];
$email = $data["params"]["data"]["email"];
$sdate = $data["params"]["data"]["startdate"];
$fdate = $data["params"]["data"]["finishdate"];
$no_of_passengers = $data["params"]["data"]["no_of_passengers"];
$duration = $data["params"]["data"]["duration"];
$desdata = serialize($data["params"]["destinations"]);
$tourid = $data["params"]["tour_id"];
$img = $data["params"]["data"]["displayImage"];
$vehical = $data["params"]["data"]["vehical"];
$ac = $data["params"]["data"]["ac"];







echo $tour->updateTour($name, $email, $contact, $sdate, $fdate, $no_of_passengers, $duration, $desdata, $tourid, $img, $vehical, $ac);
