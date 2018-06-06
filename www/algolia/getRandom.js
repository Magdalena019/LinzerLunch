$('#iconRandom').click(function() {

  alert('clicked');

  $.ajax({
    type: "POST",
    url: "getRandom.php",
  })
});

function random() {
  $('#iconRandom').click(function() {

    $.ajax({
      url: 'aloglia/getRandom.php',
      type: 'POST',

      success: function() {
        alert('Email Sent');
      }
    });

  });
}

$(document).ready(random);
