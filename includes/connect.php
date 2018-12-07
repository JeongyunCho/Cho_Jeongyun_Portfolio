<?php 
$dbn_dsn = array(
  'host' => 'localhost',
  'dbname' => 'jeong129_portfolio',
  'charset' => 'utf8',
);

$dsn = 'mysql: ' . http_build_query($dbn_dsn, '', ';');

//DB Credentials
$db_user = 'root';
$db_pass = '';  //need to be changed depends on COM

//PDO = Php Data Object
try {
  $conn = new PDO($dsn, $db_user, $db_pass);
  // var_dump($pdo);
} catch (PDOException $exception) {
  echo 'Connection Error ' . $exception->getMessage();
  exit();
}

?>
