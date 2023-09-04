<?php

include_once "../classes/DBConnector.php";
include_once "../classes/Tourist/Tourist.php";

use Amp\ReactAdapter\ReactAdapter;

class Tour
{
    private $tour_id;
    private $tour_name;
    private $no_of_passengers;
    private $start_date;
    private $end_date;
    private $tour_status;
    private $tourist_id;
    private $driver_id;



    public function updateTour($fname, $email, $contact, $sdate, $fdate, $no_of_pass, $duration)
    {
        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();
        // $tourist = new Tourist();

        // $t_id = $tourist->getTouristId("sasithmj@gmail.com");

        // $query1 = "SELECT tourist_id from tourist where email=?;";
        // $statement1 = $con->prepare($query1);

        // $res = $statement1->execute([$email]);


        // $result = $statement1->fetch(PDO::FETCH_ASSOC);
        // $t_id = $result["tourist_id"];

        $query = "Insert into tour (no_of_passengers,start_date,end_date) values(?,?,?);";

        $statement = $con->prepare($query);

        $res = $statement->execute([$no_of_pass, $sdate, $fdate]);

        echo $res;
    }

    public function createTour($tour_name, $email)
    {
        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();
        // $tourist = new Tourist();

        // $t_id = $tourist->getTouristId("sasithmj@gmail.com");

        $query1 = "SELECT tourist_id from tourist where email=?;";
        $statement1 = $con->prepare($query1);

        $res = $statement1->execute([$email]);


        $result = $statement1->fetch(PDO::FETCH_ASSOC);
        $t_id = $result["tourist_id"];

        $query = "Insert into tour (tour_name,tourist_id) values(?,?);";

        $statement = $con->prepare($query);

        $res = $statement->execute([$tour_name, $t_id]);

        echo $t_id;
        // $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        // // echo $result;
        // $arr = json_encode($result);
        // print_r($arr);

    }
    public function getUserTour($email)
    {
        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();
        // $tourist = new Tourist();

        // $t_id = $tourist->getTouristId("sasithmj@gmail.com");

        $query1 = "SELECT tourist_id from tourist where email=?;";
        $statement1 = $con->prepare($query1);

        $res = $statement1->execute([$email]);


        $result = $statement1->fetch(PDO::FETCH_ASSOC);
        $t_id = $result["tourist_id"];

        $query = "SELECT * from tour where tourist_id=?;";

        $statement = $con->prepare($query);

        $res = $statement->execute([$t_id]);


        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        // echo $result;
        $arr = json_encode($result);
        print_r($arr);
    }

    public function addToFav($tourid, $destinationid, $userid)
    {
        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();
        // $tourist = new Tourist();

        // $t_id = $tourist->getTouristId("sasithmj@gmail.com");

        $query1 = "SELECT tourist_id from tourist where email=?;";
        $statement1 = $con->prepare($query1);

        $res = $statement1->execute([$userid]);


        $result = $statement1->fetch(PDO::FETCH_ASSOC);
        $t_id = $result["tourist_id"];

        $query = "Insert into tourist_destination (tourist_id,destination_id,tour_id) values(?,?,?);";

        $statement = $con->prepare($query);

        $res = $statement->execute([$t_id, $destinationid, $tourid]);

        echo $destinationid;
        // $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        // // echo $result;
        // $arr = json_encode($result);
        // print_r($arr);
    }
}
