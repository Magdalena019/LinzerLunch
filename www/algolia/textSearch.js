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
      data.results.hits.forEach(function(hit) {
        counter++;
        //TODO: Template hier bauen: - class und value müssen beibehalten werden

        var button = $();

        var $hit = $('<em><br></em>' +
            '<div class="hit">' + hit.name + '</div>' +
            '<div class="resultInfo hide" value="' + hit.name + '">' +
            '<img src="../www/restaurants/' + hit.path + '/01.jpg" class="rounded mx-auto d-block">' +
            '<p><b><br>' + hit.name + '</b></p>' +
            '<p>' + hit.description + '</p>' +
            '<p>Info: ' + hit.info + '</p>' +
            '</div>' +
            '<button class="getInfo hide" value="' + hit.name + '">Zurück</button>');

          $hit.click(function() {
          var name = hit['name'];
          $('.resultInfo[value="' + name + '"]').removeClass('hide');
          $(this).removeClass('hide');
          $('.hit').addClass('hide');
        });
        $hits.push($hit);
      });

      $('#textHits').html($hits);
    }
  });

  textSearch.start();

  $('#textSearch').keydown(function() {
    $('#hits').addClass('hide');

    $.ajax({
      url: 'algolia/textSettings.php',
      type: 'POST',
      success: function(data){
      }
    });

    $('#textHits').removeClass('hide');
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
