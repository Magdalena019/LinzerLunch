$(document).ready(function() {

  $('#hits').addClass('hide');
  $('#textHits').addClass('hide');
  $('#headline').addClass('hide');

/*  $.getJSON("algolia/counterValues.json", function(json){
    console.log(json);
    var items=[];
    $.each(json, function(key,val){
      //items.push(val);
      console.log(val.restaurant);
      $('#firstCounter').attr("data-count", val.restaurant);
      $('#secondCounter').attr("data-count", val.cafe);
      $('#thirdCounter').attr("data-count", val.bar);

    });

    //console.log(items);
    //$('#firstCounter').attr("data-count", items[0]);
    //$('#secondCounter').attr("data-count", items[1]);
    //$('#thirdCounter').attr("data-count", items[2]);

});*/

var requestURL="algolia/counterValues.json";
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType='json';
request.send();

request.onload= function(){
  var json= request.response;
  $.each(json, function(key,val){
    //items.push(val);
    console.log(val.restaurant);
    $('#firstCounter').attr("data-count", val.restaurant);
    $('#secondCounter').attr("data-count", val.cafe);
    $('#thirdCounter').attr("data-count", val.bar);

  });
}
});

/*$.ajax({
  dataType: "json";
  url: "algolia/counterValues.json";
  mimeType: "application/json";
  success: function(result){
    $.each(json, function(key,val){
      //items.push(val);
      console.log(val.restaurant);
      $('#firstCounter').attr("data-count", val.restaurant);
      $('#secondCounter').attr("data-count", val.cafe);
      $('#thirdCounter').attr("data-count", val.bar);

    });
  }

});*/
