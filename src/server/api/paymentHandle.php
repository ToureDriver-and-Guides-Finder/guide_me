<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials:true');

try {
    // include_once '../classes/Destinations/Destination.php';
    include_once '../classes/Payment/Transaction.php';

    $url = $_SERVER["REQUEST_URI"];
    $url_components = parse_url($url);
    parse_str($url_components['query'], $params);

    $request_body = file_get_contents('php://input');
    $data = json_decode($request_body, true);

    // Check if the required data is set and not empty

    if (
        isset(
            $data["params"]['card_number'],
            $data["params"]['card_holders_name'],
            $data["params"]['ex_date'],
            $data["params"]['cvv']
        ) &&
        !empty($data["params"]['card_number']) && !empty($data["params"]['card_holders_name']) &&
        !empty($data["params"]['ex_date']) && !empty($data["params"]['cvv'])
    ) {
        if (
            isset($data["params"]['payment_method'], $data["params"]['from'], $data["params"]['to'], $data["params"]['price'], $data["params"]['res'], $data["params"]['tour_id']) &&
            !empty($data["params"]['payment_method']) && !empty($data["params"]['from']) && !empty($data["params"]['to']) &&
            !empty($data["params"]['price']) && !empty($data["params"]['res']) && !empty($data["params"]['tour_id'])
        ) {
            // Assuming you have these variables defined or fetched from somewhere
            $payment_method = $data["params"]['payment_method'];
            $from = $data["params"]['from'];
            $to = $data["params"]['to'];
            $price = $data["params"]['price'];
            $res = $data["params"]['res'];
            $tour_id = $data["params"]['tour_id'];
            $offer_id = $data["params"]['offer_id'];

            // Wrap the instantiation and method call in a try-catch block
            try {
                $transaction = new Transaction($payment_method, $from, $to, $price, $res, $tour_id, $offer_id);
                echo $transaction->doTransaction();
            } catch (Exception $e) {
                // Handle the exception, log it, or return an error response
                echo json_encode(['error' => $e->getMessage()]);
            }
        } else {
            echo json_encode(['error' => 'Required data is missing or empty.']);
        }
    } else {
        echo json_encode(['error' => 'Fill All Card Details to continue']);
    }
} catch (Exception $e) {
    // Handle the exception, log it, or return an error response
    echo json_encode(['error' => $e->getMessage()]);
}
