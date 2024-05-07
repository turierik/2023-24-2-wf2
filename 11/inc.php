<?php
    session_start();
    $_SESSION['counter'] = $_SESSION['counter'] + 1;
    header('location: session.php');
?>