var el, newPoint, newPlace, offset, finalmeter;
function changevalue()
{
    $("input[type='range']").change(function() {

 // Cache this for efficiency
 el = $(this);
 
 // Measure width of range input
 width = el.width();
 
 // Figure out placement percentage between left and right of input
 newPoint = (el.val() - el.attr("min")) / (el.attr("max") - el.attr("min"));
  
  offset = -1;
$(".rangemeter").text("value "+newPoint);
$(".metervalue").text(el.val());
 // Prevent bubble from going beyond left or right (unsupported browsers)
 if (newPoint < 0) { newPlace = 0; }
 else if (newPoint > 1) { newPlace = width; }
 else { newPlace = width * newPoint + offset; offset -= newPoint; }
 
 // Move bubble
 el
   .next("output")
   .css({
     left: newPlace,
     marginLeft: offset + "%"
   })
     .text(el.val());
 })
 // Fake a change to position bubble at page load
 .trigger('change');
}
function send_meter(){
var field = document.getElementById("foo"),
		value = "";
    
	
	if(field.value !== null && field.value !== ""){
		value = field.value;
	}
    meterval.push(value);
    meterval.sort(value);
    console.log("Meter Val"+meterval);
    traversemeter = jQuery.unique(meterval);
    console.log("traverse meter"+ traversemeter);
    insertmeter = traversemeter.join();  
    console.log("Insert meter"+insertmeter);
    var metervalue = value; 
	set('cmi.objectives.n.id', metervalue);  
	
	//set('cmi.objectives.n.score._children', score); 
  
   
    $(".value").text(metervalue);
    //console.log(totalQuestionpush);
  
 
}
function send_points(){

	var field = document.getElementById("pointreward"),
		value = " Placeholder text ";
    
	
	if(field.value !== null && field.value !== ""){
		value = field.value;
	}
    
    trackscore.push(value);
    trackscore.sort();
    console.log(trackscore);
    traversescore = jQuery.unique(trackscore);
    console.log(traversescore);
    insertscore = traversescore.join();  
    console.log(insertscore);
    var score = value; 
	set('cmi.core.score.max', score);  
	set('cmi.core.score.raw', score); 
	//set('cmi.objectives.n.score._children', score); 
    var getscore =  scorm.get('cmi.core.score.raw');
    $("#score").text("Score "+getscore);
    if(getscore >= 15)
        {
          set("cmi.core.lesson_status", "passed");  
        }
    else{
        set("cmi.core.lesson_status", "failed"); 
    }
    totalQuestionpush = totalquestions.join(); 
    console.log(totalQuestionpush);
  
    
    if((insertscore.length) == (totalQuestionpush.length))
        {
	show("Setting course status to 'completed'.");
	var callSucceeded = scorm.set("cmi.core.lesson_status", "incomplete");

	show("Call succeeded? " +callSucceeded);
    show("<hr>");
        }
 
}
