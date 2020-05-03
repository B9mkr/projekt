<?php
class Post {
    // konstanty klasy:
    const ACCESS_NULL = 1;
    const ACCESS_WRITE = 2;
    const ACCESS_READ = 3;
    const ACCESS_ALL = 4;

    // pola klasy:
    protected $id_post;
    protected $id_user;
    protected $title;
    protected $creation_date;
    protected $modification_date;
//     protected $datetime;
    protected $description;
    protected $img;
    protected $access;
    protected $test;
    protected $content;
    protected $user;

//     protected $back_fon_a=array("s","sp","m","g","c","se","i","a","p","b","bo");
    protected $back_fon_b=array('standard','PP','MSK','generator','code','security','software engineer','ISM','SW','ISBD','PRR');
    protected $back_fon_l=array('img/standard/f','img/space/space','img/model/model','img/generator/intGen','img/code/baza_danych',
	    'img/security/security','img/software_engineering/software_engineer','img/android/android','img/processor/pr',
	    'img/bd/bd','img/bouncers/bouncers');

    // function __construct($datetime, $tag, $description, $img, $content, $access){
    function __construct()
    {
        $this->access = "".Post::ACCESS_ALL."".Post::ACCESS_ALL;
        $this->creation_date = (new DateTime()) -> format("Y-m-d H:i:s");
        $this->modification_date = (new DateTime()) -> format("Y-m-d H:i:s");
        $this->id_post=1;
        $this->test=NULL;

// 	$this->back_fon_a=array("s","sp","m","g","c","se","i","a","p","b","bo");
// 	$this->back_fon_b=array('standard','space','model','generator','code','security','software engineer','android','processor','bazy danych','bouncers');
// 	$this->back_fon_l=array('img/standard/f','img/space/space','img/model/model','img/generator/intGen','img/code/baza_danych',
// 	    'img/security/security','img/software_engineering/software_engineer','img/android/android','img/processor/pr',
// 	    'img/bd/bd','img/bouncers/bouncers');
    }

    // ----------------------------------------------------------------
    public function add_do_bazy(){
        $answer = "INSERT INTO `Post` (`id_post`, `id_user`, `title`, `datetime`, `tag`, `description`, `img`, `access`, `content`) VALUES ";
        // if($this->id_post == 1)
	        $answer .= "(NULL, '".$this->id_user."', '$this->title', '$this->datetime', '$this->tag', '$this->description', '$this->img', '$this->access', '$this->content')";
        // else
        // $answer .= "(".$this->id_post.", '".$this->id_user."', '$this->title', '$this->datetime', '$this->tag', '$this->description', '$this->img', '$this->access', '$this->content')";
        return $answer;
    }

    public function set_z_bazy($dane, $index=0){
        // var_dump($dane);
        $this->id_post = $dane[$index]->id_post;
        $this->id_user = $dane[$index]->id_user;
        $this->title = $dane[$index]->title;
//         $this->datetime = $dane[$index]->datetime;
        $this->tag = $dane[$index]->tag;
        $this->description = $dane[$index]->description;
        $this->img = $dane[$index]->img;
        $this->access=$dane[$index]->access;
        $this->content=$dane[$index]->content;
        // $this-> = $dane[$index]->;
    }

    // Create form ----------------------------------------------------
    function get_create_Form()
    {
        // <tr>
        //         <td colspan=2>
        //             <input type="submit" value="Pokaż posty" name="pokaz_posty"/>
        //         </td>
        //     </tr>
        $form='<form method="post" action="?strona=gen_postow" >
        <table>
            <tr>
                <td>Tytuł: </td>
                <td><input name="title" id="title" type="text" value="Title" placeholder="Tytuł"/> </td>
            </tr>
            <tr>
                <td>Zdjęcie zadniego fonu: </td>
                <td>
                    <select name="img">';
	foreach($this->back_fon_b  as $b)
	{
		$form.='<option value="'.$b.'">'.$b.'</option>';
	}
         $form.='</select>
                </td>
            </tr>
            <tr>
                <td>Tag:</td>
                <td><input name="tag" id="tag" type="text" value="tag" placeholder="Tag"/></td>
            </tr>
            <tr>
                <td>Opis: </td>
                <td><textarea name="description" id="description" type="text" placeholder="Opis" maxlength="255">Opis</textarea></td>
            </tr>
            <tr>
                <td>Tekst główny: </td>
                <td><input name="content" id="content" type="text" value="README.md" placeholder="url na tekst w formacie .md"/> </td>
            </tr>
            <tr>
                <td><label for = "access">Dostęp dla innych urzytkowników:</label></td>
                <td>
                    <select name="access">
                        <option value="r">Tylko czytać</option>
                        <option value="a">Czytać i zmieniać</option>
                        <option value="n">Bez dostępu</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td><a href="?strona=glowna">Anuluj</a></td>
                <td><input type="submit" value="Dodaj" name="dodaj_post"/></td>
            </tr>
        </table>
        </form>';
        return $form;
    }

    function walidacja_danych($db, $user)
    {
        $args = array(
            'title' => FILTER_SANITIZE_MAGIC_QUOTES,
            'img' => FILTER_SANITIZE_MAGIC_QUOTES,
            'tag' => FILTER_SANITIZE_MAGIC_QUOTES,
            'description' => FILTER_SANITIZE_MAGIC_QUOTES,
            'content' => FILTER_SANITIZE_MAGIC_QUOTES,
            'access' => FILTER_DEFAULT
        );
        
        $dane = filter_input_array(INPUT_POST, $args);
        
        $this->dobazy($dane, $user, $db);

        $postId = $db->selectPost($dane["content"]);
        
        if ($postId > 0) //Poprawne dane
        { 
            return $postId;
        } else {
            return -1;
        }   
    }

    function dobazy($dane, $user, $ob)
    {
        $this->title = $dane["title"];
	
	foreach($this->back_fon_b as $keyb => $b) {
		if($b == $dane["img"])
			$this->img = $this->back_fon_l[$keyb];
	}

        $this->tag = $dane["tag"];
        $this->description = $dane["description"];
        $this->content = $dane["content"];
        $this->id_user = $user->get_id_user();
        switch($dane["access"]) {
            case "r":	$this->access ='64';         break;
            case "a":	$this->access ='66';         break;
            case "n":	$this->access ='61';         break;
            default:    $this->access ='66';
        }

        $ob->answer($this->add_do_bazy());
    }

    // Change form ----------------------------------------------------

    function get_change_Form()
    {
        $form='<form method="post" action="?strona=zmien_post&this_post='.$this->id_post.'" >
        <table>
            <tr>
                <td>Tytuł: </td>
                <td><input name="title" id="title" type="text" value="'.$this->title.'" placeholder="Tytuł"/> </td>
            </tr>
            <tr>
                <td>Zdjęcie zadniego fonu: </td>
                <td>
                    <select name="img">';
                    $form.=$this->default_img();    
                    $form.='</select>
                </td>
            </tr>
            <tr>
                <td>Tag:</td>
                <td><input name="tag" id="tag" type="text" value="'.$this->tag.'" placeholder="Tag"/></td>
            </tr>
            <tr>
                <td>Opis: </td>
                <td><textarea name="description" id="description" type="text" placeholder="Opis" maxlength="255">'.$this->description.'</textarea></td>
            </tr>
            <tr>
                <td>Url do tekstu głównego: </td>
                <td><input name="content" id="content" type="text" value="'.$this->content.'" placeholder="url na tekst w formacie .md"/> </td>
            </tr>
            <tr>
                <td><label for = "access">Dostęp dla innych urzytkowników:</label></td>
                <td>
                    <select name="access">';
                    $form.=$this->default_access();
                    $form.='</select>
                </td>
            </tr>
            <tr>
                <td><input type="submit" value="Usuń" name="usun_post"/></td>
                <td><input type="submit" value="Zmień" name="zmien_post"/></td>
            </tr>
        </table>
        
        </form>';
        return $form;
    }

    function default_access()
    {
        $wyn='';
        
        switch($this->get_access_for(1, $this->access))
        {
            case 4:
                $wyn.='<option value="r">Tylko czytać</option>
                <option value="a">Czytać i zmieniać</option>
                <option value="n">Bez dostępu</option>';
                break;
            case 6:
                $wyn.='<option value="a">Czytać i zmieniać</option>
                <option value="r">Tylko czytać</option>
                <option value="n">Bez dostępu</option>';
                break;
            default:
            $wyn.='<option value="n">Bez dostępu</option>
                <option value="a">Czytać i zmieniać</option>
                <option value="r">Tylko czytać</option>';
                break;
        }
        return $wyn;
    }

    function default_img()
    {
        $wyn='';
        $i=0; 
	foreach($this->back_fon_l as $keyl => $l) {
		if($i==0 && $l == $this->img) {
			$i=1;
                	$wyn.='<option value="'.$this->back_fon_b[$keyl].'">'.$this->back_fon_b[$keyl].'</option>';
			foreach($this->back_fon_b as $keyb => $b) {
				if($keyl != $keyb)
                			$wyn.='<option value="'.$b.'">'.$b.'</option>';
			}
		}
	}
	if($i==0) {
		$wyn.='<option value="'.$this->back_fon_b[0].'">'.$this->back_fon_b[0].'</option>';
		foreach($this->back_fon_b as $keyb => $b) {
			if($keyb != 0)
                		$wyn.='<option value="'.$b.'">'.$b.'</option>';
		}
	}

	return $wyn;
    }

    function get_format_Form($form)
    {
        $tresc='
        <article class="post-full">
        <header class="post-full-header">
            <section class="post-full-meta">
                <time class="post-full-meta-date" datetime="'.$this->get_modification_date().'">'.$this->get_modification_date_format("d F Y").'</time>
            </section>
            <h1 class="post-full-title">'.$this->get_title().'</h1>
        </header>';
        // <figure class="post-full-image">';
        // $tresc.=create_img($post->get_img(), "png");
        // $tresc.='</figure>
        $tresc.='<section class="post-full-content"><div class="post-content">';
        $tresc .= $form;
        $tresc.='</div></section></article>';
        return $tresc;
    }
    //-------------------------------------------

    function walidacja_danych_z($db, $user)
    {
        $args = array(
            'title' => FILTER_SANITIZE_MAGIC_QUOTES,
            'img' => FILTER_SANITIZE_MAGIC_QUOTES,
            'tag' => FILTER_SANITIZE_MAGIC_QUOTES,
            'description' => FILTER_SANITIZE_MAGIC_QUOTES,
            'content' => FILTER_SANITIZE_MAGIC_QUOTES,
            'access' => FILTER_DEFAULT
        );
        
        $dane = filter_input_array(INPUT_POST, $args);
        
        $this->title = $dane["title"];
        $this->tag = $dane["tag"];
        $this->description = $dane["description"];
        $this->content = $dane["content"];
        $this->id_user = $user->get_id_user();

	foreach($this->back_fon_b as $keyb => $b){
		if($b == $dane["img"])        		
			$this->img = $this->back_fon_l[$keyb];
	}
	
//         switch($dane["img"])
//         {
// 		foreach($this->back_fon_a as $key => $a){
//             		case $a: $this->img = $this->back_fon_l[$key];   break;
// 		}
// 	    default:    $this->img = $this->back_fon_l[0];
// 	}

//         switch($dane["img"]) {
//             case "g":	$this->img ='img/generator/intGen';   break;
//             case "m":	$this->img ='img/model/model';   break;
//             case "c":	$this->img ='img/code/baza_danych';   break;
//             case "bo":	$this->img ='img/bouncers/bouncers';   break;
//             case "p":	$this->img ='img/processor/pr';   break;
//             case "se":	$this->img ='img/security/security';   break;
//             case "i":	$this->img ='img/software_engineering/software_engineer';   break;
//             case "a":	$this->img ='img/android/android';   break;
//             case "sp":	$this->img ='img/space/space';   break;
//             case "b":	$this->img ='img/bd/bd';   break;
//             default:    $this->img ='img/standard/f';
//         }

        switch($dane["access"])
        {
            case "r":	$this->access ='64';         break;
            // case "w":	$this->access ='62';         break; // <option value="w">write</option>
            case "a":	$this->access ='66';         break;
            case "n":	$this->access ='61';         break;
            default:    $this->access ='66';
        }

        $db->answer('UPDATE `Post` SET `title` = "'.$this->title.'", `img` = "'.$this->img.'", `tag` = "'.$this->tag.'", `description` = "'.$this->description.'", `content` = "'.$this->content.'", `access` = "'.$this->access.'" WHERE `Post`.id_post = '.$this->id_post.';');

        $postId = $db->selectPost($this->content);
        
        if ($postId > 0) //Poprawne dane
        { 
            return $postId;
        } else {
            return -1;
        }   
    }

    function get_access_for($kto, $ACCESS)
    {
        $access = str_split($ACCESS);
        $ac = $access[1];
        switch($kto)
        {
            case 'u':
            case 0:  $ac = $access[0]; break;
            default: $ac = $access[1];
        }

        $wyn=1;
        switch($ac)
        {
            case "2":	$wyn=2;         break;
            case "4":	$wyn=4;         break;
            case "6":	$wyn=6;         break;
            default:    $wyn=1;
        }

        return $wyn;
    }
    // ----------------------------------------------------------------
    function get_tresc($Parsedown)
    {
        $tresc='
        <article class="post-full post tag-it">
        <header class="post-full-header">
            <section class="post-full-meta">
                <time class="post-full-meta-date" datetime="'.$this->get_modification_date().'">'.$this->get_modification_date_format("d F Y").'</time>
                <span class="date-divider">/</span> <a href="?strona=glowna&tag='.$this->get_tag().'">'.$this->get_tag().'</a>
            </section>
            <h1 class="post-full-title">'.$this->get_title().'</h1>
        </header>
        <figure class="post-full-image">';
//        $tresc.='<script id="MathJax-script" async src="JS/tex_mml_chtml.js"></script>';
        $tresc.='<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>';
        
        $tresc.=$this->create_img($this->get_img(), "jpg");
        
        $tresc.='</figure>
        <section class="post-full-content"><div class="post-content">';
            
	//$inzyn=array("md/s5/IO/wyk/1Tworzenie_si.md", "md/s5/IO/wyk/2Analiza.md", "md/s5/IO/wyk/3Inzynieria_wymagan.md", "md/s5/IO/wyk/4Rzeczywistosc.md", "md/s5/IO/wyk/5Techniki_modelowania.md", "md/s5/IO/wyk/6_22,01.md", "md/s5/IO/wyk/7Kodowanie.md", "md/s5/IO/wyk/8Testowanie.md", "md/s5/IO/wyk/9Rozwoj_oprogramowania.md", "md/s5/IO/wyk/10Systemy_zapewnienia.md", );
//	$sieci=array('md/s5/SR/wyk/1Wprowadzenie.md', 'md/s5/SR/wyk/2Topolegie_sieci_WAN.md','md/s5/SR/wyk/3Zdalny_dostep.md','md/s5/SR/wyk/4Technologia_ISDN.md','md/s5/SR/wyk/5Technologie_i_uslugi_xDSL.md','md/s5/SR/wyk/6Komutacja_pakietow.md','md/s5/SR/wyk/7Frame.md','md/s5/SR/wyk/8ATM.md','md/s5/SR/wyk/9SDLC.md','md/s5/SR/ospf.md','md/s5/SR/eg.md'); 

//	$tresc.=$this->files_get_tresc($sieci, $Parsedown);
//	$tresc.=$this->files_get_tresc($this->get_content, $Parsedown);
	  
        $tresc.=$this->file_get_tresc("".$this->get_content(), $Parsedown);
        
        $tresc.='</div></section></article>';

       // $tresc.='<div class="progress-barm floating-header floating-active"></div>
        //<script src="JS/scroll.js"></script>'; // scroll in the top

        return $tresc;
    }
    function files_get_tresc($urls, $Parsedown)
    {
	$tresc='';
	foreach($urls as $url)
	{
            $tresc.=$this->file_get_tresc("".$url, $Parsedown);
	}
	return $tresc;
    }
    function file_get_tresc($url, $Parsedown)
    {
        if($contents = file_get_contents($url))
            return "".$Parsedown->text($contents);
        else
            return "<h1>Nie poprawna ścieżka</h1>";
    }

    // Dla strony glównej ---------------------------------------------
    // <span class="post-card-tags"><a href="?strona=glowna&tag='.$this->get_tag().'">'.$this->get_tag().'</a></span>
    function get_tresc_g($user){
        $tresc = '
                <article class="post-card post">
                    <a class="post-card-image-link" href="?strona=post&this_post='.$this->get_id_post().'">'.$this->create_img($this->get_img(), "jpg").'</a>
                    <div class="post-card-content">
                        <a class="post-card-content-link" href="?strona=post&this_post='.$this->get_id_post().'">
                            <header class="post-card-header">
                                <span class="post-card-tags">'.$this->get_tag().'</span>
                                <h2 class="post-card-title">'.$this->get_title().'</h2>
                            </header>
                            <section class="post-card-excerpt">
                                <p>'.$this->get_description().'</p>
                            </section>
                        </a>
                        <footer class="post-card-meta">
                            <ul class="author-list">
                                <li class="author-list-item">
                                    <div class="author-name-tooltip">'.
                                        $user->get_username()
                                    .'</div>
                                        <a href="?strona=user&user='.$user->get_id_user().'" class="static-avatar">
                                            <img class="author-profile-image" src="'.$user->get_img().'" alt="author" />
                                        </a>
                                </li>
                            </ul>';

        $reading_time = (int)((str_word_count(file_get_contents($this->get_content()))/100)+0.5);
        if($reading_time != 0)
            $tresc.='<span class="reading-time">'.$reading_time.' min</span>';
        else
            $tresc.='<span class="reading-time">do 1 min</span>';

               $tresc.='</footer>
                    </div>
                </article>';
        return $tresc;
    }

    function usun_post($ob)
    {
        $ob->answer('DELETE FROM `Post` WHERE `Post`.`id_post` = '.$this->id_post);
    }

    // Ogulne ---------------------------------------------------------
    function create_img($url, $k)
    {
        return "<img
            srcset=\"".$url."300.".$k." 300w,
            ".$url."600.".$k." 600w,
            ".$url."1000.".$k." 1000w,
            ".$url."2000.".$k." 2000w\"
            sizes=\"(max-width: 800px) 400px,(max-width: 2000px) 700px, 1400px\" src=\"".$url."2000.".$k."\"
            alt=\"img\"/>";
    }

    // ----------------------------------------------------------------
    //interfejs klasy – metody modyfikujące fragmenty strony
    public function set_title($title){
        $this->title = $title;
    }
    public function set_creation_date($date=''){
        if($date == '')
            $this->creation_date = (new DateTime()) -> format("Y-m-d");
        else
            $this->creation_date = $date;
    }
    public function set_modification_date($date=''){
        if($date == '')
            $this->modification_date = (new DateTime()) -> format("Y-m-d");
        else
            $this->modification_date = $date;
    }
    public function set_tag($tag){
        $this->tag = $tag;
    }
    public function set_description($description){
        $this->description = $description;
    }
    public function set_img($img){
        $this->img = $img;
    }
    public function set_access($liczba_access)
    {
        switch($liczba_access){
            case 44: $this->access = "".$this->help_access(4)."".$this->help_access(4); break;
            case 42: $this->access = "".$this->help_access(4)."".$this->help_access(2); break;
            case 41: $this->access = "".$this->help_access(4)."".$this->help_access(1); break;
            case 46: $this->access = "".$this->help_access(4)."".$this->help_access(6); break;

            case 24: $this->access = "".$this->help_access(2)."".$this->help_access(4); break;
            case 22: $this->access = "".$this->help_access(2)."".$this->help_access(2); break;
            case 21: $this->access = "".$this->help_access(2)."".$this->help_access(1); break;
            case 26: $this->access = "".$this->help_access(2)."".$this->help_access(6); break;
            
            case 14: $this->access = "".$this->help_access(1)."".$this->help_access(4); break;
            case 12: $this->access = "".$this->help_access(1)."".$this->help_access(2); break;
            case 11: $this->access = "".$this->help_access(1)."".$this->help_access(1); break;
            case 16: $this->access = "".$this->help_access(1)."".$this->help_access(6); break;

            case 64: $this->access = "".$this->help_access(6)."".$this->help_access(4); break;
            case 62: $this->access = "".$this->help_access(6)."".$this->help_access(2); break;
            case 61: $this->access = "".$this->help_access(6)."".$this->help_access(1); break;
            default: $this->access = "".$this->help_access(6)."".$this->help_access(6);
        }
    }
    public function set_content($content){
        $this->content = $content;
    }
    public function set_user($user){
        $this->user = $user;
    }
    
    //interfejs klasy – metody zwracające dane posta
    public function get_id_post(){
        return $this->id_post;
    }
    public function get_id_user(){
        return $this->id_user;
    }
    public function get_title(){
        return $this->title;
    }
    public function get_creation_date(){
        return $this->creation_date;
    }
    public function get_modification_date(){
        return $this->modification_date;
    }
    public function get_tag(){
        return $this->tag;
    }
    public function get_description(){
        return $this->description;
    }
    public function get_img(){
        return $this->img;
    }
    public function get_access(){
        return $this->access;
    }
    public function get_content(){
        return $this->content;
    }
    public function get_user(){
        return $this->user;
    }

    public function get_creation_date_format($format="Y-m-d")
    {
        return ((new DateTime("".$this->creation_date))->format($format));
    }
    public function get_modification_date_format($format="Y-m-d")
    {
        return ((new DateTime("".$this->modification_date))->format($format));
    }

    function help_access($liczba){
        switch($liczba){
            case 4: return Post::ACCESS_READ;
            case 2: return Post::ACCESS_WRITE;
            case 1: return Post::ACCESS_NULL;
            default: return Post::ACCESS_ALL;
        }
    }
}
?> 
