<?php 
$dbn_dsn = array(
  'host' => 'localhost',
  'dbname' => 'db_autoapp',
  'charset' => 'utf8',
);

$dsn = 'mysql: ' . http_build_query($dbn_dsn, '', ';');

//DB Credentials
$db_user = 'root';
$db_pass = '';  //root on Mac

//PDO = Php Data Object
try {
  $conn = new PDO($dsn, $db_user, $db_pass);
  // var_dump($pdo);
} catch (PDOException $exception) {
  echo 'Connection Error ' . $exception->getMessage();
  exit();
}

?>
