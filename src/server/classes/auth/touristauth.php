<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials:true');

use auth\AuthUser;

require_once "authuser.php";
include '../classes/DBConnector.php';







class Tourist extends AuthUser
{
    private $first_name;
    private $last_name;
    private $email;
    private $password;
    private $gender;
    private $contact_number;
    private $languages = array();





    public function login()
    {
        return "Value is: " . $_COOKIE['id'];;
    }



    public function register($name, $email, $contact, $password)
    {

        $DB = new DBConnector("guideme");
        $con = $DB->getConnection();

        $query = "insert into tourist (tourist_name,contact_number,email,password) values(?,?,?,?)";

        $statement = $con->prepare($query);

        if (!empty($name) && !empty($email)) {
            try {
                $statement->execute([$name, $contact, $email, $password]);
                
            } catch (Error) {
                echo $statement->errorInfo();
            }
        }
    }
    public function giveRating()
    {
    }
    public function updateDetails()
    {
    }
}
