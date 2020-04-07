<?php
class Test
{
	private $question;	//pytanie
	private $answer;	//odpowiedz prawdziwa
	private $enter_word;	//wprowadzona odpowiedz

	function __construct($question, $answer)
	{
		$this->question = $question;
		$this->answer = $answer;
		$this->enter_word = "NULL";
	}

	public function get_input()
	{
		$wyn = '<tr>
                    <td>'.$this->question.'</td>
                    <td><input type="text" name="'.md5($this->question.$this->answer).'"/></td>
		</tr>';
		return $wyn;
	}

	public function word_walidation($method="get")
	{
		$args=[
			''.md5($this->question.$this->answer) => FILTER_SANITIZE_MAGIC_QUOTES
		];
		if($method == "get")
			$dane=filter_input_array(INPUT_GET, $args);
		else
			$dane=filter_input_array(INPUT_POST, $args);
		return $dane;
	}

	public function get_name()
	{
		return ''.md5($this->question.$this->answer);
	}

	public function is_true()
	{
		if($this->enter_word === $this->answer)
			return true;
		else
			return false;
	}

	// -----------------------------
	
	public function get_enter_word()
	{
		if($this->enter_word == "NULL")
			return $this->question;
		else
			return $this->enter_word;
	}
	public function set_enter_word($enter_word)
	{
		$this->enter_word=$enter_word;
	}

	public function get_question()
	{
		return $this->question;
	}
	public function set_question($word)
	{
		if($this->question=$word)
			return 0;
		else 
			return 1;
	}

	public function get_answer()
	{
		return $this->answer;
	}
	public function set_answer($answer)
	{
		$this->answer=$answer;
	}
}
?>

