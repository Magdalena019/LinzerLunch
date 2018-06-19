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
};

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


  /* Function for Scroll Down Button */
  $(function() {
    $('a[href*=#]').on('click', function(e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
    });
  });

  /* Function for the Return to Top Button */
  // ===== Scroll to Top ====
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
    }, 500);
  });

//create sticky menu
// Create a clone of the menu, right next to original.
$('#navbarDesktop').addClass('original').clone().insertAfter('#navbarDesktop').addClass('cloned').css('position','fixed').css('top','0').css('margin-top','0').css('z-index','500').removeClass('original').hide();

scrollIntervalID = setInterval(stickIt, 10);


function stickIt() {

  var orgElementPos = $('.original').offset();
  orgElementTop = orgElementPos.top;

  if ($(window).scrollTop() >= (orgElementTop)) {
    // scrolled past the original position; now only show the cloned, sticky element.

    // Cloned element should always have same left position and width as original element.
    orgElement = $('.original');
    coordsOrgElement = orgElement.offset();
    leftOrgElement = coordsOrgElement.left;
    widthOrgElement = orgElement.css('width');
    $('.cloned').css('left',leftOrgElement+'px').css('top',0).css('width',widthOrgElement).css('background-color','black').css('margin-left','0px').css('margin-right','0px').css('padding-top','5px').css('padding-bottom','5px').show();
    $('.original').css('visibility','hidden');
  } else {
    // not scrolled past the menu; only show the original menu.
    $('.cloned').hide();
    $('.original').css('visibility','visible');
  }
}


/*random restaurants*/
$('.randomres').each(function(){
    $(this).hide().after('<div class="randomrestaurant" value="restaurant"/>');
});

$('.randomrestaurant').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
$('.randomcafe').removeClass('checked');
$('.randombar').removeClass('checked');
$('.randomall').removeClass('checked');

});

$('.randomcaf').each(function(){
    $(this).hide().after('<div class="randomcafe" value="cafe"/>');
});

$('.randomcafe').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
$('.randomrestaurant').removeClass('checked');
$('.randombar').removeClass('checked');
$('.randomall').removeClass('checked');

});

$('.randomba').each(function(){
    $(this).hide().after('<div class="randombar" value="bar"/>');
});

$('.randombar').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
$('.randomrestaurant').removeClass('checked');
$('.randomcafe').removeClass('checked');
$('.randomall').removeClass('checked');

});

$('.randomal').each(function(){
    $(this).hide().after('<div class="randomall" value=""/>');
});

$('.randomall').on('click',function(){
  $(this).toggleClass('checked').prev().prop('checked',$(this).is('.checked'));
$('.randomrestaurant').removeClass('checked');
$('.randomcafe').removeClass('checked');
$('.randombar').removeClass('checked');

});




});
