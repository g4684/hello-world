<html>
<head>
  <meta charset=”utf-8”>  
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <!-- <script src="https://unpkg.com/react@16/umd/react.development.js" crossorigin></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js" crossorigin> </script> -->
  <title>Mega Travel Admin Page</title>
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
        <li><a href="Admin.html">Admin</a></li>
    </ul>
   </nav>

   <section style="margin-left: 50px;">  

   <p><b>Please review the submitted forms below.</b></p>
   <br>

   <?php //fetchmegatravel.php
   require_once 'megalogin.php';
   $conn = new mysqli($hn, $un, $pw, $db);
   if ($conn->connect_error) die($conn->connect_error);
   $query = "SELECT * FROM travelers";
   $result = $conn->query($query);
   if (!$result) die($conn->error);
   $rows = $result->num_rows;
   for ($j = 0 ; $j < $rows ; ++$j)
   {
      $result->data_seek($j);
      $row = $result->fetch_array(MYSQLI_ASSOC);
      echo '<b>Client Name:</b> ' . $row['firstname'] . " " . $row['lastname'] . '<br>';
      echo '<b>Client Phone Number:</b> ' . $row['phone'] . '<br>';
      echo '<b>Client Email:</b> ' . $row['email'] . '<br>';
      echo '<b>Number of Adults:</b> ' . $row['adults'] . '<br>';
      echo '<b>Number of Children:</b> ' . $row['children'] . '<br>';
      echo '<b>Travel Date:</b> ' . $row['traveldate'] . '<br>';
      echo '<b>Destination:</b> ' . $row['destination'] . '<br>';
      echo '<b>Interested Activity 1:</b> ' . $row['activity1'] . '<br>';
      echo '<b>Interested Activity 2:</b> ' . $row['activity2'] . '<br>';
      echo '<b>Interested Activity 3:</b> ' . $row['activity3'] . '<br>';
      echo '<b>Interested Activity 4:</b> ' . $row['activity4'] . '<br>';
      echo '<b>Interested Activity 5:</b> ' . $row['activity5'] . '<br><br>';
   }
   $result->close();
   $conn->close();
   ?>


</div>
</section>    
<br>
<footer>
      <p style="color:white; background-color: black;">Copyright Protected. All rights reserved.<br><br>
      MEGA TRAVELS<br>mega@Travels.com</p>
</footer>
</body>
</html>


