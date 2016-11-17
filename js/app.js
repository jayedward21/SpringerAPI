

$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});

function getRequest(searchTerm){
  $.getJSON('https://api.springer.com/metadata/json?q=' + searchTerm + '&api_key=c0822968168cdedf2a5a94608a28c833', function(data){
    showResults(data.records, searchTerm);
  });
}

function showResults(result, searchTerm){
  var html = "";
  $.each(result, function(index,values){
    html +=  '_____________________________________________________________________________ <br><br>' +
	'<a href=' + values.url[0].value + '>' + values.publicationName + ' </a><br><p> ' + values.abstract + ' <br><br> <p> Free publication: ' 
	+ values.openaccess + '<p> Further research into this topic by searching for the following in another search engine: ' + values.title + '</p>';
 
  });
  $('#search-results').html(html);
}