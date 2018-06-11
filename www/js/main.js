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
    $(this).hide().after('<div class="wifiID" value="wifi"/>');

});

$('.wifiID').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));

$('.input_class_checkbox').each(function(){
  if($('.wifiID').hasClass("checked")){
    this.setAttribute("checked", "checked");
    this.checked=true;
  }else{
    this.setAttribute("checked", "");
    this.removeAttribute("checked");
    this.checked=false;
  }
});

});

$('.input_class_checkbox_nosmoker').each(function(){
    $(this).hide().after('<div class="nosmoker" value="noSmoker"/>');
});

$('.nosmoker').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));

  $('.input_class_checkbox_nosmoker').each(function(){
    if($('.nosmoker').hasClass("checked")){
      this.setAttribute("checked", "checked");
      this.checked=true;
    }else{
      this.setAttribute("checked", "");
      this.removeAttribute("checked");
      this.checked=false;
    }
  });

});

$('.input_class_checkbox_smoker').each(function(){
    $(this).hide().after('<div class="smoker" value="smoker"/>');
});

$('.smoker').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));

  $('.input_class_checkbox_smoker').each(function(){
    if($('.smoker').hasClass("checked")){
      this.setAttribute("checked", "checked");
      this.checked=true;
    }else{
      this.setAttribute("checked", "");
      this.removeAttribute("checked");
      this.checked=false;
    }
  });
});

$('.input_class_checkbox_veggie').each(function(){
    $(this).hide().after('<div class="veggie" value="veggie"/>');
});

$('.veggie').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
  $('.input_class_checkbox_veggie').each(function(){
    if($('.veggie').hasClass("checked")){
      this.setAttribute("checked", "checked");
      this.checked=true;
    }else{
      this.setAttribute("checked", "");
      this.removeAttribute("checked");
      this.checked=false;
    }
  });
});

$('.input_class_checkbox_vegan').each(function(){
    $(this).hide().after('<div class="vegan" value="vegan"/>');
});

$('.vegan').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));

  $('.input_class_checkbox_vegan').each(function(){
    if($('.vegan').hasClass("checked")){
      this.setAttribute("checked", "checked");
      this.checked=true;
    }else{
      this.setAttribute("checked", "");
      this.removeAttribute("checked");
      this.checked=false;
    }
  });
});

$('.input_class_checkbox_breakfast').each(function(){
    $(this).hide().after('<div class="breakfast" value="breakfast"/>');
});

$('.breakfast').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));

  $('.input_class_checkbox_breakfast').each(function(){
    if($('.breakfast').hasClass("checked")){
      this.setAttribute("checked", "checked");
      this.checked=true;
    }else{
      this.setAttribute("checked", "");
      this.removeAttribute("checked");
      this.checked=false;
    }
  });

});

$('.input_class_checkbox_glutenfree').each(function(){
    $(this).hide().after('<div class="glutenfree" value="glutenFree" />');
});

$('.glutenfree').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));

  $('.input_class_checkbox_glutenfree').each(function(){
    if($('.glutenfree').hasClass("checked")){
      this.setAttribute("checked", "checked");
      this.checked=true;
    }else{
      this.setAttribute("checked", "");
      this.removeAttribute("checked");
      this.checked=false;
    }
  });
});

$('.input_class_checkbox_delivery').each(function(){
    $(this).hide().after('<div class="delivery" value="delivery"/>');
});

$('.delivery').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));

  $('.input_class_checkbox_delivery').each(function(){
    if($('.delivery').hasClass("checked")){
      this.setAttribute("checked", "checked");
      this.checked=true;
    }else{
      this.setAttribute("checked", "");
      this.removeAttribute("checked");
      this.checked=false;
    }
  });
});

$('.input_class_checkbox_garden').each(function(){
    $(this).hide().after('<div class="garden" value="garden"/>');
});

$('.garden').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));

  $('.input_class_checkbox_garden').each(function(){
    if($('.garden').hasClass("checked")){
      this.setAttribute("checked", "checked");
      this.checked=true;
    }else{
      this.setAttribute("checked", "");
      this.removeAttribute("checked");
      this.checked=false;
    }
  });
});

$('.input_class_checkbox_lunch').each(function(){
    $(this).hide().after('<div class="lunch" value="lunch"/>');
});

$('.lunch').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));

  $('.input_class_checkbox_lunch').each(function(){
    if($('.lunch').hasClass("checked")){
      this.setAttribute("checked", "checked");
      this.checked=true;
    }else{
      this.setAttribute("checked", "");
      this.removeAttribute("checked");
      this.checked=false;
    }
  });
});



});
