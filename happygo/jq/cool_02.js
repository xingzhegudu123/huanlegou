
$(function(){
	
	
	
	// 上面ul--点击商品进入详情
		$("#best1").on("mouseenter", "li", function(){
			
			var index = $(this).index();           // slideDown   fadeIn（  高度增加）来显示元素
//			$("#best1 li img ").eq(index).css("display","none").fadeIn(); //先隐藏   淡入显示
			
		
			
		
			
		})
   
	
	
	
	
	
	
	
	
	//获得移入下标
	function moon(data){
		$("#kw ul li").mouseenter(function(){
			var index = $(this).index();
			$("#best1 li, #best2 li").remove();
			sss(data,index);
			
		})
		
}
	
	
	
	
	
	
	
	var arr1=[];
	var arr2 =[];
	function sss(data,index){
		
		var brr = JSON.parse(data);
		 arr1 = brr[index][0];
		 arr2 = brr[index][1];
				
				//  第一个ul
    		    for (var i=0; i<arr1.length; i++) {  //遍历对象  第一个为图片
				var obj = arr1[i]; //
						
				//	
				if(i==0){
					var li = $("<li></li>").appendTo("#best1");
					$("<a href='#'><img src="+ obj.img+" />  </a>").appendTo(li);
					li.addClass("wind1");
					
				}else{
					var li = $("<li></li>").appendTo("#best1");
				$("<img class='dry' src="+ obj.img +" />").appendTo(li);
				$("<p class='si1'>"+ obj.hit +"</p>").appendTo(li);
				$("<p class='si2'>"+ obj.sign +"</p>").appendTo(li);
				$("<p class='si3'>"+obj.cost1+ "<span>"+obj.cost2+ "</span> </p>").appendTo(li);
			    li.addClass("wind");
			}
				
				
				
	} 
			
			//  第二个ul
			for (var i=0; i<arr2.length; i++) {  //遍历对象  第一个为图片
				var obj = arr2[i]; //
						
				var li = $("<li></li>").appendTo("#best2");
				$("<img class='dry' src="+ obj.img +" />").appendTo(li);
				$("<p class='si1'>"+ obj.hit +"</p>").appendTo(li);
				$("<p class='si2'>"+ obj.sign +"</p>").appendTo(li);
				$("<p class='si3'>"+obj.cost1+ "<span>"+obj.cost2+ "</span> </p>").appendTo(li);
			    li.addClass("wind");
				
			
			
			}
				
				
				
			
		
		
	}
	
	
	
	
	
	
	
	
	
	
	

	
		
		
	//拿到数据	
		
		$.ajax({
//			url: "../date/food.json",
		    url: "http://127.0.0.1/week09/happygo/phpcode/cool03.php",
			success: function(data){
						
			   sss(data,0);	//默认显示第一组数据
			   moon(data);  //把总数据传给鼠标移入事件
				
},
					
			error: function(){
//						alert("请求失败， 请重试");
			}

		
		
})
	 
	 
	 
	 
	 
	  // 上面ul--点击商品进入详情
		$("#best1").on("click", "li", function(){
			//console.log(this.id)
			
			//所点击的商品的下标
			var index = $(this).index();
//   		console.log(index);
			
			//获取所点击的商品数据
			var obj = arr1[index];
//			console.log(obj.id);
			
			//进入详情
			location.href = "detail.html?id=" + obj.id;
			
		})

	 
	 
		
		
	
	// 下面ul--点击商品进入详情
		$("#best2").on("click", "li", function(){
			//console.log(this.id)
			
			//所点击的商品的下标
			var index = $(this).index();
     		console.log(index);
			
			//获取所点击的商品数据
			var obj = arr2[index];
			console.log(obj.id);
			
			//进入详情
			location.href = "detail.html?id=" + obj.id;
			
		})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})


















