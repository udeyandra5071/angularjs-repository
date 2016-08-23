<?php
include("include/header.php");
include("db.php");
			$sql = mysql_query("select id,newsart_details from news_article order by id ASC");
			//$row = mysql_fetch_array($sql);	
if($sql === FALSE) { 
    die(mysql_error()); // TODO: better error handling
}
?>
<table class='highlight'>
        <thead>
          <tr>
              <th data-field='id'>ID</th>
              <th data-field='name'>Name</th>
            
          </tr>
        </thead>
<?php
while($row = mysql_fetch_array($sql))
{
   
   echo "

        <tbody>
		 <tr>
            <td>{$row['id']}</td>
           <td>{$row['newsart_details']}</td>
		   
          </tr>
         
         
        
        </tbody>
    ";
	  // echo $row['FirstName'];
  //echo $row['id'];
  // echo $row['newsart_details'];
}			
		
?>
  </table>