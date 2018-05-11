
$(function(){
	var categorysId = 0;
	var areasId = 0;
	var flag = 1;
	var list = $("#unlist");
	
		
	$("#unlist").on("click", "input", function(){
              var index = $(this).index("#unlist input");
              
             if($("#unlist  input[type=checkbox]").eq(index).is(':checked') == true){
			   console.log(index+"选中")	;//true
		      
             
             }
             
	
	})
	
	

	
		
		
		
	
	
	
	
	
	
	
	
	
	
	
	
	refresh();
	
	function refresh(){
		$("#unlist").html("")
		$.get("../date/movies.json",function(data){
			var obj = data;
			var arr = [];
			var arr2 = []//当前要显示的数据
			var arr3 = [];
			arr = obj.movies; //总数据
			
			//1 都选全部
			if(categorysId == 0 && areasId == 0){ 

				for(var i=0;i<arr.length;i++){
					arr2.push(arr[i]);  //所有对象都添加
				}

				arr2 = paixu(flag,arr2); 
				for(var i=0;i<arr2.length;i++){  //更新节点
		            var obj = arr2[i];
					
					var li = $("<li></li>").appendTo("#unlist");
					$("<img class='dry' src="+ obj.img +" />").appendTo(li);
					$("<p class='sl1'>"+ obj.hit +"</p>").appendTo(li);
					$("<p class='sl2'>"+ obj.sign +"</p>").appendTo(li);
					$(" <p class='sl3'>"+ "¥"+obj.cost1 +"<span>"+"销量"+obj.hot+ "</span></p>").appendTo(li);
				    $("<input type='checkbox' />").appendTo(li);
					
				    li.addClass("exert");
				}
			}
			
			//2 区域全选 类型不全选
			else if(categorysId != 0 && areasId == 0){
				for(var i=0;i<arr.length;i++){
					if(arr[i].category == categorysId){
						arr2.push(arr[i]);

					};
				}
				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
					 
					 var obj = arr2[i];
					
					var li = $("<li></li>").appendTo("#unlist");
					$("<img class='dry' src="+ obj.img +" />").appendTo(li);
					$("<p class='sl1'>"+ obj.hit +"</p>").appendTo(li);
					$("<p class='sl2'>"+ obj.sign +"</p>").appendTo(li);
					$(" <p class='sl3'>"+ "¥"+obj.cost1 +"<span>"+"销量"+obj.hot+ "</span></p>").appendTo(li);
				    $("<input type='checkbox' />").appendTo(li);
					
				    li.addClass("exert");
				}
				
			}
			
			//2 类型全选 区域不全选
			else if(categorysId == 0 && areasId != 0){
				for(var i=0;i<arr.length;i++){
					if(arr[i].area == areasId){
						arr2.push(arr[i]);

					};
				}
				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
						 
					var obj = arr2[i];
					var li = $("<li></li>").appendTo("#unlist");
					$("<img class='dry' src="+ obj.img +" />").appendTo(li);
					$("<p class='sl1'>"+ obj.hit +"</p>").appendTo(li);
					$("<p class='sl2'>"+ obj.sign +"</p>").appendTo(li);
					$(" <p class='sl3'>"+ "¥"+obj.cost1 +"<span>"+"销量"+obj.hot+ "</span></p>").appendTo(li);
				    $("<input type='checkbox' />").appendTo(li);
					li.addClass("exert");
				}
				
			}
			
			//2 两两组合
			else{
				for(var i=0;i<arr.length;i++){
					
					if(arr[i].category == categorysId && arr[i].area == areasId  ){
						arr2.push(arr[i]);

					};
				}
				arr2 = paixu(flag,arr2);
				for(var i=0;i<arr2.length;i++){
					var obj = arr2[i];
					var li = $("<li></li>").appendTo("#unlist");
					$("<img class='dry' src="+ obj.img +" />").appendTo(li);
					$("<p class='sl1'>"+ obj.hit +"</p>").appendTo(li);
					$("<p class='sl2'>"+ obj.sign +"</p>").appendTo(li);
					$(" <p class='sl3'>"+ "¥"+obj.cost1 +"<span>"+"销量"+obj.hot+ "</span></p>").appendTo(li);
				    $("<input type='checkbox' />").appendTo(li);
					li.addClass("exert");
				}
				
			}
			
			//排序
			function paixu(flag,arr2){
				if (flag == 1) {
					for(var i =0;i<arr2.length;i++){
						for (var j=0; j<arr2.length-1-i; j++) {
							if ((arr2[j].hot) < (arr2[j+1].hot)) {
								var tmp = arr2[j];
								arr2[j] = arr2[j+1];
								arr2[j+1] = tmp;
							}
						}
					}
					
				}
				else{
					for(var i =0;i<arr2.length;i++){
						for (var j=0; j<arr2.length-1-i; j++) {
							if ((arr2[j].cost1) <(arr2[j+1].cost1)) {
								var tmp = arr2[j];
								arr2[j] = arr2[j+1];
								arr2[j+1] = tmp;
							}
						}
					}
					
				}
				return arr2;
			}
			
		})
	}
	
	
	
	
	
	
	
	$(" .givenle .box1 span").click(function(){
		var index=  $(this).index()-1;
		$(this).addClass("active").siblings("span").removeClass("active")

		categorysId = index;
		refresh()
	})
	$(".givenle  .box2 span").click(function(){
		var index=  $(this).index()-1;
		$(this).addClass("active").siblings("span").removeClass("active")

		areasId = index;
		refresh()
	})
	$(".givenle .paixu input").click(function(){
		flag = $(this).index()+1;

		refresh()
	})
	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})



































