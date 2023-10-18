<?php

use auth\AuthUser;

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials:true');

// include '../classes/DBConnector.php';
include '../classes/auth/driverAuth.php';


// $DB = new DBConnector("test1");
// $con = $DB->getConnection();




//get parameters send by api.
$url = $_SERVER["REQUEST_URI"];
$url_components = parse_url($url);
parse_str($url_components['query'], $params);

$request_body = file_get_contents('php://input');
$data = json_decode($request_body, true);
$tauth = new DriverAuth();
switch ($data["params"]["function"]) {
    case "register":
        $name = $data["params"]["data"]["name"];
        $contact = $data["params"]["data"]["contact"];
        $email = $data["params"]["data"]["email"];
        $psw = $data["params"]["data"]["psw"];
        $vehi = $data["params"]["data"]["vehical"];
        $mark = $data["params"]["data"]["mark"];
        $model = $data["params"]["data"]["model"];
        $registration = $data["params"]["data"]["registration"];

        $tauth->register($name, $email, $contact, $psw,$vehi,$mark,$model, $registration);


    case "login":
        $email = $data["params"]["data"]["email"];
        $psw = $data["params"]["data"]["psw"];
        echo $tauth->login($email, $psw);
        $auth = new AuthUser();
        $auth->getUserID();
        break;
    default:
        echo "default";
}
