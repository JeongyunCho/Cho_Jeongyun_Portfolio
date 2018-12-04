<?php
require 'connect.php';

function get_all_carData($pdo)
{
  $query = "SELECT * FROM `tbl_cars`";
  $get_data = $pdo->query($query);
  $results = array();
  while ($row = $get_data->fetch(PDO::FETCH_ASSOC)) {
    $results[] = $row;
  }
  return $results;
}

function get_one_carData($pdo, $car)
{
  $query = "SELECT * FROM `tbl_cars` WHERE ID = '$car'";
  $get_car = $pdo->query($query);
  $results = array();
  while ($row = $get_car->fetch(PDO::FETCH_ASSOC)) {
    $results[] = $row;
        // you could run subresult queries here - just write another function and append.
  }
  return $results;
}
?>