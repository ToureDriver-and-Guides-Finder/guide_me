<?php
include_once "../classes/DBConnector.php";
class Offer
{
    private int $offerId;
    private int $offerPrice;

    public function sendOffer($price, $driverid, $tourid)
    {

        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();


        $query = "Insert into offer (price,driver_id,tour_id) values(?,?,?);";

        $statement = $con->prepare($query);

        $res = $statement->execute([$price, $driverid, $tourid]);

        if ($res) {
            return 1;
        } else {
            return 0;
        }
    }
    public function updateOffer($price, $driverid, $tourid)
    {

        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();


        $query = "UPDATE offer SET price=? where driver_id=? and tour_id=?;";

        $statement = $con->prepare($query);

        $res = $statement->execute([$price, $driverid, $tourid]);

        if ($res) {
            return 1;
        } else {
            return 0;
        }
    }

    public function getOffer($driverid, $tourid)
    {

        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();


        $query = "SELECT * from offer where driver_id=? and tour_id=?;";

        $statement = $con->prepare($query);

        $res = $statement->execute([$driverid, $tourid]);

        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        // echo $result;
        $arr = json_encode($result);
        print_r($arr);
    }

    public function getUserOffer($userid)
    {

        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();


        $query = "SELECT o.offer_id, o.price, o.driver_id,t.tour_id, t.tour_name, t.displayImage FROM offer AS o JOIN tour AS t ON o.tour_id = t.tour_id WHERE t.email = ?;";

        $statement = $con->prepare($query);

        $res = $statement->execute([$userid]);

        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        // echo $result;
        $arr = json_encode($result);
        print_r($arr);
    }
}
