<?php
    include_once('Storage.php');
    $stor = new Storage(new JsonIO('data.json'));
    $d = $stor -> delete($_GET['id']);
    header("location: index.php");
    exit();
?>