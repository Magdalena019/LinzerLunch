function random() {
  let random = $('#random');

  $('#iconRandom').click(function() {

    $.ajax({
           url: 'algolia/getRandom.php',
           type: 'POST',
           dataType: 'json',
           success: function (data) {
             //TODO: hier dem template die werte zuweisen
             random.text(data["name"]);
           }
       });

  });
}

$(document).ready(random);
