
onload = function(){
	var bid = document.getElementById("bid");
	var live = bid.getElementsByTagName("li");
	
	var bid2 = document.getElementById("carous");
	var yi = bid2.getElementsByTagName("ul");
	
	yi[0].style.display="block";
	
	for(var i = 0;i<live.length;i++){
		 live[i].index = i;
		
		live[i].onclick = function(){
//			console.log(this.index);

             for(var i = 0 ;i<yi.length;i++){
             	yi[i].style.display="none"; 
             }

			yi[this.index].style.display="block";  
			  
			  
			
		}
		
		
		
		
		
		
	}
	
}	
	
	
	
	
	
	
	
	
	
	
	
	
	






























