<?php
function send_email(){
    $name = $_POST['name'];
    $mailFrom = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

   
    $to = "hyyn2007@jeongyuncho.ca";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an email from".$name.".\n\n".$message;

    mail($to, $subject, $txt, $headers);
    header("Location: ../index.html?mailsend");

  }

   send_email();
  


