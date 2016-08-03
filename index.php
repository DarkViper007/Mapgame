<?php
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

// DEfines
define('BASE_DIR', __DIR__);

//Core include
include_once(BASE_DIR.'/core/trash.php');

// DEfines 2
define('BASE_URL', url());



// Include tpls
include_once(BASE_DIR.'/template/header.tpl');
include_once(BASE_DIR.'/template/map.tpl');
include_once(BASE_DIR.'/template/footer.tpl');

?>
