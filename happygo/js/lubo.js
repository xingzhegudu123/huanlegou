
		
	function kimi(id){
				return document.getElementById(id);
			}
			onload = function(){
			
				ajax({
					url: "lunbo.json",
					success: function(data){
						//console.log(data);
						
						var arr = JSON.parse(data);
						
						for (var i=0; i<arr.length; i++) {
							var obj = arr[i];
							
							var li = document.createElement("li");
							document.getElementById("list").appendChild(li);						
						    li.innerHTML = "<img src="+ obj.img +">"; 
						    
						    var li2 = document.createElement("li");
							document.getElementById("list2").appendChild(li2);						
//						    li2.innerHTML = i+1; 
						    if (i == 0) {
						    	li2.className = "active";
						    }
						}
						
						//开始轮播
						lunbo();
					}
				});
				
				
				
				
				
				
				
			function lunbo (){
				
				var box = kimi("box");
				var ul = kimi("list");
				var ul2 = kimi("list2");
				
				var aLi = ul.getElementsByTagName("li");
				var aLi2 = ul2.getElementsByTagName("li");
				
				
				
				
				//默认显示第一个图
				aLi[0].style.opacity = 1;
				aLi[0].style.filter = 'alpha(opacity=100)';
				aLi2[0].style.opacity = 1;
				aLi2[0].style.filter = 'alpha(opacity=100)';
				
				
				var size = aLi.length;
				var n = 0;
				
				
			var timer =	setInterval(function(){
					n++;
					move();
					
				},5000);
				
			function move(){
				//左边界
				if(n<0){
					n = size-1;
				}
				
				//右边界
				if(n>=size){
					n=0;
					
				}
				
				for(var i=0;i<aLi.length;i++){//6
				  if(i==n){
				  	animate(aLi[n],{"opacity":100});
				    aLi2[n].className="active";
				  }else{
				  	animate(aLi[i],{"opacity":0});
				  	aLi2[i].className="";
				  }
				
				}
		}
				
			//移入aLi2中的li
				for(var i = 0 ;i<aLi2.length;i++){
					  aLi2[i].index = i;
					   aLi2[i].onmouseenter = function(){
					   	      n = this.index;
					   	      move();
					   	
					   }
					
			}
				
	    //上一页
	      kimi("prev").onclick = function(){
	      	  n--;
	      	  move();
	     }
	    
	     //下一页
	      kimi("next").onclick = function(){
	      	  n++;
	      	  move();
	     }
	    
	    
	    
	    
	    
	    
	    
	    //移入box关闭定时器， 移出box把定时器重新开启
	       for(var i = 0 ;i<aLi.length;i++){
	       	   aLi[i].onmouseenter = function(){
	       	   	   clearInterval(timer);
	       	   	}
	       	
	       	aLi[i].onmouseleave =function(){
	       	       clearInterval(timer);
	       	timer = setInterval(function(){
	       			  
	       			n++;
	       			move();
	       			
	       		},3000);
	       		
	       		
	       		
	       	}
	       	
	       	
	       	
	       	
	       }
	    
	    
	    
	    
			
		}
			
			

		
	}	
		
		