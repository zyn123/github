window.onload=function(){
	var signup=document.getElementsByClassName('signup-x');
	// for(var i=0;i<signup.length;i++){
	// 	signup[i].index=i;
		signup[0].onfocus=function(){
			signup[0].value=" ";
		}		
	// }
	signup[1].onfocus=function(){
			signup[1].value=" ";
	}
	signup[2].onfocus=function(){
		signup[2].value=" ";
	}
	var search=document.getElementById('search');
	search.onfocus=function(){
		search.value=" ";
	}
	// search.onbulr=function(){
	// 	search.value="Search Github";
	// }


};