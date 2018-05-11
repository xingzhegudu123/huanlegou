



//设置cookie(添加cookie和修改cookie)
function setCookie(name, value, expires){
	
	var str = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	
	//如果expires不为undefined，且为日期对象
	if (expires && expires instanceof Date){
		str += "; expires=" + expires;
	}
	
	document.cookie = str; 
	
	//console.log(document.cookie);
	//console.log(str);
	
}

//. 点语法: 内部有两个方法： set(), get()方法
/*
var obj = {age:10};
obj.age = 11;  //给age赋值， setAge(11){this.age=11}
console.log(obj.age); //获取age的值, getAge(){return this.age}
*/

//获取cookie
//name2=wangwu; name1=zhaoliu; name3=张三
function getCookie(name){
	var str = decodeURIComponent(document.cookie); //解码
	
	var arr = str.split("; ");  //["name2=wangwu", "name1=zhaoliu", "name3=张三"]
	for (var i=0; i<arr.length; i++){
		var str1 = arr[i];
		var arr1 = str1.split("=");
		if (arr1[0] == name) {
			return arr1[1];
		}
	}
	return "";
}


//删除cookie
function removeCookie(name){
	var d = new Date();
	d.setDate(d.getDate()-1);
	document.cookie = encodeURIComponent(name) + "=; expires=" + d;
}






