$(document).ready(function() {
  //$('#textSearch').val(' ');

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
      var iconCounter = 0;

      data.helper.setQueryParameter('hitsPerPage', 5);

      if (data.helper.getQueryParameter('query') == '') {
        $('#textHits').addClass('hide');
      }

      setSettings();

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
          '<p class="infoForIcons">' + hit.info + '</p>' +
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

        $('#randomhit').click(function() {
          if ($('.randomclass').hasClass("hide")) {
            $('.randomclass').removeClass("hide");
          } else {
            $('.randomclass').addClass("hide");
          }
        });

        $hit.click(function() {

          /* Funktionen zum Icons replacen - NICHT hier rauslöschen ist wichtig dass es hier drin bleibt*/

          if (iconCounter < 1) {
            var infoSelector = $(".infoForIcons");

            // ===== Replace the Café Word with Café Icon ====
            var cafeImage = "<img src='../www/images/icons/foodicons/cafegoldy.svg' height='5%' width='3%' />";
            infoSelector.html(function(_, html) {
              return html.replace(/cafe/g, cafeImage)
            });

            // ===== Replace the Restaurant Word with Restaurant Icon ====
            var restaurantImage = "<img src='../www/images/icons/foodicons/resgoldy.svg' height='5%' width='3%' />";
            infoSelector.html(function(_, html) {
              return html.replace(/restaurant/g, restaurantImage)
            });

            // ===== Replace the Bar Word with Bar Icon ====
            var barImage = "<img src='../www/images/icons/foodicons/bargoldy.svg' height='5%' width='3%' />";
            infoSelector.html(function(_, html) {
              return html.replace(/bar/g, barImage)
            });

            // ===== Replace the WIFI Word with WLAN Icon ====
            var wifiImage = "<img src='../www/images/icons/foodicons/wifi.svg' height='5%' width='3%' />";
            infoSelector.html(function(_, html) {
              return html.replace(/wifi/g, wifiImage)
            });

            // ===== Replace the NonSmoker Word with NonSmoker Icon ====
            var nonSmokerImage = "<img src='../www/images/icons/foodicons/NonSmoker.svg' height='5%' width='3%' />";
            infoSelector.html(function(_, html) {
              return html.replace(/nonSmoker/g, nonSmokerImage)
            });

            // ===== Replace the Smoker Word with Smoker Icon ====
            var smokerImage = "<img src='../www/images/icons/foodicons/Smoker.svg' height='5%' width='3%' />";
            infoSelector.html(function(_, html) {
              return html.replace(/smoker/g, smokerImage)
            });

            // ===== Replace the Veggie Word with Veggie Icon ====
            var veggieImage = "<img src='../www/images/icons/foodicons/veggie.svg' height='5%' width='3%' />";
            infoSelector.html(function(_, html) {
              return html.replace(/veggie/g, veggieImage)
            });

            // ===== Replace the Vegan Word with Vegan Icon ====
            var veganImage = "<img src='../www/images/icons/foodicons/veggie.svg' height='5%' width='3%' />";
            infoSelector.html(function(_, html) {
              return html.replace(/vegan/g, veganImage)
            });

            // ===== Replace the Breakfast Word with Breakfast Icon ====
            var breakfastImage = "<img src='../www/images/icons/foodicons/Breakfast.svg' height='5%' width='3%' />";
            infoSelector.html(function(_, html) {
              return html.replace(/breakfast/g, breakfastImage)
            });

            // ===== Replace the Glutenfree Word with Glutenfree Icon ====
            var glutImage = "<img src='../www/images/icons/foodicons/glutenfree2.svg' height='5%' width='3%' />";
            infoSelector.html(function(_, html) {
              return html.replace(/glutenFree/g, glutImage)
            });

            // ===== Replace the Delivery Word with Delivery Icon ====
            var deliveryImage = "<img src='../www/images/icons/foodicons/delivery.svg' height='5%' width='3%' />";
            infoSelector.html(function(_, html) {
              return html.replace(/delivery/g, deliveryImage)
            });

            // ===== Replace the Lunch Word with Lunch Icon ====
            var lunchImage = "<img src='../www/images/icons/foodicons/lunch.svg' height='5%' width='3%' />";
            infoSelector.html(function(_, html) {
              return html.replace(/lunch/g, lunchImage)
            });

            // ===== Replace the Garden Word with Garden Icon ====
            var gardenImage = "<img src='../www/images/icons/foodicons/garden.svg' height='5%' width='3%' />";
            infoSelector.html(function(_, html) {
              return html.replace(/garden/g, gardenImage)
            });

            /* Ende der Funktionen zum Icons replacen */
            /* --------------------------------- */

            /* So dass die If nur einmal beim Erstellen aufgerufen wird */
            iconCounter++;

          }

          var name = hit['name'];
          if ($('.resultInfo[value="' + name + '"]').hasClass("hide")) {
            $('.resultInfo[value="' + name + '"]').removeClass("hide");
            $(this).removeClass('hide');
            $('.hit').addClass('hide');
          } else {
            $('.resultInfo[value="' + name + '"]').addClass("hide");
          }

        });
        $hits.push($hit);
      });

      $('#textHits').html($hits);
    }
  });

  textSearch.start();

  $('#textSearch').keydown(function(event) {
    if (event.which == 32) {
      $('#textHits').addClass('hide');
    } else {
      $('#textHits').removeClass('hide');
    }

    setSettings();

    $('.resultInfo').addClass('hide');
  });

});

function setSettings() {
  $.ajax({
    url: 'algolia/textSettings.php',
    type: 'POST',
    success: function(data) {}
  });
}

document.addEventListener('click', (event) => {
  if (event.target.matches('.getInfo')) {
    $('.resultInfo').addClass('hide');
    $('.getInfo').addClass('hide');
    $('.hit').removeClass('hide');
  }
});
