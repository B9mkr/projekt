<?php
include_once("class/Test.php");

/*
$local_word = array("word1","word2","question 3", "question 4");
$local_answer = array("answer1","answer2", "odpowiedz 3", "odpoweidz 5");

foreach($local_word as $key => $lw)
{
	$clas_test[$key] = new Test($local_word[$key], $local_answer[$key]);
	echo $clas_test[$key]->get_question()." -> ";
	echo $clas_test[$key]->get_answer()."<br/>";
}

echo $clas_test[0]->set_question("word zm 1")."<br/>";

foreach($local_word as $key => $lw)
{
	echo $clas_test[$key]->get_question()." -> ";
	echo $clas_test[$key]->get_answer()."<br/>";
}

$form = '<form method="get" action="#" >';
$form .= '<table>';

foreach($clas_test as $key => $lw)
{
	$form .= "".$clas_test[$key]->get_input();
}
$form .= '<tr>
	<td><a href="#">test</a></td>
        <td><input type="submit" value="submit" name="wynik"/></td>';

$form .= '</table>
	</form>';

echo $form;

if(filter_input(INPUT_GET,"wynik"))
{
	$wynik = '<table>';
	foreach($clas_test as $key => $ct)
	{
		$dane = $ct->word_walidation("get");
		$ct->set_enter_word($dane[$ct->get_name()]);
		
		$wynik .= '<tr><td>'.$ct->get_question().'</td>';
		if($ct->is_true())
		{
			$wynik .= '<td> '.$ct->get_answer().'</td>';
			$wynik .= '<td>true</td></tr>';
		}
		else
		{
			$wynik .= '<td> '.$ct->get_enter_word().'</td>';
			$wynik .= '<td>false</td></tr>';
		}
	}
	$wynik .= '</table>';
	echo $wynik;
}
*/

// ----------------------------

$local_word = array("word1","word2","question 3", "question 4");
$local_answer = array(("answer11", "answer12", "answer13"), "answer2", "odpowiedz 3", "odpoweidz 5");

foreach($local_word as $key => $lw)
{
	$clas_test[$key] = new Test($local_word[$key], $local_answer[$key]);
	echo $clas_test[$key]->get_question()." -> ";
	echo $clas_test[$key]->get_answer()."<br/>";
}

echo $clas_test[0]->set_question("word zm 1")."<br/>";

foreach($local_word as $key => $lw)
{
	echo $clas_test[$key]->get_question()." -> ";
	echo $clas_test[$key]->get_answer()."<br/>";
}

$form = '<form method="get" action="#" >';
$form .= '<table>';

foreach($clas_test as $key => $lw)
{
	$form .= "".$clas_test[$key]->get_input();
}
$form .= '<tr>
	<td><a href="#">test</a></td>
        <td><input type="submit" value="submit" name="wynik"/></td>';

$form .= '</table>
	</form>';

echo $form;

if(filter_input(INPUT_GET,"wynik"))
{
	$wynik = '<table>';
	foreach($clas_test as $key => $ct)
	{
		$dane = $ct->word_walidation("get");
		$ct->set_enter_word($dane[$ct->get_name()]);
		
		$wynik .= '<tr><td>'.$ct->get_question().'</td>';
		if($ct->is_true())
		{
			$wynik .= '<td> '.$ct->get_answer().'</td>';
			$wynik .= '<td>true</td></tr>';
		}
		else
		{
			$wynik .= '<td> '.$ct->get_enter_word().'</td>';
			$wynik .= '<td>false</td></tr>';
		}
	}
	$wynik .= '</table>';
	echo $wynik;
}

?>
