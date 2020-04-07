<?php
include_once('class/Strona.php');
include_once('class/User.php');
include_once('class/Post.php');
include_once('class/Baza.php');

$ob         = new Baza("localhost", "root", "", "projekt");

$this_post=-1;
$this_user=-1;

$user_main = new User("", "", "");

$sql = "SELECT * FROM `User` WHERE `User`.`id_user`=(SELECT id_user FROM `Session` ORDER BY `Session`.`lastUpdate` DESC LIMIT 1)";
if(($dane = $ob->dane_z_bazy($sql)) != NULL)
{
    $user_main->set_z_bazy($dane, 0);
    $this_user=$user_main->get_id_user();
}

$strona_akt = new Strona($ob);

// include_once('setting/main_settings.php');

$strona='praca_techniczna';

//dołącz wybrany plik z ustawioną zmienną $tytul i $zawartosc
$plik = "skrypty/" . $strona . ".php";
if (file_exists($plik)) {
    require_once($plik);

    $strona_akt->set_title($tytul);
    $strona_akt->set_zawartosc($zawartosc);
    
    $strona_akt->set_this_user($this_user);
    $strona_akt->set_this_post($this_post);

    $user_main->set_user($user);

    //var_dump(parse_url($_SERVER['REQUEST_URI'], PHP_URL_FRAGMENT));
    //echo ''.$_SERVER['REQUEST_URI'];
    
    $strona_akt->show();

}
?>
