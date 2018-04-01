var proverb = "Actions speak louder than words";
proverb = proverb.toUpperCase();

var length = proverb.length;
var countMiss = 0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

var proverb1 = "";

for (i=0; i<length; i++)
{
	if (proverb.charAt(i)==" ") proverb1 = proverb1 + " ";
	else proverb1 = proverb1 + "-";
}

function showProverb()
{
	document.getElementById("board").innerHTML = proverb1;
}

window.onload = start;

var chars = new Array(35);

chars[0] = "A";
chars[1] = "B";
chars[2] = "C";
chars[3] = "D";
chars[4] = "E";
chars[5] = "F";
chars[6] = "G";
chars[7] = "H";
chars[8] = "I";
chars[9] = "J";
chars[10] = "K";
chars[11] = "L";
chars[12] = "M";
chars[13] = "N";
chars[14] = "O";
chars[15] = "P";
chars[16] = "Q";
chars[17] = "R";
chars[18] = "S";
chars[19] = "T";
chars[20] = "U";
chars[21] = "V";
chars[22] = "W";
chars[23] = "X";
chars[24] = "Y";
chars[25] = "Z";



function start()
{
	
	var div_content ="";
	
	for (i=0; i<=25; i++)
	{
		var element = "lit" + i;
		div_content = div_content + '<div class="letter" onclick="check('+i+')" id="'+element+'">'+chars[i]+'</div>';
		if ((i+1) % 7 ==0) div_content = div_content + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("alphabet").innerHTML = div_content;
	
	
	showProverb();
}

String.prototype.setChar = function(place, letter)
{
	if (place > this.length - 1) return this.toString();
	else return this.substr(0, place) + letter + this.substr(place+1);
}


function check(nr)
{
	
	var hit = false;
	
	for(i=0; i<length; i++)
	{
		if (proverb.charAt(i) == chars[nr]) 
		{
			proverb1 = proverb1.setChar(i,chars[nr]);
			hit = true;
		}
	}
	
	if(hit == true)
	{
		yes.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#003300";
		document.getElementById(element).style.color = "#00C000";
		document.getElementById(element).style.border = "3px solid #00C000";
		document.getElementById(element).style.cursor = "default";
		
		showProverb();
	}
	else
	{
		no.play();
		var element = "lit" + nr;
		document.getElementById(element).style.background = "#330000";
		document.getElementById(element).style.color = "#C00000";
		document.getElementById(element).style.border = "3px solid #C00000";
		document.getElementById(element).style.cursor = "default";	
		document.getElementById(element).setAttribute("onclick",";");		
		
		//skucha
		countMiss++;
		var img = "img/s"+ countMiss + ".jpg";
		document.getElementById("gallows").innerHTML = '<img src="'+img+'" alt="" />';
	}
	
	//wygrana
	if (proverb == proverb1)
	document.getElementById("alphabet").innerHTML  = "Yes, You win!: "+proverb+'<br /><br /><span class="reset" onclick="location.reload()">AGAIN?</span>';
	
	//przegrana
	if (countMiss>=9)
	document.getElementById("alphabet").innerHTML  = "You lose, correct proverb is: "+proverb+'<br /><br /><span class="reset" onclick="location.reload()">AGAIN?</span>';
}
