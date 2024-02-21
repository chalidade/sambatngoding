<?php 

$_hour1 = "08:00:00";
$_hour2 = "08:00:00";
$_hour3 = "00:00:00";

$hour1 = strtotime($_hour1);
$hour2 = strtotime($_hour2);
$selisih = $hour2 - $hour1;

if($selisih > 0) {
    $jam = floor($selisih / (60 * 60));
    $menit = floor(($selisih - ($jam * (60 * 60))) / 60);
    $detik = $selisih % 60;

    $jam = $jam < 10 ? "0".$jam : $jam;
    $menit = $menit < 10 ? "0".$menit : $menit;
    $detik = $detik < 10 ? "0".$detik : $detik;

    $_hour3 = $jam.":".$menit.":".$detik;
}

echo '
    <font size="6">
        Jam Masuk : '.$_hour1.' <br />
        Jam Pulang : '.$_hour2.' <br />
        Selisih : '.$_hour3.' <br />        
    </font>';
?>