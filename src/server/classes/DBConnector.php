<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Methods: *");
// header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials:true');
class DBConnector
{
    private $server = "localhost";
    private $username = "root";
    private $password = "";
    private $dbname="";
    
    function __construct($dbname){
        $this->dbname=$dbname;

    }

    public function  getConnection()
    {
        try {
            $dbconn = new PDO("mysql:host=$this->server;dbname=$this->dbname;charset=UTF8", $this->username, $this->password);
            $dbconn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            // echo "Data from DBConnection"; 
            
        } catch (PDOException $ex) {
            print_r(PDO::getAvailableDrivers());
            echo $ex->getMessage();
        }
        return $dbconn;
    }
}
