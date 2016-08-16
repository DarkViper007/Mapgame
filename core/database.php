<?php
	if(isset($_POST)){
		$playerdata = $_POST['coredata'];
	}
	
$user = 'root';
$password = 'QQqq2222';

$query_bd = new PDO('mysql:host=localhost;dbname=testmap;charset=utf8', $user, $password);

$rand_event = $query_bd->query('SELECT * FROM `good_events` ORDER BY RAND() LIMIT 1');

$eventanswer = "";
foreach ($rand_event  as $key => $value) {
	$eventanswer .= $value['event_text']." | ".$value['event_art']." | ".$value['gold_data']." | ".$value['spirit_lvl']." | ".$playerdata; 
}
	 echo $eventanswer;
