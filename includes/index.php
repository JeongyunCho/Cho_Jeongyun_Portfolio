<?php

require 'functions.php';

if (isset($_GET['id'])) {
    // pass the connection and the movie id to a function
  $data = get_work_data($conn, $_GET['id']);
  echo json_encode($data);
}
else if(isset($_GET['about'])){
  $data = get_about_data($conn);
  echo json_encode($data);
}
else {
    // pass the connection and the movie id to a function
    $data = get_image_data($conn);
    echo json_encode($data);
}
?>