<?php if (!isset($id) || $id == "") :?>
<h3>Add New Record</h3>
<form method="POST" action="process.php?add">
    <table>
        <tr>
            <td>Frame Number</td>
            <td><input type='text' name='id'/></td>
        </tr>
		<tr>
		<td>Frame/Section Title</td>
<td><input type='text' name='framesectiontitle' /></td>
        <tr>
            <td>Module Name</td>
            <td><input type='text' name='modulename'/></td>
        </tr>
        <tr>
            <td>Current Date</td>
            <td><input type='text' name='currentdate'/></td>
        </tr>
        <tr>
            <td>Issue Type</td>
            <td><input type='text' name='issuetype'/></td>
        </tr>
        <tr>
            <td>Issue Description</td>
            <td><input type='text' name='issuedescription'/></td>
        </tr>
        <tr>
            <td>Additional Comments
            </td>
            <td><input type='text' name='additionalcomments'/></td>
        </tr>
        <tr>
            <td>Status of Issue</td>

            <td><input type='text' name='statusofissue'/></td>
        </tr>
		<tr>
            <td>Closed By</td>

            <td><input type='text' name='closedBy'/></td>
        </tr>
    </table>
    <input type="submit" value="Save"/>
</form>
<?php else:?>

    <h3>Update the existing Data :</h3>
    <form method="POST" action="process.php?update">
        <table>
            <tr>

                <td><input type='hidden' name='id' value='<?php echo $user->attributes()->id;?>'/></td>
            </tr>
			<tr>
			<td>Frame/Section Title</td>
			<td><input type=text' name='framesectiontitle' value='<?php echo $user->framesectiontitle;?>' /></td>
            <tr>
                <td>Module Name</td>
                <td><input type='text' name='modulename' value='<?php echo $user->modulename;?>'/></td>
            </tr>
            <tr>
                <td>Current Date</td>
                <td><input type='text' name='currentdate' value='<?php echo $user->currentdate;?>'/></td>
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
                <td><input type='text' name='issuedescription' value='<?php echo $user->issuedescription;?>'/></td>
            </tr>
            <tr>
                <td>Additional Comments
                </td>
                <td><input type='text' name='additionalcomments' value='<?php echo $user->additionalcomments;?>'/></td>
            </tr>
            <tr>
                <td>Status of Issue</td>

                <td><input type='text' name='statusofissue' value='<?php echo $user->statusofissue;?>'/></td>
            </tr>
			<tr>
                <td>Closed By</td>

                <td><input type='text' name='closedBy' value='<?php echo $user->closedBy;?>'/></td>
            </tr>
        </table>
        <input type="submit" value="Save"/>
    </form>
<?php endif;?>