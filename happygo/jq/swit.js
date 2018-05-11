


   $(function(){
   	     
	     $("#carous .race  ").eq(0).css("opacity",1).siblings(".race").css("opacity",0);
	     $("#pvc1,#pvc2").hide();
	     
	     
   	     $(".tit1 #bid  li").click(function(){
   	     	
   	     	var index = $(this).index();
   	     	$("#carous .race   ").eq(index).css("opacity",1).siblings(".race ").css("opacity",0);
   	     	
   	       
   	     	
   	     	
   	     	console.log(index); 
   	     	
   	    })
   	
   	
   	    $("#carous ,#pvc1,#pvc2, #pvc3, #pvc4").mouseenter(function(){
   	    	
 	    	$("#pvc1,#pvc2,#pvc3, #pvc4").show();
   	    	
   	    	
   	    	
   	    })
   	
   	
   	  $("#carous ").mouseleave(function(){
   	    	
 	    	$("#pvc1,#pvc2,#pvc3, #pvc4").hide();
   	    	
   	    	
   	    	
   	    })
   	
   	
   	
   	
   	
   	
   	
   	
   	
   	
   })
