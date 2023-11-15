<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials:true');
// include_once '../classes/Destinations/Destination.php';
include_once '../../../server/classes/Offer/Offer.php';

$url = $_SERVER["REQUEST_URI"];
$url_components = parse_url($url);
parse_str($url_components['query'], $params);

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// $tourid = $_POST["options"];

$offer = new Offer();

// echo $data["params"]["des_id"];
// echo $data["params"]["data"];

$price = $data["params"]["price"];
$driverid = $data["params"]["driver_id"];

$tourid = $data["params"]["tour_id"];
$function = $data["params"]["func"];

if (!empty($tourid)) {
    if ($function == "new") {
        echo $offer->sendOffer($price, $driverid, $tourid);
    } else if ($function == "update") {
        echo $offer->updateOffer($price, $driverid, $tourid);
    }
}
