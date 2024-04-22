<?php
    $name = $_POST['name'] ?? '';
    $birthdate = $_POST['birthdate'] ?? '';
    $children = $_POST['children'] ?? '';

    if ($_POST){
        // validálj :)
        $data = json_decode(file_get_contents('data.json'), true);

        $data[] = [
            "name" => $name,
            "birthdate" => $birthdate,
            "children" => intval($children)
        ];

        file_put_contents('data.json', json_encode($data, JSON_PRETTY_PRINT));
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
    <form action="add.php" method="POST">
        Név: <input type="text" name="name"><br>
        Születési dátum: <input type="date" name="birthdate"><br>
        Gyerekek száma: <input type="number" name="children"><br>
        <button>Mentés</button>
    </form>
</body>
</html>