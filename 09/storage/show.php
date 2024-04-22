<?php
    include_once('Storage.php');
    $stor = new Storage(new JsonIO('data.json'));
    $d = $stor -> findById($_GET['id']);
    if ($d === null){
        header("location: index.php");
        exit();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    Név: <?= $d['name'] ?><br>
    Születési dátum: <?= $d['birthdate'] ?><br>
    Gyerekek száma: <?= $d['children'] ?>

    <a href="edit.php?id=<?= $id ?>">Szerkesztés</a>
    <a href="delete.php?id=<?= $id ?>">Törlés</a>
</body>
</html>