<?php

namespace auth;

error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials:true');


class AuthUser
{
    private $auth_state;
    private $usertype;
    private $user_id;

    public function getUserID()
    {
        echo $this->user_id;
    }

    function __construct()
    {
        if (!empty($_COOKIE["user_id"])) {
            $user = $_COOKIE["user_id"];
            $this->user_id = $user;
        }
    }

    // public function getAuthState()
    // {
    //     $user = $_COOKIE["user_id"];
    //     if ($user !== "") {
    //         $auth_state = true;
    //         $user_id = $user;
    //     }
    // }
}
