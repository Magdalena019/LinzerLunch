function random() {
  let random = $('#random');
  let category = "";

  $('#iconRandom').click(function() {
    category = $('input[name=randomCategory]:checked', '#iconRandom').val();
    startRandomSearch();
  });

  function startRandomSearch() {
    $.ajax({
      url: 'algolia/getRandom.php',
      type: 'POST',
      dataType: 'json',

      data: {
        search: category
      },

      success: function(data) {
        //TODO: hier dem template die werte zuweisen
        /*random.text(data["name"] + " " + data["info"]);*/
        random.html('<em><br></em>' +
            '<div class="hit">' + data["name"] + '</div>' +
            '<div class="resultInfo" value="' + data["name"] + '">' +
            '<img src="../www/restaurants/' + data["path"] + '/01.jpg" class="rounded thumbImage">' +
            '<h4><b><br>' + data["name"] + '</b></h4>' +
            '<p>' + data["description"] + '</p>' +
            '<p>Info: ' + data["info"] + '</p>' +
            '<h5>Öffnungszeiten: ' + '</h5>' +
            '<p>Montag: ' + data["hours"]["mon"] + '<br>' +
            'Dienstag: ' + data["hours"]["tue"] + '<br>' +
            'Mittwoch: ' + data["hours"]["wed"] + '<br>' +
            'Donnerstag: ' + data["hours"]["thu"] + '<br>' +
            'Freitag: ' + data["hours"]["fri"] + '<br>' +
            'Samstag: ' + data["hours"]["sat"] + '<br>' +
            'Sonntag: ' + data["hours"]["sun"]+ '</p>' +
            '</div>')
      }
    });
  }
}

$(document).ready(random);
