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

<?php

if (isset($_GET["w1"]) && isset($_GET["w2"])) {
  $name = $_GET["w1"];
  $score = $_GET["w2"];
}
?>
<section>
<div class="scores"> 

<H2>Thank you for playing BREAKOUT!</H2>
<br>
<br>
<p><?php echo $name; ?>, your score was <?php echo $score; ?>.</p>

<?php
require_once 'projectlogin.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) die($conn->connect_error);

$query = "INSERT INTO breakout VALUES" .
"('$name', '$score')";
$result = $conn->query($query);
if (!$result) echo "INSERT failed: $query<br>" .
$conn->error . "<br><br>";
$conn->close();
?>

<br>
</section>    
<br>
<footer>
      <p>Programmed by Greg Stratton. 
      <br>Copyright Protected. All rights reserved.</p>
  </footer>
</body>
</html>


