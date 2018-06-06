function random() {
  let random = $('#random');

  $('#iconRandom').click(function() {

    $.ajax({
      url: 'algolia/getRandom.php',
      type: 'POST',
      dataType: "json",

      success: function(data) {
        var div = $('<div>');
        div.text(data.name);
        div.appendTo(random);
      }
    });

  });
}

$(document).ready(random);
