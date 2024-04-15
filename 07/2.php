<?php
    date_default_timezone_set('Europe/Budapest');
    echo date('Y.m.d. H:i:s');

    function fakt($n){
        if ($n <= 1) return 1;
        return $n * fakt($n - 1);
    }
    echo "<br>";
    echo fakt(5);  

    $errors = [
        "Out of memory.",
        "Out of coffee.",
        "IndexOutOfBoundsException"
    ];
?>

<?php for($s = 8; $s <= 28; $s += 2): ?>
    <p style="font-size: <?= $s ?>px">Helló világ!</p>
<?php endfor; ?>

<ul>
    <?php foreach($errors as $e): ?>
        <li><?= $e ?></li>
    <?php endforeach; ?>
</ul>