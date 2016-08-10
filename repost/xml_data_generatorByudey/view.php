
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <script src="js/jquery.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
</head>
<body>

<div class="container">
  <h2>Issue List</h2>
  <p>Find the list below:</p>  
<?php
error_reporting(0);
$uploaddir = 'upload/';
$uploadfile = $uploaddir . basename($_FILES['userfile']['name']);

echo "<p>";

if (move_uploaded_file($_FILES['userfile']['tmp_name'], $uploadfile)) {
  echo "File is valid, and was successfully uploaded.\n";
} else {
   echo "";
}

echo "</p>";
//echo '<pre>';
//echo 'File Info:';
//print_r($_FILES);
//print "</pre>";
class Process
{
    protected $_xml;
    protected $path;

    public function __construct()
    {
        $this->_xml = simplexml_load_file("data.xml");
    }

    public function getXml()
    {
        return $this->_xml;
    }

    /**
     * @param mixed $path
     */
    public function setPath($path)
    {
        $this->path = $path;
    }

    /**
     * @return mixed
     */
    public function getPath()
    {
        return $this->path;
    }

    public function userlist()
    {
echo "		
  <table class='table table-bordered'>
    <thead>
      <tr>
        <th>Module Name</th>
        <th>Frame Number</th>
		<th>Frame/Section</th>
		<th>Current date	</th>
		<th>Issue Type</th>
		<th>Issue Description	</th>
		<th>Additional Comment</th>
		<th>Status of Issue</th>
		<th>Screenshot</th>
		<th>Closed By</th>
		<th>Edit/Delete</th>
      </tr>
	  </thead>
	   ";
	 foreach ($this->_xml as $user) {
		
            echo "
    <tbody>
      <tr>
         <td>{$user->modulename}</td>
                    <td>{$user->attributes()->id}</td>
					<td>{$user->framesectiontitle}</td>
                    <td>{$user->currentdate}</td>
                    <td>{$user->issuetype}</td>
                    <td>{$user->issuedescription}</td>
                    <td>{$user->additionalcomments}</td>
                    <td>{$user->statusofissue}</td>
					<td><a href='upload/{$user->files}' target='_blank'><img src='upload/{$user->files}' width='100'/></a></td>
					  <td>{$user->closedBy}</td>
                    <td>
                     <a href='view.php?edit=" . $user->attributes()->id . "'>Edit</a> |
                     <a href='view.php?delete=" . $user->attributes()->id . "'>Delete</a>
                    </td>
            </tr>
         
    </tbody>
	   ";
        }
echo "</table>";
    }
	 public function filterList($post)
    {
        $xml = $this->_xml->xpath('frameno[modulename="' . strtolower($post) . '"]');

        echo "
        <table border='0'>
           <thead>
      <tr>
        <th>Module Name</th>
        <th>Frame Number</th>
		<th>Frame/Section</th>
		<th>Current date	</th>
		<th>Issue Type</th>
		<th>Issue Description	</th>
		<th>Additional Comment</th>
		<th>Status of Issue</th>
		<th>Screenshot</th>
		<th>Closed By</th>
      </tr>
	  </thead>
        ";

        foreach ($xml as $user) {

            echo "
			 <tbody>
    
            <tr>
                      <td>{$user->modulename}</td>
                    <td>{$user->attributes()->id}</td>
					<td>{$user->framesectiontitle}</td>
                    <td>{$user->currentdate}</td>
                    <td>{$user->issuetype}</td>
                    <td>{$user->issuedescription}</td>
                    <td>{$user->additionalcomments}</td>
                    <td>{$user->statusofissue}</td>
					<td>{$user->files}</td>
					  <td>{$user->closedBy}</td>
            </tr>
			 </tbody>
            ";
        }
        echo "</table>";
    }

    public function adduser($post)
    {
        if ($post["modulename"] != "" &&
            $post["id"] != "" &&
			$post["framesectiontitle"] != "" &&
            $post["currentdate"] != "" &&
            $post["issuetype"] != "" &&
            $post["issuedescription"] != "" &&
            $post["additionalcomments"] != "" &&
            $post["statusofissue"] != "" &&
			$_FILES['userfile']['name'] != "" &&
			$post["closedBy"] != ""
        ) {

            $xml = $this->_xml;
            $user = $xml->addChild('frameno');
			 $framesection = $user->addChild("framesectiontitle", $post["framesectiontitle"]);
            $modulename = $user->addChild("modulename", $post["modulename"]);
            $currentdate = $user->addChild("currentdate", $post["currentdate"]);
            $issuetype = $user->addChild("issuetype", $post["issuetype"]);
            $issuedescription = $user->addChild("issuedescription", $post["issuedescription"]);
            $additioncomments = $user->addChild("additionalcomments", $post["additionalcomments"]);
            $statusofissue = $user->addChild("statusofissue", $post["statusofissue"]);
			$filesdetail = $user->addChild("files",$_FILES['userfile']['name']);
			$closedby = $user->addChild("closedBy", $post["closedBy"]);
            $user->addAttribute("id", $post["id"]);
            $xml->asXML($this->path);
        }
    }

    public function getUserById($id)
    {
        $user = $this->_xml->xpath('//frameno[@id="' . $id . '"]');
        return $user[0];
    }

    public function updateUser($post)
    {
        $user = $this->_xml->xpath('//frameno[@id="' . $post['id'] . '"]');

//        $user[0]['id'] = (int) $post["id"];
        $user[0]->modulename = $post["modulename"];
		 $user[0]->framesectiontitle = $post["framesectiontitle"];
        $user[0]->currentdate = $post["currentdate"];
        $user[0]->issuetype = $post["issuetype"];
        $user[0]->issuedescription = $post["issuedescription"];
        $user[0]->additionalcomments = $post["additionalcomments"];
        $user[0]->statusofissue = $post["statusofissue"];
		//$user[0]->files = $_FILES['userfile']['name'];
		$user[0]->closedBy = $post["closedBy"];
        $this->_xml->asXML($this->path);
    }
}

//Include template
//include 'index.php';


//$xml->user[0]->name = "Udeyandra, Kumar";
//$xml->asXML($completeurl);


//Controller
$param = $_SERVER['QUERY_STRING'];
$arr = explode("=", $param);
if (count($arr) > 1) {
    $param = $arr[0];
}
$path = getcwd()."/data.xml";
$process = new Process();
$process->setPath($path);
if ($param == "list") {
    $process->userlist();
}
if ($param == "add") {
    $post = $_POST;
    $process->adduser($post);
    include 'user.php';
}
if ($param == "filter") {
    $post = $_POST["modulename"];
    $process->filterList($post);
}

if ($param == "delete") {
    $id = $arr[1];
    $i = 0;
    foreach ($process->getXml() as $user){
        if ($user->attributes()->id == $id){
            unset($process->getXml()->frameno[$i]);
            $process->getXml()->asXML($path);
            break;
        }
        $i++;
    }
}

if ($param == "edit") {
    $id = $arr[1];
    $user = $process->getUserById($id);
    include 'user.php';
}

if ($param == "update") {
    $post = $_POST;
    $process->updateUser($post);
}

