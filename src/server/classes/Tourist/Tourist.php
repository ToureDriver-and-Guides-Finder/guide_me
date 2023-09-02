<?php
include_once "../classes/DBConnector.php";

class Tourist
{
    private $tourist_id;
    private $tourist_name;
    private $tourist_gender;
    private $contact_number;
    private $email;
    private $country;

    public function getTouristId($email)
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
}
