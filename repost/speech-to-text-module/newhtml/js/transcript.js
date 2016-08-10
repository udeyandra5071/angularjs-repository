$(document).ready(function() {
  // when the tag with id="buton" is clicked, performs a Ajax GET request to an XML file
  // gets the XML data, parses oits elements and dysplays its data
  $('#viewlist').click(function() {
    $.ajax({
      type: 'get',
      url: 'http://localhost/nextgenerationipadmodule/transcript/transcript.xml',
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
          var id = elm.attr('id');
          var title = elm.find('title').text();
          var url = elm.find('url').text();
$(".close").show();
          // displays data
          $('#resp').show().append('<ul class="collection "><li class="collection-item padding red darken-2 white-text">Frame'+id+': '+ title+ '</li></ul>');
        });
      }
    });
  });
});