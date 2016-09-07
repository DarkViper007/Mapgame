<?php
	if(isset($_POST)){
		$playerdata = $_POST['coredata'];
		$playerluck = $_POST['coreluck'];
	}


if($playerluck >= 0){
$dbstate = "good_events";
} else {
$dbstate = "bad_events";
}
	
$user = 'root';
$password = 'QQqq2222';

$query_bd = new PDO('mysql:host=localhost;dbname=testmap;charset=utf8', $user, $password);

$rand_event = $query_bd->query('SELECT * FROM '.$dbstate.' ORDER BY RAND() LIMIT 1');

$eventanswer = "";
foreach ($rand_event  as $key => $value) {
	$eventanswer .= $value['event_text']." | ".$value['event_art']." | ".$value['gold_data']." | ".$value['spirit_lvl']." | ".$playerdata; 
}
	 echo $eventanswer;
