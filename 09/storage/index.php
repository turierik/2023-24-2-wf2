<?php
    include_once('Storage.php');
    $stor = new Storage(new JsonIO('data.json'));
    $data = $stor -> findAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <ul>
    <?php foreach($data as $id => $d): ?>
        <li><a href="show.php?id=<?= $id ?>"><?= $d['name'] ?></a></li>
    <?php endforeach; ?>
    </ul>
</body>
</html>