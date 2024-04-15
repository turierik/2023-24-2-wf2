<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        echo "Hello";
        echo("Hello");
        print "Hello";
        print("Hello");

        $x = 3;
        echo $x;

        $t = [2, 5, 6, 7, 8, 0, 9, 12];
        // for ($i = 0; $i < count($t); $i++)
        //    echo $t[$i] . " ";

        foreach($t as $el)
            echo $el . " ";

        foreach($t as $i => $el)
            echo $i . "-edik elem: " . $el . "<br>";

        function isEven($n){
            return $n % 2 === 0;
        }

        $paros = array_filter($t, 'isEven');
        var_dump($paros);

        function sqr($n){
            return $n * $n;
        }

        $negyzet = array_map('sqr', $t);
        var_dump($negyzet);

        $ketto = 2;
        $paros = array_filter($t, function ($n) use ($ketto) {
            return $n % $ketto === 0;
        });
        var_dump($paros);

        $paros = array_filter($t, fn($n) => $n % 2 === 0);
        var_dump($paros);
    ?>
</body>
</html>