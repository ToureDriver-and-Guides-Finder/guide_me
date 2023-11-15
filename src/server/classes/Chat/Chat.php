<?php
include_once "../classes/DBConnector.php";

class Chat
{
    private int $chatid;
    private int $msg;
    private int $sender;
    private int $recever;

    public function sendMsg($msg, $sender, $tour, $receiver)
    {
        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();


        $query = "Insert into chat (msg,sender,tour_id,recerver) values(?,?,?,?);";

        $statement = $con->prepare($query);

        $res = $statement->execute([$msg, $sender, $tour, $receiver]);

        if ($res) {
            return 1;
        } else {
            return 0;
        }
    }
    public function getMsg($sender, $tour, $recever)
    {
        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();


        $query = "SELECT * from chat where tour_id=? and (sender=? or recerver=?) ORDER BY created_on ASC;";

        $statement = $con->prepare($query);

        $res = $statement->execute([$tour, $sender, $sender]);


        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        // echo $result;
        $arr = json_encode($result);
        print_r($arr);
    }
    public function getAllMsg($person)
    {
        $dbcon = new DBConnector("guideme");
        $con = $dbcon->getConnection();


        $query = "SELECT c.chat_id, c.sender, c.recerver, c.msg, c.created_on, c.tour_id
FROM chat AS c
INNER JOIN (
    SELECT tour_id, MAX(created_on) AS max_created_on
    FROM chat
    WHERE sender = ? OR recerver = ?
    GROUP BY tour_id
) AS subquery
ON c.tour_id = subquery.tour_id AND c.created_on = subquery.max_created_on ORDER BY c.created_on DESC;";


        $statement = $con->prepare($query);

        $res = $statement->execute([$person, $person]);


        $result = $statement->fetchAll(PDO::FETCH_ASSOC);
        // echo $result;
        $arr = json_encode($result);
        print_r($arr);
    }
}
