


    
  onscroll = onresize = fn;

 function fn(){
     	
     	var s1 = document.getElementsByClassName("top")[0];
     	var s2 = document.getElementsByClassName("logo")[0];
     	var s3 = document.getElementsByClassName("nav")[0];
     	var s4 = document.getElementsByClassName("banner")[0];
     	
     	var s5 = document.getElementsByClassName("board")[0];//顶部栏
     	
         var sider = document.getElementById("sideBar");
         var totop = sider.getElementsByClassName("come6")[0]; // 回到顶部
      
     
       var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var winH = document.documentElement.clientHeight;
     	 
  	    sider.style.height= winH+"px";
//	    sider.style.top = 10+"px";
     	  
 	    var kv = s1.offsetHeight + s2.offsetHeight + s3.offsetHeight + s4.offsetHeight;
 	      //kv = sd;
 	    var sd = s4.offsetHeight+s4.offsetTop;


     	   
     	   
     	  if(scrollTop>=sd){ 
     	  
     	  	s5.style.display = "block";
//   	  	s5.style.top = scrollTop+"px";
     	  }else{
   	  	     s5.style.display = "none";
     	  }
     	  
     	
     	
     	
     	
     	
     	//缓冲动画回到顶部
     	
     	totop.onclick = function(){
					
					//非动画方式回到顶部
					//document.documentElement.scrollTop = 0
					//document.body.scrollTop = 0
					
					//动画方式回到顶部
				 	var timer = setInterval(function(){
						
						//1, 获取当前值
						var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
						
						console.log(scrollTop);
						
						
						
						//2, 速度
						var speed = (0-scrollTop)/5;
						speed = Math.floor(speed);
						
						//3, 临界值
						if (scrollTop == 0) {
							clearInterval(timer);
							return; 
						}
						
						//4， 运动
						document.documentElement.scrollTop = scrollTop + speed;
						document.body.scrollTop = scrollTop + speed;
						
					}, 30);
					
				}
     	
     	
     	
     	
    
     	 
     


}	
	







