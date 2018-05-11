
$(function(){
	refresh();
	
	
	
	$(".sweep").click(function(){
		
		
		$("#bmw").children("li").remove();
		 $("#collect").html("总价："+"0");
		 var arr = JSON.parse($.cookie("cart"));
		  var arr = [];
//		 for(var i = 0;i<arr.length;i++){
//		 	arr.splice(i, 1); //删除第index个数据
//		 	
//		 }
			
			$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
			
			//判断是否全选了
			isAllChecked(); //此时购物车里的单选为空
			//刷新界面
			refresh();
			
	})
	
	
	
	
	
	
	
	function refresh(){
		
		//1， 获取cookie中保存的购物车数据
		var arr = $.cookie("cart");
		
//		console.log(arr);//刷新时打印
		
		if(arr){
			arr = JSON.parse(arr); //解析
						
				//先清空ul中的li节点
				$("#bmw").empty();
			//然后再创建新的li节点
			
			var totalPrice = 0; //总价	
			
			var sum = 0;
			
			
			
			//遍历出购物车中的每个对象，创建节点显示数据
			for(var i = 0 ;i<arr.length;i++){
				var obj = arr[i];
							
				//创建li节点
				var li = $("<li></li>").appendTo("#bmw");
			//判断当前商品是否勾选
				if (obj.checked) {
					$('<input class="ckbox" type="checkbox" checked />').appendTo(li); 
				}else {
					$('<input class="ckbox" type="checkbox"  />').appendTo(li); 
				}
				
				//图片名称规格
				$("<img class='img' src="+obj.img+ " />     ").appendTo(li); 
				$("<span class='name'>"+obj.name+"</span>").appendTo(li); 
				$("<span class='unit'>"+obj.unit+"</span>").appendTo(li); 
				$("<span class='price'>"+obj.price+"</span>").appendTo(li); 
				
				//计数按钮
				 $("<input class='reduce' type='button' value='-' />").appendTo(li); 
				  $("<input class='num' type='text' value="+obj.num+ "  />").appendTo(li); 
				 $("<input class='add' type='button' value='+' />").appendTo(li); 
				
				//删除按钮
				$("<span class='price2'>0</span>").appendTo(li); 
				$("<a class='del' href='javascript:;'>删除</a>").appendTo(li);
				
				//计算总价
				if(obj.checked){
					totalPrice += obj.price * obj.num;
					sum += obj.num;
				}
				
			}
			 $("#collect").html("总价："+totalPrice);
			 $("#stics").html(sum);
			
		}else{
			
			console.log("购物车已经清空");
		}
		  
		 
		
		
		 
	}
	
	
	
	//+
				$("#bmw").on("click", ".add", function(){
					var index = $(this).index("#bmw .add"); // 购物车里的+ 排序
					//console.log(index);
					
					//修改cookie中的数据
					var arr = JSON.parse($.cookie("cart"));
					arr[index].num++;
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					//刷新界面
					refresh();
				})
				
	//-
				$("#bmw").on("click", ".reduce", function(){
					var index = $(this).index("#bmw .reduce");
					
					//修改cookie中的数据
					var arr = JSON.parse($.cookie("cart"));
					arr[index].num--;
					if (arr[index].num <= 0) {
						arr[index].num = 1;
					}
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					//刷新界面
					refresh();
	
				})
				
				
				
				
				
	//删除
				$("#bmw").on("click", ".del", function(){
					var index = $(this).index("#bmw .del");
					
					console.log("该商品已经删除！");
					//修改cookie中的数据
					var arr = JSON.parse($.cookie("cart"));
					arr.splice(index, 1); //删除第index个数据
					$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
					
					//判断是否全选了
					isAllChecked();
					
					//刷新界面
					refresh();
					
				})
				
	
	
	//删除所选商品			
			$(".prime #flotage").click(function(){
				
				var arr = JSON.parse($.cookie("cart"));
					
				for(var i=0;i<arr.length;i++){
					 var obj = arr[i];
					
					if(obj.checked){
						var index = arr.indexOf(obj);
						console.log(arr.indexOf(obj));  //选择对象在购物车数组的下标
						
						arr.splice(index, 1);
						
						
					}
					
					
					
				}
				
				console.log(arr);
//				$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
//					
//					//判断是否全选了
//					isAllChecked();
					
					//刷新界面
//					refresh();
				
					
				})
				
						
				
				
				
	
	
	
	//单选-----是否勾选存入cookie---------------------------------------------------------------
	    	
			$("#bmw").on("click", ".ckbox", function(){
				var index = $(this).index("#bmw .ckbox");
				
				//修改cookie中的数据
				var arr = JSON.parse($.cookie("cart"));
				arr[index].checked = !arr[index].checked;
				$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
				
				//判断是否全选了
				isAllChecked();
				
				//刷新界面
				refresh();
			})
	
	
	
	    //单选 --> 全选
	//判断是否全选了, 如果全选了则勾选‘全选’， 否则不勾选‘全选’
		isAllChecked();
		function isAllChecked(){
			
			
			var arr = $.cookie("cart");
			
			if (arr) {
				
				arr = JSON.parse(arr);
				
				var sum = 0;
				for (var i=0; i<arr.length; i++) {
					sum += arr[i].checked;
				}
				
				//全选
				if (arr.length!=0 && sum == arr.length) { //如果每个单选都勾选了
					$("#allChecked").prop("checked", true);
				}
				//未全选
				else {
					$("#allChecked").prop("checked", false);
				}
				
			}
			else {
				
			}
		}
				
	//点击全选 -- 控制单选
		$("#allChecked").click(function(){
			
			//console.log( $(this).prop("checked") );
			
			var arr = JSON.parse($.cookie("cart"));
			
			for (var i=0; i<arr.length; i++) {
				//勾选了‘全选’
				if ( $(this).prop("checked") ){
					arr[i].checked = true; // 每个对象都勾选
				}
				//取消勾选‘全选’
				else {
					arr[i].checked = false;
				}
			}
			$.cookie("cart", JSON.stringify(arr), {expires:30, path:"/"});
								
			//刷新界面
			refresh();
		})			
	
	
	
	
	
	
	
})

















