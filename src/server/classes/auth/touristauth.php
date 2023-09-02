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


    public function getFirstName()
    {
        return $this->first_name;
    }
    public function getLastName()
    {
        return $this->last_name;
    }
    public function getEmail()
    {
        return $this->email;
    }
    public function getGender()
    {
        return $this->gender;
    }
    public function getContactNumber()
    {
        return $this->contact_number;
    }
    public function getLanguages()
    {
        return $this->languages;
    }



    public function login($email, $password)
    {
        $DB = new DBConnector("guideme");
        $con = $DB->getConnection();

        $query = "SELECT password from tourist where email=?";

        $statement = $con->prepare($query);

        if (!empty($password) && !empty($email)) {
            try {
                $result = $statement->execute([$email]);
                $res = $statement->fetch();
                if ($res) {

                    if ($res["password"] === $password) {
                        $this->email = $email;
                        $auth = new AuthUser();
                        echo "/";
                    } else {
                        echo "Incorrect Passowrd or Email.Try Again!";
                    }
                } else {
                    echo "User Not Found! Please Register to continue.";
                }
            } catch (Error) {
                echo $statement->errorInfo();
            }
        } else {
            echo "Fill all feilds";
        }
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
                $this->first_name = $name;
                $this->contact_number = $contact;
                $this->email = $email;
                $auth = new AuthUser();
                echo "/";
            } catch (Error) {
                echo $statement->errorInfo();
            }
        } else {
            echo "fill all feilds";
        }
    }
    public function giveRating()
    {
    }
    public function updateDetails()
    {
    }
}
