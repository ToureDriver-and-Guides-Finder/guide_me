<?php
include_once '../classes/DBConnector.php';
include_once '../classes/Tourist/Tourist.php';
// include '../DBConnector.php';
class Destination
{
    private $name;
    private $category;
    private $description;
    private $image;
    private $city;



    public function getName()
    {
        echo $this->name;
    }
    public function getCategory()
    {
        echo $this->category;
    }
    public function getDescription()
    {
        echo $this->description;
    }
    public function getImage()
    {
        echo $this->image;
    }
    public function getCity()
    {
        echo $this->city;
    }

    public function getAllDestinations()
    {

        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();

        $query = "SELECT * from destination;";
        $statement = $con->prepare($query);

        $res = $statement->execute();


        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        // echo $result;
        $arr = json_encode($result);
        print_r($arr);
    }
    public function getAllDestinationsByCategory($category)
    {

        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();

        $query = "SELECT * from destination where category= ? ;";
        $statement = $con->prepare($query);

        $res = $statement->execute([$category]);


        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        // echo $result;
        $arr = json_encode($result);
        print_r($arr);
    }
    public function addToFav($category)
    {

        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();

        $query = "SELECT * from destination where category= ? ;";
        $statement = $con->prepare($query);

        $res = $statement->execute([$category]);


        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        // echo $result;
        $arr = json_encode($result);
        print_r($arr);
    }
    public function getFavDes($userid)
    {

        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();

        try {
            $dbcon = new DBConnector("guideme");
            $con = $dbcon->getConnection();

            // $query = "SELECT tourist_id from tourist where email=?;";
            // $statement = $con->prepare($query);

            // $res = $statement->execute([$userid]);


            // $result = $statement->fetch(PDO::FETCH_ASSOC);

            $query = "SELECT * from tourist_destination where email= ? ;";
            $statement = $con->prepare($query);

            $res = $statement->execute([$userid]);


            $result = $statement->fetchAll(PDO::FETCH_ASSOC);

            if ($statement->rowCount() != 0) {
                $arr = json_encode($result);
                // $list = array();
                $ids = "";
                $query = "SELECT * from destination where destination_id in (";
                foreach ($result as $val) {
                    // array_push($list, $val["destination_id"]);
                    $ids .= strval($val["destination_id"]) . ",";
                    $query .= "?,";
                }
                $trimed = rtrim($query, ",");
                $newqueary = $trimed . ");";

                $statement = $con->prepare($newqueary);
                $count = 1;
                foreach ($result as $val) {
                    $statement->bindParam($count, $val["destination_id"]);
                    $count += 1;
                }

                $res = $statement->execute();

                $result = $statement->fetchAll(PDO::FETCH_ASSOC);
                // echo $newqueary;
                $arr = json_encode($result);

                print_r($arr);
            } else {
                echo "No Date Found";
            }
            // echo $result;

            // print_r($list);
        } catch (ERROR $e) {
            echo $e->getMessage();
        }
    }

    public function getDestinationByID($id)
    {
        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();

        $query = "SELECT * from destination where destination_id = ? ;";
        $statement = $con->prepare($query);

        $res = $statement->execute([$id]);


        $result = $statement->fetch(PDO::FETCH_ASSOC);

        $arr = json_encode($result);
        print_r($arr);
    }
}



// $des=new Destination();
// $des->getAllDestinations();