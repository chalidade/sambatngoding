<?php 
    $data = file_get_contents("data.json");
    $data = json_decode($data);

    for ($i=0; $i < 10; $i++) { 
        echo '
            <p>Name : '.$data[array_rand($data)]->name.'</p>
            <p>Language : '.$data[array_rand($data)]->language.'</p>
            <p>Bio : '.$data[array_rand($data)]->bio.'</p>
            <hr />
        ';
    }
?>