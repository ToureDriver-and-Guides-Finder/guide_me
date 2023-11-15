<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials:true');
// include_once '../classes/Destinations/Destination.php';
include_once '../classes/Chat/Chat.php';

$url = $_SERVER["REQUEST_URI"];
$url_components = parse_url($url);
parse_str($url_components['query'], $params);

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);

// $tourid = $_POST["options"];

$msg = new Chat();

// echo $data["params"]["des_id"];
// echo $data["params"]["data"];
$msg = $data["params"]["data"]["msg"];
$sender = $data["params"]["data"]["sender"];
$recever = $data["params"]["data"]["receiver"];
$tourid = $data["params"]["data"]["tour_id"];








echo $msg->sendMsg($msg, $sender, $tour,$recever);
