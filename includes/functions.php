<?php
require 'connect.php';

function get_about_data($pdo)
{
  $query = "SELECT * FROM `tbl_about`";
  $get_data = $pdo->query($query);
  $results = array();
  while ($row = $get_data->fetch(PDO::FETCH_ASSOC)) {
    $results[] = $row;
  }
  return $results;
}

function get_image_data($pdo)
{
  $query = "SELECT * FROM `tbl_images`";
  $get_data = $pdo->query($query);
  $results = array();
  while ($row = $get_data->fetch(PDO::FETCH_ASSOC)) {
    $results[] = $row;
  }
  return $results;
}

function get_work_data($pdo, $id)
{
  $query = "SELECT wor.works_title, wor.works_desc, wor.works_videoUrl, wor.works_videoDesc, img.images_url FROM tbl_images img, tbl_works wor, tbl_img_works imgwor WHERE img.images_id = imgwor.images_id AND wor.works_id = imgwor.works_id AND wor.works_id = '$id'";
  $get_data = $pdo->query($query);
  $results = array();
  while ($row = $get_data->fetch(PDO::FETCH_ASSOC)) {
    $results[] = $row;
        // you could run subresult queries here - just write another function and append.
  }
  return $results;
}
?>