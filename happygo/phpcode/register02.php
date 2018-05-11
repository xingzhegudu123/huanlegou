<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/1/2 0002
 * Time: 下午 7:27
 */

header('Access-Control-Allow-Origin:*');

//先获取前端提交过来的参数
$uname = $_REQUEST["uname"];
$pwd = $_REQUEST["pwd"];
$hose = $_REQUEST["hose"];



//点击注册创建数据库


$conn1 = new mysqli("127.0.0.1","root","")or die("连接失败");
$sql1 = " create database mydb10 default character set utf8 collate utf8_general_ci                                                         ";
$result = $conn1 ->query($sql1);
if ($result){
    echo "创建数据库成功！";
}
else {
    echo "数据库已经存在！";
}







//先检查该用户是否存在
//注册

$conn = new mysqli("127.0.0.1", "root","", "mydb10") or die("连接失败");

//先检查该用户是否存在

$sqla = "create table if not exists regist(id int not null auto_increment primary key, username varchar(255), password varchar(255), hose varchar(255))";
$jie = $conn->query($sqla); //执行sql2中的sql语句
if ($jie){
    echo "创建表成功或表已经存在！";
}
else {
    echo "创建表失败！";
}



 //检查存在相同用户名
       //不可以注册

$sql2 = " select * from regist where username = '$uname'   ";

$result2 = $conn ->query($sql2);

   if($result2 && $result2->num_rows>0){
      
       $obj = array("status"=>2, "msg"=>"该用户已存在");
       echo  json_encode($obj);


   }else{
       //说明不存在相同用户名
       //可以注册
       $sql3 = "insert into regist (username, password, hose) values ('$uname','$pwd','$hose')       ";
       $result3 = $conn ->query($sql3);
       if ($result3) {
           $obj = array("status"=>1, "msg"=>"注册成功");
           echo  json_encode($obj);
       }
       else {
           $obj = array("status"=>0, "msg"=>"注册失败");
           echo  json_encode($obj);
       }


   }


//关闭连接
$conn->close();
