<?php

namespace auth;
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Credentials:true');


class AuthUser{
    private static $auth_state;
    private static $usertype;


    public function getAuthState(){
        
    }

}


?>