<?php
    session_start();
    if (!isset($_SESSION['user_id'])){
        // nem vagyunk bejelentkezve, nem kéne itt lenni eleve!
        header('location: login.php');
    }
    $users = json_decode(file_get_contents('users.json'), true);
    $matches = array_filter($users, fn($u) => $u['id'] === $_SESSION['user_id']);
    $key = array_keys($matches)[0];
    $user = $matches[$key];
?>

<h1>Nagyon titkos oldal!</h1>
Szia, <?= $user['username'] ?>!<br>
<a href="logout.php">Kijelentkezés</a>