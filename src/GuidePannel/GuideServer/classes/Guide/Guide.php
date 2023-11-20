<?php
include_once "../classes/DBConnector.php";

class Guide
{
    private $driver_id;
    private $driver_name;
    private $driver_gender;
    private $driver_number;
    private $email;
    private $country;

    public function getGuideId($email)
    {
        try {
            $dbcon = new DBConnector("guideme");
            $con = $dbcon->getConnection();

            $query = "SELECT tourist_id from tourist where email=?;";
            $statement = $con->prepare($query);

            $res = $statement->execute([$email]);


            $result = $statement->fetch(PDO::FETCH_ASSOC);
            echo $result["tourist_id"];
        } catch (ERROR $e) {
            echo $e->getMessage();
        }
    }
    public function getGuideData($email)
    {
        try {
            $dbcon = new DBConnector("guideme");
            $con = $dbcon->getConnection();

            $query = "SELECT * from guide where guide_id=?;";
            $statement = $con->prepare($query);

            $res = $statement->execute([$email]);


            $result = $statement->fetch(PDO::FETCH_ASSOC);
            $arr = json_encode($result);
            print_r($arr);
        } catch (ERROR $e) {
            echo $e->getMessage();
        }
    }
}
