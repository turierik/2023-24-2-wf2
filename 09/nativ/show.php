<?php
    $data = json_decode(file_get_contents('data.json'), true);
    $id = $_GET['id'] ?? -1;
    $d = $data[$id];
    if (!isset($data[$id])){
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