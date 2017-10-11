var str = prompt("Vvedite uravnenie");
var x = 0;

for(var i = 0; i < str.length; i++)
{
	if(str[i] == "(")
		x++;
	else 
		if(str[i] == ")")
		x--;
	if(x < 0)
		break;
}

if(x == 0)
  alert(true);
else
  alert(false);