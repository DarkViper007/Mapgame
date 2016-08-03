<?php
$reserchcustomer = explode("=", $_SERVER["HTTP_COOKIE"]);
$date_info = "K/t: ".$reserchcustomer[1].", adreess request:".$_SERVER["REMOTE_ADDR"].", date_time:".date('l jS \of F Y h:i:s A')."</br>";

file_put_contents(__DIR__.'/text.txt', $date_info, FILE_APPEND);
echo "<pre>";
var_dump();
echo "</pre>";
die;

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
require_once '/home/devloper/www/angular.test/vendor/autoload.php';
use GeoIp2\Database\Reader;

// // This creates the Reader object, which should be reused across
// // lookups.
$reader = new Reader('/home/devloper/www/angular.test/GeoLite2-Country.mmdb');

// // Replace "city" with the appropriate method for your database, e.g.,
// // "country".
$record = $reader->country('128.101.101.101');
var_dump($record->country->name);
// print($record->country . "\n"); // 'US'
// print($record->country->name . "\n"); // 'United States'
// print($record->country->names['zh-CN'] . "\n"); // '美国'

// print($record->mostSpecificSubdivision->name . "\n"); // 'Minnesota'
// print($record->mostSpecificSubdivision->isoCode . "\n"); // 'MN'

// print($record->city->name . "\n"); // 'Minneapolis'

// print($record->postal->code . "\n"); // '55455'

// print($record->location->latitude . "\n"); // 44.9733
// print($record->location->longitude . "\n"); // -93.2323




