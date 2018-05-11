
$(function(){
	
	
	function goal2(beq){
		$("#indin ul li ").mouseenter(function(){
	        var index =  $(this).index(); //获得下标
	        
	        $("#nation").children("li").remove();  
	        
	        goal(beq,index);
	      
		
					
	        
		 
	
		
		
	})
}	


	
	
	   var arr =[];
	
	
	function goal(data,index){
		
	  var brr = JSON.parse(data);
		arr = brr[index];
	    for (var i=0; i<arr.length; i++) {
		var obj = arr[i]; //每个商品的数据
				
		//创建节点		
		
		var li = $("<li></li>").appendTo("#nation");
		$("<img class='dl' src="+ obj.img +" />").appendTo(li);
		$("<p class='so1'>"+ obj.hit +"</p>").appendTo(li);
		$("<p class='so2'>"+ obj.sign +"</p>").appendTo(li);
		$("<p class='so3'>"+obj.cost1+ "<span>"+obj.cost2+ "</span> </p>").appendTo(li);
	    li.addClass("hard");
			
	    }
		
}
	
	
	
	
	
	
	 
	
	 	$.ajax({
	 		url: "http://127.0.0.1/week09/happygo/phpcode/skin03.php",
//			url: "../date/beauty.json",
			success: function(data){
						
						
			   goal(data,0);  //请求成功更新数据
			   goal2(data); //传给移入
				
					
	},
					error: function(){
//						alert("请求失败， 请重试");
					}
		})
	 
	 
	 
	 
	 //点击商品进入详情
		$("#nation").on("click", "li", function(){
			//console.log(this.id)
			
			//所点击的商品的下标
			var index = $(this).index();
//		console.log(index);
			
			//获取所点击的商品数据
			var obj = arr[index];
			console.log(obj.id);
			
			//进入详情
			location.href = "detail.html?id=" + obj.id;
			
		})

		
		
		
})

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	


























