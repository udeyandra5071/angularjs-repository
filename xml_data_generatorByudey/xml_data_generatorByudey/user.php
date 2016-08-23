<?php if (!isset($id) || $id == "") :?>
<!Doctype html>
<html>
<head>
<title>CFF</title>
<script src="js/jquery-1.10.1.min.js"></script>
<script src="js/nicEdit.js" type="text/javascript"></script>
<script type="text/javascript">
bkLib.onDomLoaded(function() {
	new nicEditor().panelInstance('area1');
	new nicEditor({fullPanel : true}).panelInstance('area2');
	new nicEditor({iconsPath : 'js/nicEditorIcons.gif'}).panelInstance('area3');
	new nicEditor({buttonList : ['fontSize','bold','italic','underline','strikeThrough','subscript','superscript','html','image']}).panelInstance('area4');
	new nicEditor({maxHeight : 100}).panelInstance('area5');
});
</script>
</head>
<body>
<h3>Add New Record</h3>
<form method="POST" action="process.php?add" enctype="multipart/form-data">
<div class="form-group"> 
    <table>
        <tr>
            <td>Frame Number</td>
            <td><input class="form-control" type='text' name='id'/></td>
        </tr>
		<tr>
		<td>Frame/Section Title</td>
<td><input class="form-control" type='text' name='framesectiontitle' /></td>
        <tr>
            <td>Module Name</td>
            <td><input class="form-control" type='text' name='modulename'/></td>
        </tr>
        <tr>
            <td>Current Date</td>
            <td><input class="form-control" type='text' name='currentdate'/></td>
        </tr>
        <tr>
            <td>Issue Type</td>
            <td><select class="form-control" name='issuetype'> <option value="Major">Major</option><option value="Minor">Minor</option></td>
        </tr>
        <tr>
            <td>Issue Description</td>
            <td><textarea class="form-control" name='issuedescription'id="area1" rows=4" cols="50"></textarea></td>
        </tr>
        <tr>
            <td>Additional Comments
            </td>
            <td><input class="form-control" type='text' name='additionalcomments'/></td>
        </tr>
        <tr>
            <td>Status of Issue</td>

            <td><input class="form-control" type='text' name='statusofissue'/></td>
        </tr>
		<tr>
		<td>Upload Screenshot</td>
		<td><input class="form-control" type="file" name="userfile" /></td>
		</tr>
		<tr>
            <td>Closed By</td>

            <td><input class="form-control" type='text' name='closedBy'/></td>
        </tr>
    </table>
    <input type="submit" class="btn btn-default" value="Save"/>
</form>
<?php else:?>

    <h3>Update the existing Data :</h3>
    <form method="POST" action="process.php?update">
        <table>
            <tr>

                <td><input class="form-control" type='hidden' name='id' value='<?php echo $user->attributes()->id;?>'/></td>
            </tr>
			<tr>
			<td>Frame/Section Title</td>
			<td><input class="form-control" type=text' name='framesectiontitle' value='<?php echo $user->framesectiontitle;?>' /></td>
            <tr>
                <td>Module Name</td>
                <td><input class="form-control" type='text' name='modulename' value='<?php echo $user->modulename;?>'/></td>
            </tr>
            <tr>
                <td>Current Date</td>
                <td><input class="form-control" type='text' name='currentdate' value='<?php echo $user->currentdate;?>'/></td>
            </tr>
            <tr>
                <td>Issue Type</td>
                <td><select name='issuetype'>
  <option value='<?php echo $user->issuetype="Major";?>'>Major</option>
  <option value='<?php echo $user->issuetype="Minor";?>'>Minor</option>
</select></td>
            </tr>
            <tr>
                <td>Issue Description</td>
                <td><input class="form-control" type='text' name='issuedescription' value='<?php echo $user->issuedescription;?>'/></td>
            </tr>
            <tr>
                <td>Additional Comments
                </td>
                <td><input class="form-control" type='text' name='additionalcomments' value='<?php echo $user->additionalcomments;?>'/></td>
            </tr>
            <tr>
                <td>Status of Issue</td>

                <td><input class="form-control" type='text' name='statusofissue' value='<?php echo $user->statusofissue;?>'/></td>
            </tr>
			
			<tr>
                <td>Closed By</td>

                <td><input class="form-control" type='text' name='closedBy' value='<?php echo $user->closedBy;?>'/></td>
            </tr>
        </table>
        <input type="submit" class="btn btn-default" value="Save"/>
    </form>
	</div>

</body>
</html>
<?php endif;?>