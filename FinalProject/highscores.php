<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset=”utf-8”>  
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="description" content="We have the best game of Breakout.">
  <title>Final Project Breakout Game</title>
  <link href="Breakout.css" rel="stylesheet" />
</head>

<body>
  <header>
    <H1>LET'S PLAY BREAKOUT!</H1>
  </header>
  <hr>

  <nav> 
     <ul>
        <li><a href="home.html">Home</a></li>
        <li><a href="BreakoutGame.html">** Play Game **</a></li>
        <li><a href="Rules.html">Rules of the Game</a></li>
        <li><a href="highscores.php">See our High Scores</a></li>
        <li><a href="Sources.html">List of Sources</a></li>
     </ul>
  </nav> 

   <section>
   <div class="scores">  

   <h2>Game High Scores !!!</h2>
   <br>

   <?php 
   require_once 'projectlogin.php';
   $conn = new mysqli($hn, $un, $pw, $db);
   if ($conn->connect_error) die($conn->connect_error);
   $query = "SELECT * FROM breakout ORDER BY score DESC, username LIMIT 10;";
   $result = $conn->query($query);
   if (!$result) die($conn->error);
   $rows = $result->num_rows;
   ?>
  
   <table>
   <tr>
   <th>Name</th>
   <th>Score</th>
   </tr>
    
   <?php
   for ($j = 0 ; $j < $rows ; ++$j)
   {
      $result->data_seek($j);
      $row = $result->fetch_array(MYSQLI_ASSOC);
      echo "<tr>";
      echo "<td>" . $row['username'] . "</td>";
      echo "<td>" . $row['score'] . "</td>";
      echo "</tr>";
   }
   echo "</table>";
   $result->close();
   $conn->close();
   ?>

</div>
</section>    
<footer>
      <p>Programmed by Greg Stratton. 
      <br>Copyright Protected. All rights reserved.</p>
  </footer>
</body>
</html>


