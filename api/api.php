<?php
require 'restful_api.php';
class api extends restful_api {

	function __construct(){
		parent::__construct();
	}
	function dataToArray($sql){
                $servername = "fdb23.awardspace.net";
		$username = "3371168_user";
		$password = "se2012520";
		$dbname = "3371168_user";
		$conn = new mysqli($servername, $username, $password, $dbname);
                $data = $conn->query($sql);
		$stack = array();
		if (mysqli_num_rows($data) > 0){
			while($row = mysqli_fetch_assoc($data)){
				array_push($stack, $row);
			}
			return $stack;
		}
		else return false;
	}
        function Update($sql){
                $servername = "fdb23.awardspace.net";
		$username = "3371168_user";
		$password = "se2012520";
		$dbname = "3371168_user";
		$conn = new mysqli($servername, $username, $password, $dbname);
                $data = $conn->query($sql);
		return $data;
	}
        //user
	function user(){
		if ($this->method == 'GET'){
			$sql = "SELECT * FROM idyt";
			$stack = $this->dataToArray($sql);
			
			$this->response(200, $stack);
			// Hãy viết code xử lý LẤY dữ liệu ở đây
			// trả về dữ liệu bằng cách gọi: $this->response(200, $data)
		}
		elseif ($this->method == 'POST'){
			// Hãy viết code xử lý THÊM dữ liệu ở đây
			// trả về dữ liệu bằng cách gọi: $this->response(200, $data)
			//$data2=$data['refreshToken'];
                        
                        $data=$this->params;
                        $name=$data['name'];
                        $password=$data['password'];
			$sql = "SELECT * FROM idyt WHERE name = '$name' AND password = '$password'";
			$stack = $this->dataToArray($sql);
                        $this->response(200,$stack);
                      
			
		}
	}
        //signup
        function signup(){
		if ($this->method == 'POST'){
			// Hãy viết code xử lý THÊM dữ liệu ở đây
			// trả về dữ liệu bằng cách gọi: $this->response(200, $data)
			//$data2=$data['refreshToken'];
                        
                        $data=$this->params;
                        $name=$data['name'];
                        $password=$data['password'];
			$sql = "SELECT * FROM idyt WHERE name = '$name'";
			$stack = $this->dataToArray($sql);
                        if($stack){
                        $stack ='Đã tồn tại tên user';
                        $this->response(200,$stack);
                        }
                        else {
                        $sql = "INSERT INTO idyt (name,password,time,score) VALUES ('$name', '$password', 0,100)";
			$stack = $this->Update($sql);
                        
                        $sql = "SELECT * FROM idyt WHERE name = '$name' AND password = '$password'";
			$stack = $this->dataToArray($sql);
                        $this->response(200,$stack);
                        }
			
		}
	}
        //view
        function view(){
		if ($this->method == 'GET'){
			$sql = "SELECT * FROM viewer Where views > '0'";
			$stack = $this->dataToArray($sql);
			
			$this->response(200, $stack);
			// Hãy viết code xử lý LẤY dữ liệu ở đây
			// trả về dữ liệu bằng cách gọi: $this->response(200, $data)
		}
		elseif ($this->method == 'POST'){
                        
                        $data=$this->params;
                        $id=$data['id'];
                        $name=$data['name'];
                        $time=$data['time'];
                        $product=(object)[];
                        
                        $sql = "SELECT views FROM viewer WHERE id='$id' ";
                        $stack = $this->dataToArray($sql);
                        $views=$stack[0]['views']-1;
			$sql = "UPDATE viewer SET views='$views' WHERE id='$id' ";
			$stack = $this->Update($sql);
                        
                        $sql = "SELECT score FROM idyt WHERE name='$name' ";
                        $stack = $this->dataToArray($sql);
                        $score=$time+$stack[0]['score'];
			$sql = "UPDATE idyt SET score='$score' WHERE name='$name' ";
			$stack = $this->Update($sql);
                        
                        $sql = "SELECT * FROM viewer WHERE views> '0'";
			$stack = $this->dataToArray($sql);
                        $product->views= $stack;
                        
                        $sql = "SELECT * FROM idyt WHERE name='$name'";
                        $stack = $this->dataToArray($sql);
                        $product->user = $stack;
                        $this->response(200,$product);
                      
			
		}
		elseif ($this->method == 'PUT'){    
                      
		}
		elseif ($this->method == 'DELETE'){
			// Hãy viết code xử lý XÓA dữ liệu ở đây
			// trả về dữ liệu bằng cách gọi: $this->response(200, $data)
		}
	}
        //insert view
        function insertviews(){
		if ($this->method == 'POST'){
                        $data=$this->params;
                        $name=$data['user'];
                        $time=$data['time'];
                        $views=$data['views'];
                        $link=$data['link'];
                        $minus=$views*$time;
                        $product=(object)[];
                        
                        $sql = "INSERT INTO viewer (user, time, full, views, link) VALUES ('$name', '$time', '$views','$views','$link')";
			$stack = $this->Update($sql);
                        
                        $sql = "SELECT score FROM idyt WHERE name='$name' ";
                        $stack = $this->dataToArray($sql);
                        $score=$stack[0]['score']-$minus;
			$sql = "UPDATE idyt SET score='$score' WHERE name='$name' ";
			$stack = $this->Update($sql);
                      
                        
                        $sql = "SELECT * FROM viewer WHERE user='$name'";
			$stack = $this->dataToArray($sql);
                        $product->campain= $stack;
                        
                        $sql = "SELECT * FROM idyt WHERE name='$name'";
                        $stack = $this->dataToArray($sql);
                        $product->user = $stack;
                        $this->response(200,$product);
                      
			
		}
	}
        //insert view
        function campains(){
		if ($this->method == 'POST'){
                        
                        $data=$this->params;
                        $name=$data['user'];
                        $action=$data['action'];
                        $product=(object)[];
                        if($action=='delete'){
                         $id=$data['id'];
                         $sql = "SELECT * FROM viewer WHERE id='$id'";
                         $stack = $this->dataToArray($sql);
                         $plus = ($stack[0]['views'])*$stack[0]['time'];
                         $sql = "SELECT score FROM idyt WHERE name='$name' ";
                         $stack = $this->dataToArray($sql);
                         $score=$plus+$stack[0]['score'];
                         $sql = "UPDATE idyt SET score='$score' WHERE name='$name' ";
                         $stack = $this->Update($sql);
                         
                         
                         $sql = "Delete FROM viewer WHERE id='$id'";
                         $stack = $this->Update($sql);
                         
                         $sql = "SELECT * FROM viewer WHERE user='$name'";
			 $stack = $this->dataToArray($sql);
                         $product->campain= $stack;
                         
                         $sql = "SELECT * FROM idyt WHERE name='$name'";
                         $stack = $this->dataToArray($sql);
                         $product->user = $stack;
                         
                         $this->response(200,$product);
                        }
                        
                        
                        
                        
                        else if($action=='get'){
                        $sql = "SELECT * FROM viewer WHERE user='$name'";
			$stack = $this->dataToArray($sql);
                        
                        $this->response(200,$stack);
                        }
		}
	}
}

$user_api = new api();

?>
