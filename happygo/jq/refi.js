$(function(){
	//全局变量
//	 var arr = [];
    function update1(mess){
    	var amout = 0;
    	
    	$("#ref").click(function(){
    		amout++;
    		console.log(amout);  //得到点击下标
    		
           //当某个节点用remove()方法删除后，该节点所包含的所有后代节点将同时被删除

    		$("#xin").children("li").remove();  
    		
    		if(amout==2){
    			amout=0;
    		}
    		
    		
    		console.log("请求成功---"+mess);  //总数据
    		
    			//2，使用数据来创建节点  
			
//			var a = amout-1;
//			mess.splice(0,1);
			var arr = mess[amout];
    		for (var i=0; i<arr.length; i++) {
				var obj = arr[i]; //每个商品的数据
						
				//创建节点		
				
				var li = $("<li></li>").appendTo("#xin");
				$("<img class='fi' src="+ obj.img +" />").appendTo(li);
				$("<p class='sub1'>"+ obj.hit +"</p>").appendTo(li);
				$("<p class='sub2'>"+ obj.sign +"</p>").appendTo(li);
				$("<p class='sub3'>"+obj.cost1+ "<span>"+obj.cost2+ "</span> </p>").appendTo(li);
			    li.addClass("adjust1");
			} 
					
    		
    		
    	})
    	
    	
    	
}
	
	   

	
//1， 使用ajax获取后台的json数据
		$.ajax({
			url: "../date/shuai.json",
			success: function(data){
						
						
			   update1(data);  //请求成功更新数据
				
				var arr = data[0];
    		    for (var i=0; i<arr.length; i++) {
				var obj = arr[i]; //每个商品的数据
						
				//创建节点		
				
				var li = $("<li></li>").appendTo("#xin");
				$("<img class='fi' src="+ obj.img +" />").appendTo(li);
				$("<p class='sub1'>"+ obj.hit +"</p>").appendTo(li);
				$("<p class='sub2'>"+ obj.sign +"</p>").appendTo(li);
				$("<p class='sub3'>"+obj.cost1+ "<span>"+obj.cost2+ "</span> </p>").appendTo(li);
			    li.addClass("adjust1");
			} 
					
	},
					error: function(){
						alert("请求失败， 请重试");
					}
				})
				
})



























