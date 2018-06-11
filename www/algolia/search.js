var numberOfResults = 0;
var numberOfRR = 0;

function init() {
  $('input:checkbox').removeAttr('checked');
  $('input:checkbox').removeClass('checked');
  $('input:radio').removeAttr('checked');
  $('#search').val(" ");

  $.ajax({
    url: 'algolia/searchSettings.php',
    type: 'POST',

    data: {
      search: ""
    },

    success: function(data) {

      numberOfResults = data;
      numberOfRR = data;
    }
  });

  /*var togSrc= ["images/icons/resgoldy.png","images/icons/cafe.png"];
  $('#iconRes').click(function(){
    this.src=togSrc.reverse()[0];
  }*/
}

function search() {
  var readyToFetchMore = true;

  const search = instantsearch({
    appId: 'Z0U7V7EJ1E',
    apiKey: 'a85163449a3db7812f4de4b3cafa2e3c',
    indexName: 'restaurants',
    urlSync: true,
    searchParameters: {
      hitsPerPage: 100
    }
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
    $('#headline').removeClass('hide');

    $.ajax({
      url: 'algolia/searchSettings.php',
      type: 'POST',
      dataType: 'json',

      data: {
        search: $('search').val()
      },

      success: function(data) {

      }
    });

    $('div.ais-hits--item').addClass('col-lg-3 cl-sm-1');


  });

  $('#resetButton').click(function() {
    $('input:checkbox').prop('checked', false);
    $('input:radio').prop('checked', false);
    $('#search').val($('input[name=category]:checked', '#iconRestaurant').val());
    $('#hits').addClass('hide');
    $('#headline').addClass('hide');
    $('input[type=checkbox] + .checked').removeClass('checked');
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
    $('#headline').addClass('hide');
    startSearch();
  });

  function startSearch() {
    var query = $('#search').val().trim();
    search.helper.setQuery(query).search();
  }
}

$(document).ready(init);
$(document).ready(search);
