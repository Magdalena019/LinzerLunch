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
        random.text(data["name"] + " " + data["info"]);
      }
    });
  }
}

$(document).ready(random);
