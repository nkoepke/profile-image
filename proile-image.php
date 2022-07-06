<?php
class ProfileImage{
    public $name;
    public $textColor;
    public $backgroundColor;
    public $fontFamily;
    public $fontSize;
    public $fontWeight;
    public $options;
    function __construct($nameParam, $optionsParam = null){
        if($optionsParam == null){
            $this->options = '{"textColor": "#ffffff", "backgroundColor": "#1f6feb", "fontSize": "40", "fontFamily": "Arial", "fontWeight": "normal"}';
        }
        else{
            $this->options = $optionsParam;
        }
        $this->name = $nameParam;
		$this->textColor = json_decode($this->options)->{'textColor'};
		$this->backgroundColor = json_decode($this->options)->{'backgroundColor'};
		$this->fontFamily = json_decode($this->options)->{'fontFamily'};
		$this->fontSize = json_decode($this->options)->{'fontSize'};
		$this->fontWeight = json_decode($this->options)->{'fontWeight'};
    }
    public function svg(){
        return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 100 100' width='100' height='100' style='font-weight: {$this->fontWeight};'><rect width='100' height='100' x='0' y='0' fill='{$this->backgroundColor}'></rect><text x='50%' y='50%' alignment-baseline='central' text-anchor='middle' font-family='{$this->fontFamily}' font-size='{$this->fontSize}' fill='{$this->textColor}' dominant-baseline='middle'>" . $this->shortName($this->name) . "</text></svg>";
    }
    private function shortName(){
        $n_arr = explode(" ", $this->name);
		$n_res = "";
		if(count($n_arr) <= 2){
		    for($i = 0; $i < count($n_arr); $i++){
			    $n_res .= strtoupper($n_arr[$i][0]);
		    }
		}
		else{
		    for($i = 0; $i < 2; $i++){
			    $n_res .= strtoupper($n_arr[$i][0]);
		    }
		}
		return $n_res;		
    }
}
?>
