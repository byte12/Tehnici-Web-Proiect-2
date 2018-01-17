var check = 0;

var memorie = 0;


/*function debugging()
{
	document.getElementById("debug").innerHTML = document.frm.rezultat.value.slice(-1);
}*/

function memoryClear() 
{
	memorie = 0;
	document.getElementById("memorie").style.visibility = "hidden";
	
}

function memoryPlus()
{
	var evalo = eval(document.frm.rezultat.value);
	memorie += evalo;
	
	document.getElementById("memorie").innerHTML = "M:" + memorie;
	document.getElementById("memorie").style.visibility = "visible";
}

function memoryMinus()
{
	var evalo = eval(document.frm.rezultat.value);
	memorie -= evalo;
	
	document.getElementById("memorie").innerHTML = "M:" + memorie;
	document.getElementById("memorie").style.visibility = "visible";
}

function memoryRead()
{
	var input = document.frm.rezultat.value;

	
	
	if( input.slice(-1).charCodeAt(0)  >= 37 && input.slice(-1).charCodeAt(0) <= 47 && input.slice(-1).charCodeAt(0) != 46)
	{
		document.frm.rezultat.value += memorie;
	}
	else
	{
		document.frm.rezultat.value = memorie;
	}
}

function calcRadical()
{
	var evalo = eval(document.frm.rezultat.value);
	
	if( Math.sqrt(evalo) % 1 == 0)
	{
		check = 0;
	}
	else
	{
		check = 1;
	}
	
	document.frm.rezultat.value = Math.sqrt(evalo);
}


function run1()	
{
	var input = document.frm.rezultat.value;

	if(input == 0 && input.length == 1)
	{
		document.frm.rezultat.value = input.substring(0, input.length - 1);
		document.frm.rezultat.value += "1";

	}
	else if(input.slice(-1) == 0 && input.slice(-2).charCodeAt(0)  >= 37 && input.slice(-2).charCodeAt(0) <= 47 && input.indexOf('.') == -1 )
		{
			document.frm.rezultat.value = input.substring(0, input.length - 1);
			document.frm.rezultat.value += "1";
		
		}
		else
		{
			document.frm.rezultat.value += "1";
		}
	

}

function run2()	
{
	var input = document.frm.rezultat.value;
	
	if(input == 0 && input.length == 1)
	{
		document.frm.rezultat.value = input.substring(0, input.length - 1);
		document.frm.rezultat.value += "2";

	}
	else if(input.slice(-1) == 0 && input.slice(-2).charCodeAt(0)  >= 37 && input.slice(-2).charCodeAt(0) <= 47 && input.indexOf('.') == -1 )
		{
			document.frm.rezultat.value = input.substring(0, input.length - 1);
			document.frm.rezultat.value += "2";
		
		}
		else
		{
			document.frm.rezultat.value += "2";
		}
}

function run3()	
{
	var input = document.frm.rezultat.value;
	
	if(input == 0 && input.length == 1)
	{
		document.frm.rezultat.value = input.substring(0, input.length - 1);
		document.frm.rezultat.value += "3";

	}
	else if(input.slice(-1) == 0 && input.slice(-2).charCodeAt(0)  >= 37 && input.slice(-2).charCodeAt(0) <= 47 && input.indexOf('.') == -1 )
		{
			document.frm.rezultat.value = input.substring(0, input.length - 1);
			document.frm.rezultat.value += "3";
		
		}
		else
		{
			document.frm.rezultat.value += "3";
		}
}

function adunare()	
{

		var input = document.frm.rezultat.value;
		if(input.slice(-1).charCodeAt(0) >= 37 && input.slice(-1).charCodeAt(0) <= 47 )
		{
			document.frm.rezultat.value = input.substring(0, input.length - 1);
			document.frm.rezultat.value += "+";
			check = 0;
		}
		else
		{
			document.frm.rezultat.value += "+";
			check = 0;
		}
}


function run4()	
{
	var input = document.frm.rezultat.value;
	
	if(input == 0 && input.length == 1)
	{
		document.frm.rezultat.value = input.substring(0, input.length - 1);
		document.frm.rezultat.value += "4";

	}
	else if(input.slice(-1) == 0 && input.slice(-2).charCodeAt(0)  >= 37 && input.slice(-2).charCodeAt(0) <= 47 && input.indexOf('.') == -1 )
		{
			document.frm.rezultat.value = input.substring(0, input.length - 1);
			document.frm.rezultat.value += "4";
		
		}
		else
		{
			document.frm.rezultat.value += "4";
		}
}


function run5()	
{
	var input = document.frm.rezultat.value;
	
	if(input == 0 && input.length == 1)
	{
		document.frm.rezultat.value = input.substring(0, input.length - 1);
		document.frm.rezultat.value += "5";

	}
	else if(input.slice(-1) == 0 && input.slice(-2).charCodeAt(0)  >= 37 && input.slice(-2).charCodeAt(0) <= 47 && input.indexOf('.') == -1 )
		{
			document.frm.rezultat.value = input.substring(0, input.length - 1);
			document.frm.rezultat.value += "5";
		
		}
		else
		{
			document.frm.rezultat.value += "5";
		}
}


function run6()	
{
	var input = document.frm.rezultat.value;
	
	if(input == 0 && input.length == 1)
	{
		document.frm.rezultat.value = input.substring(0, input.length - 1);
		document.frm.rezultat.value += "6";

	}
	else if(input.slice(-1) == 0 && input.slice(-2).charCodeAt(0)  >= 37 && input.slice(-2).charCodeAt(0) <= 47 && input.indexOf('.') == -1 )
		{
			document.frm.rezultat.value = input.substring(0, input.length - 1);
			document.frm.rezultat.value += "6";
		
		}
		else
		{
			document.frm.rezultat.value += "6";

		}
}


function scadere()	
{
	var input = document.frm.rezultat.value;
	

		if(input.slice(-1).charCodeAt(0) >= 37 && input.slice(-1).charCodeAt(0) <= 47 )
		{
			document.frm.rezultat.value = input.substring(0, input.length - 1);
			document.frm.rezultat.value += "-";
			check = 0;
		}
		else
		{
			document.frm.rezultat.value += "-";
			check = 0;
		}
}

function run7()	
{
	var input = document.frm.rezultat.value;
	
	if(input == 0 && input.length == 1)
	{
		document.frm.rezultat.value = input.substring(0, input.length - 1);
		document.frm.rezultat.value += "7";

	}
	else if(input.slice(-1) == 0 && input.slice(-2).charCodeAt(0)  >= 37 && input.slice(-2).charCodeAt(0) <= 47 && input.indexOf('.') == -1 )
		{
			document.frm.rezultat.value = input.substring(0, input.length - 1);
			document.frm.rezultat.value += "7";
		
		}
		else
		{
			document.frm.rezultat.value += "7";
		}

}


function run8()	
{
	var input = document.frm.rezultat.value;
	
	if(input == 0 && input.length == 1)
	{
		document.frm.rezultat.value = input.substring(0, input.length - 1);
		document.frm.rezultat.value += "8";

	}
	else if(input.slice(-1) == 0 && input.slice(-2).charCodeAt(0)  >= 37 && input.slice(-2).charCodeAt(0) <= 47 && input.indexOf('.') == -1 )
		{
			document.frm.rezultat.value = input.substring(0, input.length - 1);
			document.frm.rezultat.value += "8";
		
		}
		else
		{
			document.frm.rezultat.value += "8";
		}
}


function run9()	
{
	var input = document.frm.rezultat.value;
	
	if(input == 0 && input.length == 1)
	{
		document.frm.rezultat.value = input.substring(0, input.length - 1);
		document.frm.rezultat.value += "9";

	}
	else if(input.slice(-1) == 0 && input.slice(-2).charCodeAt(0)  >= 37 && input.slice(-2).charCodeAt(0) <= 47 && input.indexOf('.') == -1 )
		{
			document.frm.rezultat.value = input.substring(0, input.length - 1);
			document.frm.rezultat.value += "9";
		
		}
		else
		{
			document.frm.rezultat.value += "9";
		}
}

function impartire()	
{	
	var input = document.frm.rezultat.value;
		if(input.slice(-1).charCodeAt(0) >= 37 && input.slice(-1).charCodeAt(0) <= 47 )
		{
			document.frm.rezultat.value = input.substring(0, input.length - 1);
			document.frm.rezultat.value += "/";
			check = 0;
		}
		else
		{
			document.frm.rezultat.value += "/";
			check = 0;
		}
}


function run0()	
{
	input = document.frm.rezultat.value;
	
	if((input.slice(-1) != 0 && input.length >= 1) || check == 1)
	{
		document.frm.rezultat.value += "0";
	}
	
}


function punct()	
{
	var input = document.frm.rezultat.value;
	
		if(check == 0)
		{
			if(input.slice(-1).charCodeAt(0) >= 37 && input.slice(-1).charCodeAt(0) <= 47 )
			{
				document.frm.rezultat.value = input.substring(0, input.length - 1);
				document.frm.rezultat.value += ".";
				check = 1;
			}
			else
			{
				
				document.frm.rezultat.value += ".";
				check = 1;
			}
		}
}


function procent()	
{
		var evalo = eval(document.frm.rezultat.value)
		
		document.frm.rezultat.value = evalo/100;
		
		check = 1;
		
}

function inmultire()	
{
	var input = document.frm.rezultat.value;
	

			if(input.slice(-1).charCodeAt(0) >= 37 && input.slice(-1).charCodeAt(0) <= 47 )
			{
				document.frm.rezultat.value = input.substring(0, input.length - 1);
				document.frm.rezultat.value += "*";
				check = 0;
			}
			else
			{
				document.frm.rezultat.value += "*";
				check = 0;
			}
		
}

function stergeTot()
{
	check = 0;
	document.frm.rezultat.value = "0";
}

function sterge()
{
	var input = document.frm.rezultat.value;
	
	if( input.slice(-1).charCodeAt(0) >= 37 && input.slice(-1).charCodeAt(0) <= 47 )
	{
		if(input.slice(-1).charCodeAt(0) == 46)
		{
			check = 0;
		}
		else
		{
			check = 1;
		}
		
	}
	
	document.frm.rezultat.value = input.substring(0, input.length - 1);
	
	if(input.length == 1)
	{
		document.frm.rezultat.value += "0";
	}
	else
	{
		document.frm.rezultat.value += "";
	}
	
}

function egalCu()
{
	var evalo = eval(document.frm.rezultat.value);
	
	if ( evalo % 1 != 0 )
	{
		check = 1;
	}
	else
	{
		check = 0;
	}

	document.frm.rezultat.value = evalo;
}