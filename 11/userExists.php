<?php
    $un = $_GET['username'] ?? '';
    $users = json_decode(file_get_contents('users.json'), true);
    $matches = array_filter($users, fn($u) => $u['username'] === $un);
    echo count($matches);
?>