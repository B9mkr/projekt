<?php

if(($dane = $ob->dane_z_bazy('SELECT id_post FROM `Post`')) != NULL)
{
    if (filter_input(INPUT_GET, 'this_post')) {
        $tp = filter_input(INPUT_GET, 'this_post');
        foreach($dane as $id)
        {
            // echo ''.$id->id_post.'</br>';
            if($id->id_post == $tp)
                $this_post = $tp;
        }
    } else {
        $this_post = -1;
    }
}

if(($dane = $ob->dane_z_bazy('SELECT id_user FROM `User`')) != NULL)
{
    if (filter_input(INPUT_GET, 'user')) {
        $us = filter_input(INPUT_GET, 'user');
        foreach($dane as $id)
        {
            // echo ''.$id->id_user.'</br>';
            if($id->id_user == $us)
                $this_user = $us;
        }
    } else {
        $this_user=$user_main->get_id_user();
    }
}

if (filter_input(INPUT_GET, 'strona')) {
    $strona = filter_input(INPUT_GET, 'strona');
    switch ($strona) {
        case 'registration':
            $strona = 'registration';
            break;
        case 'log_in':
            $strona = 'log_in';
            break;
        case 'post':
            $strona = 'post';
            break;
        case 'gen_postow':
            $strona = 'gen_postow';
            break;
        case 'user':
            $strona = 'user';
            break;
        case 'zmien_post':
            $strona = 'zmien_post';
            break;
        default:
 $strona='praca_techniczna';
//            $strona = 'glowna';
    }
} else {
    $strona = "glowna";
}


?>
