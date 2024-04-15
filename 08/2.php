<?php
    $full_name = $_POST['full_name'] ?? '';
    $age = $_POST['age'] ?? '';
    $email = $_POST['email'] ?? '';
    $gender = $_POST['gender'] ?? '';
    $errors = [];
    if ($_POST){
        if ($full_name === '')
            $errors['full_name'] = 'Kötelező nevet megadni!';
        else if (!str_contains(trim($full_name), ' '))
            $errors['full_name'] = 'A név legyen legalább 2 szó!';

        if ($age === '')
            $errors['age'] = 'A kort kötelező megadni!';
        else if (filter_var($age, FILTER_VALIDATE_INT) === false)
            $errors['age'] = 'A kor egész szám kell legyen!';
        else if ($age < 18)
            $errors['age'] = 'A kor legalább 18 év kell legyen!';   

        if ($email === '')
            $errors['email'] = 'A email címet kötelező megadni!';
        else if (!filter_var($email, FILTER_VALIDATE_EMAIL))
            $errors['email'] = 'Helytelen email cím!';

        if ($gender === '')
            $errors['gender'] = 'A nemet kötelező megadni!';
        else if (!in_array($gender, ['m', 'f']))
            $errors['gender'] = 'Helytelen nem!';
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
    <form action="2.php" method="POST" novalidate>
        Teljes név: <input type="text" name="full_name" value="<?= $full_name ?>">
        <?= $errors['full_name'] ??  '' ?>
        <br>
        <!-- val.: kötelező, legalább 2 szó -->

        Kor: <input type="text" name="age" value="<?= $age ?>">
        <?= $errors['age'] ??  '' ?>
        <br>
        <!-- val.: kötelező, egész szám, min. 18 -->

        E-mail: <input type="text" name="email" value="<?= $email ?>">
        <?= $errors['email'] ??  '' ?><br>
        <!-- val.: kötelező, formailag helyes email cím -->

        Nem: <?= $errors['gender'] ??  '' ?><br>
        <input type="radio" name="gender" value="m"
        <?= $gender === 'm' ? 'checked' : '' ?>
        > férfi<br>
        <input type="radio" name="gender" value="f"
        <?= $gender === 'f' ? 'checked' : '' ?>
        > nő<br>
        <!-- val.: kötelező, m vagy f -->

        <button type="submit">OK</button>
    </form>
</body>
</html>