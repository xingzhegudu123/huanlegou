

  $(function(){
  	
        $(" #aside ul li  ").mouseenter(function(){
    	
    	
    	$(this).css({background:"#e7f5f0",color:"#0086B3" }).siblings().css({background:"#dee1e0",color:"#666" });
    	
         var index = $(this).index(" #aside ul li");
    	 
    	var befo = $(".menu2  #me-list li").eq(index);
    	
    	befo.css("display","block");
    	
    	befo.mouseenter(function(){
    		befo.css("display","block");
    		
    	})
    	
    	
    	console.log(index);
    	
    })
  	
	
	  $(" #aside ul li  ").mouseleave(function(){
	 	
	 	 var index = $(this).index(" #aside ul li");//  获得当前移入的侧边栏下标
	 	
	 	var befo =$(".menu2  #me-list li").eq(index);  //当前li对象
	 	befo.css("display","none");
	 	
	 	
	    befo.mouseleave(function(){
	   	
	   	befo.css("display","none");
	   	
	   	
	   })
	 	
	 })
  	
  	
  	
  	
  	
  	
  	
  	
  	
  })




























