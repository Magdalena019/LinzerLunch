$(document).ready(function() {

  init();

  const search = instantsearch({
    appId: 'Z0U7V7EJ1E',
    apiKey: 'a85163449a3db7812f4de4b3cafa2e3c',
    indexName: 'restaurants',
    urlSync: true,
  });

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search',
      reset: false,
      magnifier: false,
      autofocus: false
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: document.getElementById('hit-template').innerHTML,
        empty: "Leider kein passendes Restaurant gefunden!"
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.stats({
      container: '#stats',
      templates: {
        body: document.getElementById('stats-template').innerHTML
      }
    })
  );

  search.start();

  $('#search').keydown(function() {
    return false;
  });

  $('#goButton').click(function() {
    startSearch();
    $('#hits').removeClass('hide');
  });

  $('#resetButton').click(function() {
    $('input:checkbox').prop('checked', false);
    $('#search').val($('input[name=category]:checked', '#iconRestaurant').val());
    $('#hits').addClass('hide');
    startSearch();
  });

  $('#iconRestaurant').change(function() {
    $('#search').val($('input[name=category]:checked', '#iconRestaurant').val());
    $('input:checkbox').prop('checked', false);
    startSearch();
  });

  $('#checkicons input[type=checkbox]').change(function() {
    if (this.checked) {
      $('#search').val($('#search').val() + " " + $(this).val());
    } else {
      $('#search').val($('#search').val().replace($(this).val(), ""));
    }
    $('#hits').addClass('hide');
    startSearch();
  });

  function startSearch() {
    var query = $('#search').val().trim();
    search.helper.setQuery(query).search();

    alert($('#numberOfResults').text());
    // nimmt wert von voriger suche 

    if ($('#numberOfResults').text() == 0) {
      $('#hits').removeClass('hide');
    }
  }

  function init() {
    $('input:checkbox').removeAttr('checked');
    $('input:radio').removeAttr('checked');
    $('#search').val(" ");
  }
});
