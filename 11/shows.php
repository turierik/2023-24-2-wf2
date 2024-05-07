<?php
    $pdo = new PDO('sqlite:database.sqlite');

    // A verzió: paraméter nélküli query
    $q = $pdo -> query("SELECT * FROM shows");
    $res = $q -> fetchAll();
    var_dump($res);

    // B verzió: paraméteres query - NE LEGYEN SQL INJECTION!!! -> prepared statement
    $minId = 2; // ez a felhasználótól jön, unsafe!!!
    $stmt = $pdo -> prepare("SELECT * FROM shows WHERE id > :minId");
    $stmt -> execute([ 'minId' => $minId ]);
    $res = $stmt -> fetchAll();
    var_dump($res);
?>
