$(document).ready(function() {
  // when the tag with id="buton" is clicked, performs a Ajax GET request to an XML file
  // gets the XML data, parses oits elements and dysplays its data
  // Toc's
  $('#viewlist').click(function() {
    $.ajax({
      type: 'get',
      url: 'http://localhost/newhtmlshell_indegene/transcript/transcript.xml',
      beforeSend: function() {
        // before send the request, displays a "Loading..." messaj in the element where the response will be placed
        $('#resp').html('Loading...');
      },
      timeout: 10000,        // sets timeout for the request (10 seconds)
      error: function(xhr, status, error) { alert('Error: '+ xhr.status+ ' - '+ error); },     // alert a message in case of error
      dataType: 'xml',
      success: function(response) {
        $('#resp').html('');        // removes the "loading..." notification from "#resp"

        // gets and parse each child element in <webpages>
        $(response).find('transcript').children().each(function() {
          // gets the "id", "title", and "url" of current child element
            var elm = $(this);
          var tid = elm.attr('id');
		  var title = elm.find('title').text();
        $("#resourceloader").hide();
$(".close").fadeIn();
          // displays data
          $('#resp').fadeIn().append('<ul class="collection "><li class="collection-item padding red darken-2 white-text left-align" id="page'+tid+'">Frame'+tid+': '+ title+ '</li></ul>');
		  
		  
		  // loading frames from TOC
		  $("#page"+tid).bind("click",function(){
			 	
	
		var nextFrame="page"+tid+".html";
    $(".nis_frame_emod").load(nextFrame, function( response, status, xhr ) {
		$(".counter").text(tid);
		if ( status == "error" ) {
    var msg = "Sorry no page found ";alert( msg + xhr.status + " " + xhr.statusText );location.reload();}
	 $(".page_content").addClass("page"+tid+"_content");
	  $(".title").addClass("title"+tid);
	   $(".paragraph").addClass("paragraph"+tid);
	    $(".bullets").addClass("bullets"+tid);
$(".page"+tid+"_content").fadeIn();
//Transcript code from TOC
$(".transcript_box").hide();
		$(".audiotran_text").empty();
	 $('.button_maximizetranscript').html('<i class="tiny material-icons top_lineheight" id="au_id'+tid+'">speaker_notes</i>');
	});
 //TranscriptCode ends

			  
		  });
        });
      }
    });
  });
 //Resources here
 $('#resources').click(function() {
    $.ajax({
      type: 'get',
      url: 'http://localhost/newhtmlshell_indegene/transcript/resource.xml',
      beforeSend: function() {
        // before send the request, displays a "Loading..." messaj in the element where the response will be placed
        $('#resourceloader').html('Loading...');
      },
      timeout: 10000,        // sets timeout for the request (10 seconds)
      error: function(xhr, status, error) { alert('Error: '+ xhr.status+ ' - '+ error); },     // alert a message in case of error
      dataType: 'xml',
      success: function(response) {
        $('#resourceloader').html('');        // removes the "loading..." notification from "#resp"

        // gets and parse each child element in <webpages>
        $(response).find('resources').children().each(function() {
          // gets the "id", "title", and "url" of current child element
            var elm = $(this);
          var id = elm.attr('id');
		  var pdf = elm.find('pdf').text();
        var ppt = elm.find('ppt').text();
$(".closeres").fadeIn();
$("#resp").hide();
$(".close").hide();
          // displays data
          $('#resourceloader').fadeIn().append('<ul class="collection"><li class="collection-item"><a href='+pdf+' target="_blank">Pdf</a></li></ul>');
        });
      }
    });
  });
//Glossary
$('.loadxml').click(function() {
    $.ajax({
      type: 'get',
      url: 'http://localhost/newhtmlshell_indegene/transcript/glossary.xml',
      beforeSend: function() {
        // before send the request, displays a "Loading..." messaj in the element where the response will be placed
        //$('#resourceloader').html('Loading...');
      },
      timeout: 10000,        // sets timeout for the request (10 seconds)
      error: function(xhr, status, error) { alert('Error: '+ xhr.status+ ' - '+ error); },     // alert a message in case of error
      dataType: 'xml',
      success: function(response) {
       // $('#resourceloader').html('');        // removes the "loading..." notification from "#resp"

        // gets and parse each child element in <webpages>
        $(response).find('glossary').children().each(function() {
          // gets the "id", "title", and "url" of current child element
            var elm = $(this);
          var gid = elm.attr('id');
		  var title = elm.find('title').text();
        var paragraph = elm.find('paragraph').text();
		var referencesid = elm.find('referencesid').text();
		var refdescription=elm.find('referencesdescription').text();
$(".closeres").fadeIn();
$("#resp").hide();
$(".close").hide();
          // displays data
          $('.loadlink').fadeIn().append('<tr ><td><a href="#" class="gid'+gid+'">'+title+'</a></td></tr>');
		  $(".gid"+gid).bind("click",function(){
			  
			
			   $('.loadglossary').fadeIn().html('<tr class="rowloader'+gid+'"><td class="loadtitle"><div class="loadtitle'+gid+'">'+title+'</div></td><td class="load_def"><div class="load_def'+paragraph+'">'+paragraph+'</div></td><td class="load_ref'+refdescription+'"><strong>'+referencesid+'</strong>.'+refdescription+'</td></tr>');
			  
		  });
		 
        });
      }
    });
  });
  //Audio Transcript Code
$('.audiotranscript').click(function() {
    $.ajax({
      type: 'get',
      url: 'http://localhost/newhtmlshell_indegene/transcript/audio_transcript.xml',
      beforeSend: function() {
        // before send the request, displays a "Loading..." messaj in the element where the response will be placed
        //$('#resourceloader').html('Loading...');
      },
      timeout: 10000,        // sets timeout for the request (10 seconds)
      error: function(xhr, status, error) { alert('Error: '+ xhr.status+ ' - '+ error); },     // alert a message in case of error
      dataType: 'xml',
      success: function(response) {
       // $('#resourceloader').html('');        // removes the "loading..." notification from "#resp"

        // gets and parse each child element in <webpages>
        $(response).find('audiotranscripts').children().each(function() {
          // gets the "id", "title", and "url" of current child element
            var elm = $(this);
          var au_id = elm.attr('id');
		  var audiotranscript = elm.find('audiotranscript').text();
       
$(".closeres").fadeIn();
$("#resp").hide();
$(".close").hide();
          // displays data
           
		  $("#au_id"+au_id).bind("click",function(){
			 // $(".transcript_box").css({"height":"200px"});
			  //  $(".overflow").css({"height":"200px"});
			$('.audiotran_text').toggle().html('<div class="overflow left audiotrans'+au_id+'">'+audiotranscript+'</div>');
			
		  });
		 
        });
      }
    });
  }); 

 // Audio onscreen data
 
 $('.audiotranscript').click(function() {
    $.ajax({
      type: 'get',
      url: 'http://localhost/newhtmlshell_indegene/transcript/audio_transcript.xml',
      beforeSend: function() {
        // before send the request, displays a "Loading..." messaj in the element where the response will be placed
        //$('#resourceloader').html('Loading...');
      },
      timeout: 10000,        // sets timeout for the request (10 seconds)
      error: function(xhr, status, error) { alert('Error: '+ xhr.status+ ' - '+ error); },     // alert a message in case of error
      dataType: 'xml',
      success: function(response) {
       // $('#resourceloader').html('');        // removes the "loading..." notification from "#resp"

        // gets and parse each child element in <webpages>
        $(response).find('audiotranscripts').children().each(function() {
          // gets the "id", "title", and "url" of current child element
            var elm = $(this);
          var au_id = elm.attr('id');
		  var audiotranscript = elm.find('audiotranscript').text();
       
$(".closeres").fadeIn();
$("#resp").hide();
$(".close").hide();
          // displays data
           
		  $("#au_id"+au_id).bind("click",function(){
			 // $(".transcript_box").css({"height":"200px"});
			  //  $(".overflow").css({"height":"200px"});
			$('.audiotran_text').toggle().html('<div class="overflow left audiotrans'+au_id+'">'+audiotranscript+'</div>');
			
		  });
		 
        });
      }
    });
  });
 

});