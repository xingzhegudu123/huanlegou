
function naku(id){
				
				return document.getElementById(id);
				
			}
          
          souti();
			function souti(){
				// https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=miqi&cb=fn

				naku("ven1").onkeydown = function(){
					naku("isogeny").style.display = "block";
					var scriptNode = document.createElement("script");
					scriptNode.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd="+this.value+"&cb=fn21";
					document.body.appendChild(scriptNode);
                    document.body.removeChild(scriptNode);
					
				}
				naku("ven1").onblur = function(){
					naku("isogeny").style.display = "none";
					
					
				}
				
			}
			 
			function fn21(data){

//			console.log(JSON.stringify(data));
				var arr = data.s;
				naku("isogeny").innerHTML="";
				
				//显示搜索提示数据
				for(var i = 0;i<arr.length;i++){
					 var li = document.createElement("li");
					 naku("isogeny").appendChild(li);
					 li.innerHTML = arr[i];
				}
				
				
				
		}
			
			

 









