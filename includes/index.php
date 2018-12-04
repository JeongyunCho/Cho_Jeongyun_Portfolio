<?php

require 'functions.php';

if (isset($_GET['id'])) {
  
    // pass the connection and the movie id to a function
  $data = get_one_carData($conn, $_GET['id']);
  echo json_encode($data);
} else {
    // pass the connection and the movie id to a function
  $data = get_all_carData($conn);
  echo json_encode($data);
}
?>