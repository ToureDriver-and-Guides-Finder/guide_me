<?php
include_once '../classes/DBConnector.php';
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

        $query = "SELECT * from destination LIMIT 10;";
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
}

// $des=new Destination();
// $des->getAllDestinations();