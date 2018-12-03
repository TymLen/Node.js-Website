//getProjects.js

function GetData(page){
	
	var xhttp = new XMLHttpRequest();	
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){		
			var htmlText ='';
			if(this.responseText != null){
				var resObj = this.responseText;
				var splitObj = resObj.split(';,');
				var htmlText ='';
				var i;
				for(i = 0; i < splitObj.length; i = i+5){
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
								htmlText = htmlText+'<td>'+splitObj[i+1]+'</td>'
							htmlText = htmlText+'</tr>';
							htmlText = htmlText+'<tr>';
								htmlText = htmlText+'<td><b>Date:</b></td>';
								htmlText = htmlText+'<td>'+splitObj[i+3]+'</td>';
							htmlText = htmlText+'</tr>';
							htmlText = htmlText+'<tr>';
								htmlText = htmlText+'<td><b>Description</b></td>';
								htmlText = htmlText+'<td>'+splitObj[i+2]+'</td>';
							htmlText = htmlText+'</tr>';
						htmlText = htmlText+'</table>';
						htmlText =htmlText+'</div>';
						htmlText =htmlText+'</div>';
				}
				document.getElementById("projects").innerHTML = htmlText;	
			}else{
				htmlText = "Database error. Please try again later";
				document.getElementById("projects").innerHTML = htmlText;
			}
			
		}
	}
	if(page == "home"){
		xhttp.open("GET", "/getCurrent", false);
				
	}else{
		xhttp.open("GET", "/getProjects", false);		
	}
	xhttp.send();
}
function GetSkills(){
	
	var xhttp = new XMLHttpRequest();	
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){		
			var htmlText ='';
			if(this.responseText != null){
				var resText = JSON.parse(this.responseText);
				var resKeys = Object.keys(resText);
				htmlText = htmlText+'<div class="contentBox">';
					htmlText = htmlText+'<div class="projectDesc"><table>';
						htmlText = htmlText+'<tr>';
							htmlText = htmlText+'<td><b>Skill Tag:</b></td>';
							htmlText = htmlText+'<td><b>Number of Projects</b></td>';
							htmlText = htmlText+'<td><b>Projects</b></td>';
						htmlText = htmlText+'</tr>';
					for(var i = 0; i < resKeys.length; i++){
						var skillKey = resText[resKeys[i]];
						htmlText = htmlText+'<tr>';
							htmlText = htmlText+'<td>'+resKeys[i]+'</td>';
							htmlText = htmlText+'<td>'+resText[resKeys[i]].number+'</td>';
							var splitTitle = resText[resKeys[i]].title.split(',');
							htmlText = htmlText+'<td>';
								for(var j = 0; j < splitTitle.length; j++){
									htmlText= htmlText+'<button type="button" onclick="overlayOn(\''+splitTitle[j]+'\')">'+splitTitle[j]+'</button>';
								}
							htmlText = htmlText+'</td>';
						htmlText = htmlText+'</tr>';
					}
					htmlText = htmlText+'</table>';
					htmlText =htmlText+'</div>';
				htmlText =htmlText+'</div>';
				/*var resObj = this.responseText;
				var splitObj = resObj.split('"');
				splitObj.shift();
				htmlText = htmlText+'<div class="contentBox">';
				htmlText = htmlText+'<div class="projectDesc"><table>';
				htmlText = htmlText+'<tr>';
								htmlText = htmlText+'<td><b>Skill Tag:</b></td>';
								htmlText = htmlText+'<td><b>Number of Projects<b></td>';
							htmlText = htmlText+'</tr>';
				for(var i = 0; i <splitObj.length; i=i+2){
					splitObj[i+1] = splitObj[i+1].replace(':', '');
					splitObj[i+1] = splitObj[i+1].replace(',', '');
				splitObj[i+1] = splitObj[i+1].replace('}', '');
					htmlText = htmlText+'<tr>';
					htmlText = htmlText+'<td>'+splitObj[i]+'</td>';
								htmlText = htmlText+'<td>'+splitObj[i+1]+'</td>';
							htmlText = htmlText+'</tr>';
				}
				htmlText = htmlText+'</table>';
				htmlText =htmlText+'</div>';
				htmlText =htmlText+'</div>';
				
				
				*/document.getElementById("skillBox").innerHTML = htmlText;	
			}else{
				htmlText = "Database error. Please try again later";
				document.getElementById("skillBox").innerHTML = htmlText;
			}
			
		}
	}
	xhttp.open("GET", "/reqSkills", false);
	xhttp.send();
}