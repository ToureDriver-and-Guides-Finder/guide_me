<?php
error_reporting(E_ALL);
ini_set('display_errors', 0); // Set this to 0 in production
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials: true');

use auth\AuthUser;

require_once "authuser.php";
include '../classes/DBConnector.php';

class DriverAuth extends AuthUser
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

        // Validate input
        if (empty($password) || empty($email)) {
            echo "Fill all fields";
            return;
        }

        // Use prepared statements to prevent SQL injection
        $query = "SELECT password FROM driver WHERE email=?";
        $statement = $con->prepare($query);
        $statement->execute([$email]);
        $res = $statement->fetch();

        if ($res && password_verify($password, $res["password"])) {
            $this->email = $email;
            $auth = new AuthUser();
            echo "/";
        } else {
            echo "Incorrect Password or Email. Try Again!";
        }
    }

    public function register($name, $email, $contact, $password, $vehi, $mark, $model, $registration)
    {
        $DB = new DBConnector("guideme");
        $con = $DB->getConnection();

        // Validate input
        if (empty($name) || empty($email) || empty($password)) {
            echo "Fill all fields";
            return;
        }

        // Hash the password before storing it
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

        $query = "INSERT INTO driver (driver_name, contact_number, email, password) VALUES (?, ?, ?, ?);
        INSERT INTO vehicle (driver_id, vehicle_type, vehical_mark, vehical_model,vehi_registration_number) VALUES (?, ?, ?, ?,?)";
        $statement = $con->prepare($query);

        try {
            $statement->execute([$name, $contact, $email, $hashedPassword, $email, $vehi, $mark, $model, $registration]);
            $this->first_name = $name;
            $this->contact_number = $contact;
            $this->email = $email;
            $auth = new AuthUser();
            return "/";
        } catch (Exception $e) {
            // Log the error instead of displaying it
            error_log($e->getMessage());
            echo $e->getMessage();
        }
    }

    public function giveRating()
    {
        // Implement rating functionality here
    }

    public function updateDetails()
    {
        // Implement update details functionality here
    }
}
