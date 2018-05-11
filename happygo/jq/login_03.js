 $(function () {

            //登录接口： http://localhost/sz1713/31-35/day31/code/01_login.php
             
           
           var verifyCode = new GVerify("v_container");
           
           
           
            
            $("#gulf li").eq(1).show().siblings().hide();
            
            	var username = getCookie("user");
             	var pwd = getCookie("pwd");
             	
//         	console.log(username+" "+pwd);
             	$("#yonhu").val(username);
             	$("#pwd22").val(pwd);
             	
             
             
     // 点击控制普通和快捷登录的显示隐藏
             $("#culti input  ").click(function(){
             
             	
             	var index = $(this).index();
             
             	console.log(index);
             	 
             	 
             	 
             	 
             	$("#gulf li").eq(index).show().siblings().hide();
             	
             
             	
             	
             	
             	
             	
             	
             	
             	
             })
             
             
             
             
              //登录页面点击登录
            $(".street02 .fers4  #leap ").click(function (e) {
                       e.preventDefault();
                      
                      
                  $.ajax({
                    type: "post",
                    url: "http://localhost/week09/happygo/phpcode/01_login.php",
                    data: {
                        "uname":$("#dhd input").eq(0).val(),
                        "pwd":$("#dhd  input").eq(1).val()
                    },
                    success: function (data) {
                    	var username = $("#dhd input").eq(0).val();
                    	var pwd = $("#dhd  input").eq(1).val();
                    	
                      
                      //勾选记住用户名
                      if($("#ciuy").is(":checked")){  //或：attr('checked')
                        	
                        	
                        var d = new Date();
                    	d.setDate(d.getDate()+10);
                    	setCookie("user",username,d)
                    	setCookie("pwd",pwd,d);
                  	console.log(getCookie("user")+"    "+getCookie("pwd"));
                    }
                       	
                    	
                    
                    	
                    	
                        console.log(data);
                    },
                    error: function () {
                        console.log("请求失败！");
                    }
                })
            })
             
             
             
             
             
             
             
             
             
             
             
             
             
             
            //首页点击登录
            $(" #log_ins  .logist ").click(function (e) {
                     e.preventDefault();
              
                $.ajax({
                    type: "post",
                    url: "http://localhost/week09/happygo/phpcode/01_login.php",
                    data: {
                        "uname":$("#log_ins input").eq(0).val(),
                        "pwd":$("#log_ins  input").eq(1).val()
                    },
                    success: function (data) {
                        console.log(data);
                    },
                    error: function () {
                        console.log("请求失败！");
                    }
                })
            })
 })

















