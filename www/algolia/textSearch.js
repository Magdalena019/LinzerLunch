$(document).ready(function() {
  $('#textSearch').val(' ');

  const textSearch = instantsearch({
    appId: 'Z0U7V7EJ1E',
    apiKey: 'a85163449a3db7812f4de4b3cafa2e3c',
    indexName: 'restaurants',
    urlSync: true
  });

  textSearch.addWidget(
    instantsearch.widgets.searchBox({
      container: '#textSearch',
      reset: false,
      magnifier: false,
      autofocus: false
    })
  );

  textSearch.addWidget({
    render: function(data) {
      var $hits = [];
      var counter = 0;
      data.results.hits.forEach(function(hit) {
        counter++;
        //TODO: Template hier bauen: - class und value müssen beibehalten werden

        var button = $();

          var $hit = $('<em><br></em>' +
              '<div class="hit">' + hit.name + '</div>' +
              '<div class="resultInfo hide" value="' + hit.name + '">' +
              '<img src="../www/restaurants/' + hit.path + '/01.jpg" class="rounded thumbImage">' +
              '<h4><b><br>' + hit.name + '</b></h4>' +
              '<p>' + hit.description + '</p>' +
              '<p>' +  hit.info + '</p>' +
              '<h5>Öffnungszeiten: ' + '</h5>' +
              '<p>Montag: ' + hit.hours.mon + '<br>' +
              'Dienstag: ' + hit.hours.tue + '<br>' +
              'Mittwoch: ' + hit.hours.wed + '<br>' +
              'Donnerstag: ' + hit.hours.thu + '<br>' +
              'Freitag: ' + hit.hours.fri + '<br>' +
              'Samstag: ' + hit.hours.sat + '<br>' +
              'Sonntag: ' + hit.hours.sun + '</p>' +
              '</div>' +
              '<button class="getInfo hide" value="' + hit.name + '">Zurück</button>');

              $('#randomhit').click(function(){
                if($('.randomclass').hasClass("hide")){
                  $('.randomclass').removeClass("hide");
                }else{
                  $('.randomclass').addClass("hide");
                }
            });

          $hit.click(function() {

              /* Funktionen zum Icons replacen - NICHT hier rauslöschen ist wichtig dass es hier drin bleibt*/

              var bodySelector = $("body");

              /* HIIIIER DARAN LIEGTS DAS ES IWIE NED GEHT - denke an dem Return oder so */
              /* Aber musste es hier aufrufen damit es auch greift */
              /* Hab die andren Icons mal auskommentiert damit man mit dem Café testen kann - muss dann einfach
              auf die anderen Icons übertragen werden
               Größe passt bereits, ist bereits full responsive */

              // ===== Replace the Café Word with Café Icon ====
              var cafeImage = "<img src='../www/images/icons/cafegoldy.png' height='5%' width='3%' />";
              bodySelector.html(function (_, html) {
                  return html.replace(/cafe/g , cafeImage )
              });

              /*
              // ===== Replace the Restaurant Word with Restaurant Icon ====
              var restaurantImage = "<img src='../www/images/icons/resgoldy.png' height='5%' width='3%' />";
              bodySelector.html(function (_, html) {
                  return html.replace(/restaurant/g , restaurantImage )
              });

              // ===== Replace the Bar Word with Bar Icon ====
              var barImage = "<img src='../www/images/icons/bargoldy.png' height='5%' width='3%' />";
              bodySelector.html(function (_, html) {
                  return html.replace(/bar/g , barImage )
              });

              // ===== Replace the WIFI Word with WLAN Icon ====
              var wifiImage = "<img src='../www/images/icons/wifi.png' height='5%' width='3%' />";
              bodySelector.html(function (_, html) {
                  return html.replace(/wifi/g , wifiImage )
              });

              // ===== Replace the NonSmoker Word with NonSmoker Icon ====
              var nonSmokerImage = "<img src='../www/images/icons/foodicons/NonSmoker.png' height='5%' width='3%' />";
              bodySelector.html(function (_, html) {
                  return html.replace(/nonSmoker/g , nonSmokerImage )
              });

              // ===== Replace the Smoker Word with Smoker Icon ====
              var smokerImage = "<img src='../www/images/icons/foodicons/Smoker.png' height='5%' width='3%' />";
              bodySelector.html(function (_, html) {
                  return html.replace(/nonSmoker/g , smokerImage )
              });

              // ===== Replace the Veggie Word with Veggie Icon ====
              var veggieImage = "<img src='../www/images/icons/foodicons/veggie.png' height='5%' width='3%' />";
              bodySelector.html(function (_, html) {
                  return html.replace(/veggie/g , veggieImage )
              });

              // ===== Replace the Vegan Word with Vegan Icon ====
              var veganImage = "<img src='../www/images/icons/foodicons/veggie.png' height='5%' width='3%' />";
              bodySelector.html(function (_, html) {
                  return html.replace(/vegan/g , veganImage )
              });

              // ===== Replace the Breakfast Word with Breakfast Icon ====
              var breakfastImage = "<img src='../www/images/icons/foodicons/Breakfast.png' height='5%' width='3%' />";
              bodySelector.html(function (_, html) {
              return html.replace(/breakfast/g , breakfastImage )
              });

              // ===== Replace the Glutenfree Word with Glutenfree Icon ====
              var glutImage = "<img src='../www/images/icons/foodicons/glutenfree2.png' height='5%' width='3%' />";
              bodySelector.html(function (_, html) {
                  return html.replace(/glutenFree/g , glutImage )
              });

              // ===== Replace the Delivery Word with Delivery Icon ====
              var deliveryImage = "<img src='../www/images/icons/foodicons/delivery.png' height='5%' width='3%' />";
              bodySelector.html(function (_, html) {
                  return html.replace(/delivery/g , deliveryImage )
              });

              // ===== Replace the Lunch Word with Lunch Icon ====
              var lunchImage = "<img src='../www/images/icons/foodicons/lunch.png' height='5%' width='3%' />";
              bodySelector.html(function (_, html) {
                  return html.replace(/nonSmoker/g , lunchImage )
              });

              // ===== Replace the Garden Word with Garden Icon ====
              var gardenImage = "<img src='../www/images/icons/foodicons/garden.png' height='5%' width='3%' />";
              bodySelector.html(function (_, html) {
              return html.replace(/garden/g , gardenImage )
              });


              /* Ende der Funktionen zum Icons replacen */
              /* --------------------------------- */

          var name = hit['name'];
          if($('.resultInfo[value="' + name + '"]').hasClass("hide")){
            $('.resultInfo[value="' + name + '"]').removeClass("hide");
            $(this).removeClass('hide');
            $('.hit').addClass('hide');
          }else{
            $('.resultInfo[value="' + name + '"]').addClass("hide");
          }
        /*  $('.resultInfo[value="' + name + '"]').removeClass('hide');*/

        });
        $hits.push($hit);
      });

      $('#textHits').html($hits);
    }
  });

  textSearch.start();

  $('#textSearch').keydown(function(event) {
  //  console.log(event.which);
    if ( event.which == 32 ||$('#textSearch').val().search(/\S/)==-1) {
       $('#textHits').addClass('hide');
   //event.preventDefault();
 }else{
   $('#textHits').removeClass('hide');
 }

//console.log($('#textSearch').val().search(/\S/));
    //regex - buchstabe zwischen a bis z und A bis Z
  /*  if ($('#textSearch').val().search(/\S/) == -1) {
        $('#hits').addClass('hide');
    } else {
        $('#hits').removeClass('hide');
    }*/

    //$('#hits').addClass('hide');

    $.ajax({
      url: 'algolia/textSettings.php',
      type: 'POST',
      success: function(data){
      }
    });

  //  $('#textHits').removeClass('hide');
    $('.resultInfo').addClass('hide');
  });

});

document.addEventListener('click', (event) => {
  if (event.target.matches('.getInfo')) {
    $('.resultInfo').addClass('hide');
    $('.getInfo').addClass('hide');
    $('.hit').removeClass('hide');
  }
});
