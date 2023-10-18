<?php

include_once "../classes/DBConnector.php";
// include_once "../classes/Tourist/Tourist.php";

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



    public function updateTour($fname, $email, $contact, $sdate, $fdate, $no_of_pass, $duration, $desdata, $tourid, $img)
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

        $query = "UPDATE tour set no_of_passengers=?,start_date=?,end_date=?,locations=?,tour_status=?,displayImage=?where tour_id=? ;";

        $statement = $con->prepare($query);

        $res = $statement->execute([$no_of_pass, $sdate, $fdate, $desdata, "Available", $img, $tourid]);

        echo $res;
    }

    public function createTour($tour_name, $email)
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

        $query = "Insert into tour (tour_name,email) values(?,?);";

        $statement = $con->prepare($query);

        $res = $statement->execute([$tour_name, $email]);

        // echo $t_id;
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

        // $query1 = "SELECT tourist_id from tourist where email=?;";
        // $statement1 = $con->prepare($query1);

        // $res = $statement1->execute([$email]);


        // $result = $statement1->fetch(PDO::FETCH_ASSOC);
        // $t_id = $result["tourist_id"];

        $query = "SELECT * from tour where email=?;";

        $statement = $con->prepare($query);

        $res = $statement->execute([$email]);


        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        // echo $result;
        $arr = json_encode($result);
        print_r($arr);
    }

    public function getActiveTour($email)
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

        $query = "SELECT * from tour where email=? and tour_status='Available';";

        $statement = $con->prepare($query);

        $res = $statement->execute([$email]);

        if ($statement->rowCount() != 0) {
            $result = $statement->fetch(PDO::FETCH_ASSOC);
            $locations = unserialize($result["locations"]);
            $result["locations"] = $locations;


            $arr = json_encode($result);
            print_r($arr);
        } else {
            echo "No data";
        }
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

        $query = "Insert into tourist_destination (destination_id,tour_id,email) values(?,?,?);";

        $statement = $con->prepare($query);

        $res = $statement->execute([$destinationid, $tourid, $userid]);

        echo $destinationid;
        // $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        // // echo $result;
        // $arr = json_encode($result);
        // print_r($arr);
    }

    public function getAvailableTours()
    {
        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();

        $query = "SELECT * from tour where tour_status='Available';";

        $statement = $con->prepare($query);

        $res = $statement->execute();

        if ($statement->rowCount() != 0) {

            $result = $statement->fetchAll(PDO::FETCH_ASSOC);
            $count = 0;
            foreach ($result as $item) {
                $locations = unserialize($item["locations"]);
                $result[$count]["locations"] = $locations;
                $count += 1;
            }



            $arr = json_encode($result);
            print_r($arr);
        } else {
            echo "No data";
        }
    }
}
