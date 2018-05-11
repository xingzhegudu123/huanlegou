

$(function(){
	 
	 $("#log_ins").hide();
	 
	$("#sideBar ul .cs1 a,  #log_ins").mouseenter(function(){
//  $("#log_ins").slideDown();	$("#log_ins").fadeIn();  //淡入淡出
         
         $("#log_ins").show();
         
		
	})
	
	// #log_ins :定位的登录div
	$("#sideBar ul .cs1 a,   #log_ins  ").mouseleave(function(){

		
		 $("#log_ins").hide();
		
	})
	
	
	var verifyCode = new GVerify("v_container");
	$("#my_button").click(function(){
		var res = verifyCode.validate($(".codes").val());
		if(res){
				alert("验证正确");
			}else{
				alert("验证码错误");
			}
		
		
		
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
})




