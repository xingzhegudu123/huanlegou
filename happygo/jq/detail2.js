
$(function(){
	
	
	  //放大系数
	var scale = $("#bigImg").width() / $("#smallImg").width();
	//在小图中移动
	
	$("#smallImg").mousemove(function(e){
			$("#smallArea").show(); //显示小区域
			$("#bigArea").show(); //显示大区域
		   
		   var x = e.pageX - $("#smallImg").offset().left - $("#smallArea").width()/2;
		   var y = e.pageY - $("#smallImg").offset().top - $("#smallArea").height()/2;
		   
		  //控制不超出左右边界
				if (x < 0){
					x = 0;
				}
				else if (x > $("#smallImg").width()-$("#smallArea").width()){
					x = $("#smallImg").width()-$("#smallArea").width();
				}
				//控制不超出上下边界
				if (y < 0){
					y = 0
				}
				else if (y > $("#smallImg").height()-$("#smallArea").height()) {
					y = $("#smallImg").height()-$("#smallArea").height();
				}
					
					
					
				//小区域移动
		
		       $("#smallArea").css({left:x, top:y});
				
	           //大图移动
				$("#bigImg").css({left: -scale*x,top: -scale*y});
	   
	   
	 
	
	     //移除小图
			$("#smallImg").mouseleave(function(){
				$("#smallArea").hide(); //隐藏小区域
				$("#bigArea").hide(); //隐藏大区域
			})
		
		
		
		
		
		
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	//-------------------------拿到传过来的商品id----------------------------------------------
	//url参数部分: ?id=102&pwd=11
			var str = location.search;
			//console.log(str);
			
			var myId = getParam(str, "id");
//           console.log(myId);
	
	        //更新界面
				function refreshUI(obj){
					$("#pic").attr("src", obj.img);
					
					$("#bigImg").attr("src", obj.img);
					$(".gu1").html(obj.sign);
					$(".gu2").html(obj.hit);
					$(".gu3 .lg3").html("¥"+obj.cost1);
					$(".gu3 .lg2").html("¥"+obj.cost2);
					
				}
	
	
	      //获取str中属性name的值
				function getParam(str, name){
					str = str.substring(1); //id=102&pwd=11
					
					var arr = str.split("&");
					for (var i=0; i<arr.length; i++){
						var str1 = arr[i]; //id=102 / pwd=11
						
						var arr1 = str1.split("=");
						if (arr1[0] == name) {
							return arr1[1];
						}
					}
					return "";
				}
	
	
	              var obj2 = { };
	              
	              var liang = 1;
	
	    //从本地json中获取商品，匹配id
				$.ajax({
					url: "../date/beauty.json",
					success: function(data){
						//console.log(data);
						
						//遍历json中所有的商品
						var arr = data;
						for (var i=0; i<arr.length; i++) {
							for(var j = 0;j<arr[0].length;j++){
								var obj = arr[i][j];
								
								if (obj.id == myId){
//								 console.log(obj.id);
                                   obj2 = obj;
//                                console.log(obj2.id);
								//更新界面
								refreshUI(obj);
							}
						}
							
						
						}						
					},
					error: function(){
						alert("请求失败");
					}
				});
				
	        
	        
	        
	        $.ajax({
					url: "../date/food.json",
					success: function(data){
						//console.log(data);
						
						
						var arr = data; //总数据
						                    //遍历所有商品
						for(var i = 0;i<arr.length;i++){
							var brr = arr[i][0];
							for(var j = 1; j<brr.length;j++){
								    
								    var obj = brr[j];
								       if(obj.id==myId){
								       	    obj2 = obj;
//                             
								          refreshUI(obj);
								       	
								       	 }
								
							}
							    var crr = arr[i][1];
							for(var k = 0; k<crr.length;k++){
								   
								   var obj = crr[k];
								      if(obj.id==myId){
								       	    obj2 = obj;
//                             
								          refreshUI(obj);
								       	
								       	 }
								
							}
							
							 
							
							
						}
						
									
					},
					
					
					
					
					
					
					
					
					
					
					error: function(){
						alert("请求失败");
					}
				});
				
	
	
	      
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//两个都会添加商品对象到数组
	
	$("#dum ").on("click", ".once1", function(e){
	   e.stopPropagation(); //阻止冒泡
	   e.preventDefault();	//阻止浏览器默认行为		
			//1， 先获取要加入购物车的数据
			// index() : 
			//   1，如果没有参数，则默认按照兄弟节点排序
			//   2， 如果有参数（选择器），则就会按照选择器所匹配的所有元素进行排序    
//			var index = $(this).index("#dum a");
//			console.log(index);
              //获取到当前点击的商品数据
//					var obj = arr[index];
					
					
					//2, 将数据存入cookie
					// cart : [
					//			{id:101, name:"单车"}，
					//			{id:101, name:"单车"}， 
					//			{id:101, name:"单车"}
					//		  ]
					
					//定义一个数组，保存所有加入购物车的商品数据
					// 先要获取原来存在cookie中的商品数据
					var cookieArr = $.cookie("cart") ? JSON.parse($.cookie("cart")) : [];
					
					//判断原来cookie中是否已经存在相同商品
					for (var i=0; i<cookieArr.length; i++) {
						if (cookieArr[i].id == obj2.id) {
							cookieArr[i].num+= liang; //数量+1
							break;
						}
					}
					//如果for循环全部循环完，没有进入if，则表示不存在相同商品，那么我们就添加新商品到数组中
					if (i == cookieArr.length) {
						//添加新商品
						var myObj = {
							id: obj2.id,
							name: obj2.hit,
							unit: obj2.sign,
							price: obj2.cost1,
							img: obj2.img,
							num: liang, //数量
							checked: true  //是否勾选
						}
						cookieArr.push(myObj);
					}
										
					//存入cookie(覆盖原来的cookie)
					$.cookie("cart", JSON.stringify(cookieArr), {expires:30, path:"/"});
					console.log( $.cookie("cart") );

})
           


     //+
		$("#dum .add").click(function(){
					
			             	liang++;
							$("#dum .num").val(liang);
							
	})
				
	//-
		$("#dum .reduce").click(function(){
			
				liang--;
				if(liang<=0){
				   liang=1;
				}
							
							
				$("#dum .num").val(liang);
							
		})











})










