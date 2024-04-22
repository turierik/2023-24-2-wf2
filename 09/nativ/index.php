<?php
    $data = json_decode(file_get_contents('data.json'), true);
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