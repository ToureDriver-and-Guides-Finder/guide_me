<?php
include_once "../classes/DBConnector.php";
class Transaction
{

    private int $transaction_id;
    private int $tour_id;
    private String $from;
    private int $card_number;
    private int $csv;
    private  $card_ex_date;
    private $transaction_date;
    private String $receiver;
    private float $price;
    // private String $type;
    private String $to;
    private String $payment_method;
    private int $offer_id;
    private String $pickuplocation;

    function __construct($payment_method, $from, $to, $price, $res, $tour_id, $offerId, $pickuplocation)

    {
        $this->payment_method = $payment_method;
        $this->from = $from;
        $this->to = $to;
        $this->receiver = $res;
        $this->tour_id = $tour_id;
        $this->price = $price;
        $this->offer_id = $offerId;
        $this->pickuplocation = $pickuplocation;
    }


    public function doTransaction()
    {


        try {
            $dbcon = new DBConnector("guideme");
            $con = $dbcon->getConnection();
            $query = "Insert into transaction (payment_method,sender,payment_to,price,reciever_type,tour_id) values(?,?,?,?,?,?);";
            $statement = $con->prepare($query);
            $result = $statement->execute(
                [
                    $this->payment_method,
                    $this->from,
                    $this->to,
                    $this->price,
                    $this->receiver,
                    $this->tour_id,

                ]
            );
            if ($result) {

                $query1 = "Update tour set tour_status='Confirmed', pickup_location=? where tour_id=?;
                Update offer set offer_state='Confirmed' where offer_id=?;";
                $statement1 = $con->prepare($query1);
                $result1 = $statement1->execute(
                    [
                        $this->pickuplocation,
                        $this->tour_id,
                        $this->offer_id,
                    ]
                );
                return $result1;
            }
        } catch (PDOException $ex) {
            return $ex->getMessage();
        }
    }
}
