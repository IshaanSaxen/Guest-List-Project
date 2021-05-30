var names_of_guest= [];
    
function submit()
{
    var GuestName = document.getElementById("name1").value;
	names_of_guest.push(GuestName);   
   document.getElementById("display_name").innerHTML=names_of_guest.toString();
	
   }
   function show()
{
	var i= names_of_guest.join("<br>");	
	document.getElementById("para1").innerHTML=i.toString();
	document.getElementById("sort_button").style.display="block";
	}

function sorting()
{
	names_of_guest.sort();
	var i= names_of_guest.join("<br>");    
	document.getElementById("sorted").innerHTML=i.toString();
	}
function searching()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<names_of_guest.length; j++)
		{
			if(s==names_of_guest[j]){
				found=found+1;
			}	
		}
	document.getElementById("para2").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}