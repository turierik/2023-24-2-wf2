<?php
    session_start();
    if (!isset($_SESSION['counter']))
        $_SESSION['counter'] = 0;
?>

Számláló értéke: <?= $_SESSION['counter'] ?>
<br>
<a href="inc.php">Számláló növelése</a>