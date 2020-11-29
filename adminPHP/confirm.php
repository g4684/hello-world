<html>
<head>
  <meta charset=”utf-8”>  
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin> </script> -->
  <title>Mega Travel Contact Agent</title>
  <link href="styles/MegaTravel.css" rel="stylesheet" /> 
  
</head>  
<body>
<header>
    <img src="images/megatravellogo.png" alt="" width="400" height="225" style="float:left" />
  </header>

  <div id="WelcomeBar"></div>
  
  <nav>
    <ul>
        <li><a href="MegaTravel.html">Home</a></li>
        <li><a href="AboutUs.html">About Us</a></li>
        <li><a href="Contact.html">Contact Agent</a></li>
        <li><a href="Admin.php">Admin</a></li>
    </ul>
   </nav>

<?php

$activities = array();

if ( isset( $_POST['museums'] ) ) {
  $museums = "Museums";
  array_push($activities,"Museums");
}

if ( isset( $_POST['sailing'] ) ) {
  $sailing = "Sailing";
  array_push($activities,"Sailing");
}

if ( isset( $_POST['beach'] ) ) {
  $beach = "Beach";
  array_push($activities,"Beach");
}

if ( isset( $_POST['hiking'] ) ) {
  $hiking = "Hiking";
  array_push($activities,"Hiking");
}

if ( isset( $_POST['boating'] ) ) {
  $sailing = "Boating";
  array_push($activities,"Boating");
}

if ( isset( $_POST['cityTours'] ) ) {
  $sailing = "City Tours";
  array_push($activities,"City Tours");
}

if ( isset( $_POST['sports'] ) ) {
  $sailing = "Sports";
  array_push($activities,"Sports");
}

if ( isset( $_POST['cycling'] ) ) {
  $sailing = "Cycling";
  array_push($activities,"Cycling");
}

if ( isset( $_POST['theatre'] ) ) {
  $sailing = "Theatre";
  array_push($activities,"Theatre");
}

if ( isset( $_POST['parksRec'] ) ) {
  $sailing = "Parks and Recreation";
  array_push($activities,"Parks and Recreation");
}

if ( isset( $_POST['snorkeling'] ) ) {
  $sailing = "Snorkeling";
  array_push($activities,"Snorkeling");
}

$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$userPhone = $_POST["userPhone"];
$userEmail = $_POST["userEmail"];
$adults = $_POST["adults"];
$children = $_POST["children"];
$travelDate = $_POST["travelDate"];
$destination = $_POST["destination"];

if (count($activities) === 1){
  $activity1 = $activities[0];
  $activity2 = "";
  $activity3 = "";
  $activity4 = "";
  $activity5 = "";
}

if (count($activities) === 2){
  $activity1 = $activities[0];
  $activity2 = $activities[1];
  $activity3 = "";
  $activity4 = "";
  $activity5 = "";
}

if (count($activities) === 3){
  $activity1 = $activities[0];
  $activity2 = $activities[1];
  $activity3 = $activities[2];
  $activity4 = "";
  $activity5 = "";
}

if (count($activities) === 4){
  $activity1 = $activities[0];
  $activity2 = $activities[1];
  $activity3 = $activities[2];
  $activity4 = $activities[3];
  $activity5 = "";
}

if (count($activities) === 5){
  $activity1 = $activities[0];
  $activity2 = $activities[1];
  $activity3 = $activities[2];
  $activity4 = $activities[3];
  $activity5 = $activities[4];
}


?>
<section class="intro">
<H3>Thank you for submitting your travel agent contact request! Here is the information you submitted:</H3>
<br>
<div>
    <b>Client Name:</b> <?php echo $firstname . " " . $lastname; ?><br>
    <b>Client Phone Number:</b> <?php echo $userPhone; ?><br>
    <b>Client Email:</b> <?php echo $userEmail; ?><br>
    <b>Number of Adults:</b> <?php echo $adults; ?><br>
    <b>Number of Children:</b> <?php echo $children; ?><br>
    <b>Travel Date:</b> <?php echo $travelDate; ?><br>
    <b>Destination:</b> <?php echo $destination; ?><br>
    <b>Interested Activities:</b><br> 
    <?php
    foreach($activities as $value){
      echo $value . "<br>";
    }

    require_once 'megalogin.php';
    $conn = new mysqli($hn, $un, $pw, $db);
    if ($conn->connect_error) die($conn->connect_error);

    $query = "INSERT INTO travelers VALUES" .
    "('$firstname', '$lastname', '$userPhone', '$userEmail', '$adults', '$children', '$travelDate', '$destination', '$activity1', '$activity2', '$activity3', '$activity4', '$activity5')";
    $result = $conn->query($query);
    if (!$result) echo "INSERT failed: $query<br>" .
    $conn->error . "<br><br>";

    // $result->close();
    $conn->close();
    ?>

</div>
<br>
<p>An agent will be in touch with you soon!</p>
</section>    
<br>
<footer>
      <p style="color:white; background-color: black;">Copyright Protected. All rights reserved.<br><br>
      MEGA TRAVELS<br>mega@Travels.com</p>
</footer>
</body>
</html>


