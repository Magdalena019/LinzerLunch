var restaurants;
var cafes;
var bars;
var all;

function fillAll() {
  $.ajax({
    url: 'algolia/getRandom.php',
    type: 'POST',
    dataType: 'json',

    data: {
      search: ""
    },
    success: function (data) {
      if (data === undefined || data.length == 0) {
        fillAll();
      } else {
        all = data;
      }
    }});
}

function fillRes() {
  $.ajax({
    url: 'algolia/getRandom.php',
    type: 'POST',
    dataType: 'json',

    data: {
      search: "restaurant"
    },
    success: function (data) {
      if (data === undefined || data.length == 0) {
        fillRes();
      } else {
        restaurants = data;
      }

    }});
}

function fillCaf() {
  $.ajax({
    url: 'algolia/getRandom.php',
    type: 'POST',
    dataType: 'json',

    data: {
      search: "cafe"
    },
    success: function (data) {
      if (data === undefined || data.length == 0) {
        fillCaf();
      } else {
        cafes = data;
      }
    }});
}

function fillBar() {
  $.ajax({
    url: 'algolia/getRandom.php',
    type: 'POST',
    dataType: 'json',

    data: {
      search: "bar"
    },
    success: function (data) {
      if (data === undefined || data.length == 0) {
        fillBar();
      } else {
        bars = data;
      }
    }});
}

function init() {

    fillAll();
    fillRes();
    fillCaf();
    fillBar();

}

function getIndex(arr) {
  return Math.floor(Math.random()*arr);
}

function random() {
  let random = $('#random');
  let category = "";
  let data;

  $('#iconRandom').click(function() {
    category = $('input[name=randomCategory]:checked', '#iconRandom').val();
    startRandomSearch();
  });

  function startRandomSearch() {
    var iconCounter = 0;

    if(category == "") {
      data = all[getIndex(all.length)];
    } else if (category == "restaurant") {
      data = restaurants[getIndex(restaurants.length)];
    } else if (category == "cafe") {
      data = cafes[getIndex(cafes.length)];
    } else {
      data = bars[getIndex(bars.length)];
    }

    random.html('<em><br></em>' +
        //'<div class="hit" id="randomhit">' + data["name"] + '</div>' +
        '<div class="resultInfo randomclass" value="' + data["name"] + '">' +
        '<img src="../www/restaurants/' + data["path"] + '/01.jpg" class="rounded thumbImage">' +
        '<h4><b><br>' + data["name"] + '</b></h4>' +
        '<p>' + data["description"] + '</p>' +
        '<p class="infoForIcons">' + data["info"] + '</p>' +
        '<h5>Öffnungszeiten: ' + '</h5>' +
        '<p>Montag: ' + data["hours"]["mon"] + '<br>' +
        'Dienstag: ' + data["hours"]["tue"] + '<br>' +
        'Mittwoch: ' + data["hours"]["wed"] + '<br>' +
        'Donnerstag: ' + data["hours"]["thu"] + '<br>' +
        'Freitag: ' + data["hours"]["fri"] + '<br>' +
        'Samstag: ' + data["hours"]["sat"] + '<br>' +
        'Sonntag: ' + data["hours"]["sun"]+ '</p>' +
        '</div>');

        if (iconCounter < 1) {
            var infoSelector = $(".infoForIcons");

            // ===== Replace the Café Word with Café Icon ====
            var cafeImage = "<img src='images/icons/cafegoldy.svg' height='5%' width='3%' />";
            infoSelector.html(function (_, html) {
                return html.replace(/cafe/g , cafeImage )
            });

            // ===== Replace the Restaurant Word with Restaurant Icon ====
            var restaurantImage = "<img src='images/icons/restaurantgoldy.svg' height='5%' width='3%' />";
            infoSelector.html(function (_, html) {
                return html.replace(/restaurant/g , restaurantImage )
            });

            // ===== Replace the Bar Word with Bar Icon ====
            var barImage = "<img src='images/icons/bargoldy.svg' height='5%' width='3%' />";
            infoSelector.html(function (_, html) {
                return html.replace(/bar/g , barImage )
            });

            // ===== Replace the WIFI Word with WLAN Icon ====
            var wifiImage = "<img src='../www/images/icons/foodicons/wifi.svg' height='5%' width='3%' />";
            infoSelector.html(function (_, html) {
                return html.replace(/wifi/g , wifiImage )
            });

            // ===== Replace the NonSmoker Word with NonSmoker Icon ====
            var nonSmokerImage = "<img src='../www/images/icons/foodicons/NonSmoker.svg' height='5%' width='3%' />";
            infoSelector.html(function (_, html) {
                return html.replace(/nonSmoker/g , nonSmokerImage )
            });

            // ===== Replace the Smoker Word with Smoker Icon ====
            var smokerImage = "<img src='../www/images/icons/foodicons/Smoker.svg' height='5%' width='3%' />";
            infoSelector.html(function (_, html) {
                return html.replace(/smoker/g , smokerImage )
            });

            // ===== Replace the Veggie Word with Veggie Icon ====
            var veggieImage = "<img src='../www/images/icons/foodicons/veggie.svg' height='5%' width='3%' />";
            infoSelector.html(function (_, html) {
                return html.replace(/veggie/g , veggieImage )
            });

            // ===== Replace the Vegan Word with Vegan Icon ====
            var veganImage = "<img src='../www/images/icons/foodicons/veggie.svg' height='5%' width='3%' />";
            infoSelector.html(function (_, html) {
                return html.replace(/vegan/g , veganImage )
            });

            // ===== Replace the Breakfast Word with Breakfast Icon ====
            var breakfastImage = "<img src='../www/images/icons/foodicons/Breakfast.svg' height='5%' width='3%' />";
            infoSelector.html(function (_, html) {
                return html.replace(/breakfast/g , breakfastImage )
            });

            // ===== Replace the Glutenfree Word with Glutenfree Icon ====
            var glutImage = "<img src='../www/images/icons/foodicons/glutenfree2.svg' height='5%' width='3%' />";
            infoSelector.html(function (_, html) {
                return html.replace(/glutenFree/g , glutImage )
            });

            // ===== Replace the Delivery Word with Delivery Icon ====
            var deliveryImage = "<img src='../www/images/icons/foodicons/delivery.svg' height='5%' width='3%' />";
            infoSelector.html(function (_, html) {
                return html.replace(/delivery/g , deliveryImage )
            });

            // ===== Replace the Lunch Word with Lunch Icon ====
            var lunchImage = "<img src='../www/images/icons/foodicons/lunch.svg' height='5%' width='3%' />";
            infoSelector.html(function (_, html) {
                return html.replace(/lunch/g , lunchImage )
            });

            // ===== Replace the Garden Word with Garden Icon ====
            var gardenImage = "<img src='../www/images/icons/foodicons/garden.svg' height='5%' width='3%' />";
            infoSelector.html(function (_, html) {
                return html.replace(/garden/g , gardenImage )
            });

            /* Ende der Funktionen zum Icons replacen */
            /* --------------------------------- */

            /* So dass die If nur einmal beim Erstellen aufgerufen wird */
            iconCounter++;
          }
  }
}


$(document).ready(init);
$(document).ready(random);
