$(document).ready(function() {

  $('#hits').addClass('hide');
  $('#textHits').addClass('hide');
  $('#headline').addClass('hide');


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
$('.input_class_checkbox').each(function(){
    $(this).hide().after('<div class="wifiID" />');
});

$('.wifiID').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
});

$('.input_class_checkbox_nosmoker').each(function(){
    $(this).hide().after('<div class="nosmoker" />');
});

$('.nosmoker').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
});

$('.input_class_checkbox_smoker').each(function(){
    $(this).hide().after('<div class="smoker" />');
});

$('.smoker').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
});

$('.input_class_checkbox_veggie').each(function(){
    $(this).hide().after('<div class="veggie" />');
});

$('.veggie').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
});

$('.input_class_checkbox_vegan').each(function(){
    $(this).hide().after('<div class="vegan" />');
});

$('.vegan').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
});

$('.input_class_checkbox_breakfast').each(function(){
    $(this).hide().after('<div class="breakfast" />');
});

$('.breakfast').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
});

$('.input_class_checkbox_glutenfree').each(function(){
    $(this).hide().after('<div class="glutenfree" />');
});

$('.glutenfree').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
});

$('.input_class_checkbox_delivery').each(function(){
    $(this).hide().after('<div class="delivery" />');
});

$('.delivery').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
});

$('.input_class_checkbox_garden').each(function(){
    $(this).hide().after('<div class="garden" />');
});

$('.garden').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
});

$('.input_class_checkbox_lunch').each(function(){
    $(this).hide().after('<div class="lunch" />');
});

$('.lunch').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
});


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
