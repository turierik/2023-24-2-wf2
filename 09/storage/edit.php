<?php
    $name = $_POST['name'] ?? '';
    $birthdate = $_POST['birthdate'] ?? '';
    $children = $_POST['children'] ?? '';
    
    include_once('Storage.php');
    $stor = new Storage(new JsonIO('data.json'));
    $d = $stor -> findById($_GET['id']);
    if ($d === null){
        header("location: index.php");
        exit();
    }
    if ($_POST){
        // validálj :)

        $stor -> update($_GET['id'], [
            "name" => $name,
            "birthdate" => $birthdate,
            "children" => intval($children)
        ]);

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
    <form action="edit.php?id=<?= $id ?>" method="POST">
        Név: <input type="text" value="<?= $d['name'] ?>" name="name"><br>
        Születési dátum: <input type="date" value="<?= $d['birthdate'] ?>" name="birthdate"><br>
        Gyerekek száma: <input type="number" value="<?= $d['children'] ?>" name="children"><br>
        <button>Mentés</button>
    </form>
</body>
</html>