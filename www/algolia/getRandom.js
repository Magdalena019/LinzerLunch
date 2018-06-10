function random() {
  let random = $('#random');
  let category = "";

  $('#iconRandom').change(function() {
    category = $('input[name=randomCategory]:checked', '#iconRandom').val();
  });

  //$('#searchRandom').click(function() {
  $('#iconRandom').click(function() {

    $.ajax({
      url: 'algolia/getRandom.php',
      type: 'POST',
      dataType: 'json',

      data: {
        search: category
      },

      success: function(data) {
        //TODO: hier dem template die werte zuweisen
        random.text(data["name"] + " " + data["info"]);
      }
    });

  });
}

$(document).ready(random);
