//overlay.js
function overlayOn(info){
	document.getElementById("overlay").style.display = "block";
	var xhttp = new XMLHttpRequest();	
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){	
			var resObj = this.responseText;
			var splitObj = resObj.split(';,');
			var htmlText ='';
			var i;
			for(i = 0; i < splitObj.length; i = i+6){
				htmlText = htmlText+'<div class="contentBox">';
				splitObj[i+4] = splitObj[i+4].replace(';','');
				htmlText = htmlText+'<img src='+splitObj[i+4]+' alt="'+splitObj[i]+'" class="projIcon" align="left" onclick="overlayOn(\''+splitObj[i]+'\')">';
				htmlText = htmlText+'<div class="projectDesc"><table>';		
				htmlText = htmlText+'<tr>';
							htmlText = htmlText+'<td><b>Title:</b></td>';
							htmlText = htmlText+'<td>'+splitObj[i]+'</td>';
						htmlText = htmlText+'</tr>';
						htmlText = htmlText+'<tr>';
							htmlText = htmlText+'<td><b>Status:</b></td>';
							htmlText = htmlText+'<td>'+splitObj[i+1]+'</td>';
						htmlText = htmlText+'</tr>';
						htmlText = htmlText+'<tr>';
							htmlText = htmlText+'<td><b>Date:</b></td>';
							htmlText = htmlText+'<td>'+splitObj[i+3]+'</td>';
						htmlText = htmlText+'</tr>';
						htmlText = htmlText+'<tr>';
							htmlText = htmlText+'<td><b>Skill Tags:</b></td>';
							htmlText = htmlText+'<td>'+splitObj[i+5]+'</td>';
						htmlText = htmlText+'</tr>';
						htmlText = htmlText+'<tr>';
							htmlText = htmlText+'<td><b>Description</b></td>';
							htmlText = htmlText+'<td>'+splitObj[i+2]+'</td>';
						htmlText = htmlText+'</tr>';
					htmlText = htmlText+'</table>';
					htmlText =htmlText+'</div>';
					htmlText =htmlText+'</div>';
			}
			document.getElementById("projectsLong").innerHTML = htmlText;	
		}	
	}
	xhttp.open("POST", "/getMoreInfo", false);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("title="+info);
}
function overlayOff() {
	document.getElementById("projectsLong").innerHTML = "";
	document.getElementById("overlay").style.display = "none";
}