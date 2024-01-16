<?php 
    $list = file_get_contents("data.json");
    $list = json_decode($list);
    $result = [];
    $search = isset($_REQUEST["search"]) ? $_REQUEST["search"] : "";

    if(!empty($search)) {
        foreach ($list as $data) {
            if(preg_match("/{$search}/i", $data->name)) {
                array_push($result, $data);
            }
        }
    }

    function get_result($search, $result) {
        if(!empty($search)) {
            foreach ($result as $result) {
                echo '
                    <tr>
                        <td>'.$result->name.'</td>
                        <td>'.$result->language.'</td>
                        <td>'.$result->bio.'</td>
                    </tr>
                ';
            }
        }
    }
?>