function init() {
  $('input:checkbox').removeAttr('checked');
  $('input:radio').removeAttr('checked');
  $('#search').val(" ");
}

function search() {
  var readyToFetchMore = true;
  var hitsContainer = $('#hits');

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

  search.addWidget(
  {
    init: function (params) {

      function scrollhandler() {

        var isAtBottomOfPage = $(window).scrollTop() + $(window).height()
                                > $(document).height() - 500;

        if (readyToFetchMore && isAtBottomOfPage) {
          readyToFetchMore = false;
          params.helper.nextPage().search();
        }
      }

      $(window).bind("scroll", scrollhandler);
    },

/*    render: function (params) {

      readyToFetchMore = true;

      var hits = params.results.hits;


      if (params.state.page === 0) { // because '0' means we changed the query
        hitsContainer.html('');
      }

      var html = '';

      if (params.results.nbHits > 0) {

        html = hits.map(function (hit) {

          return '<div class="hit">'
                    + '<img src="http://image.tmdb.org/t/p/w300/' + hit.image_path + '" />'
                    + '<div class="actor_name">' + hit.name + '</div>'
                  + '</div>';

        });

      } else {
          html = ['No results'];
      }

      hitsContainer.append(html.join(''));
    } */
  }
);

  search.start();

  $('#search').keydown(function() {
    return false;
  });

  $('#goButton').click(function() {
    startSearch();
    $('#hits').removeClass('hide');
    $('#headline').removeClass('hide');
  });

  $('#resetButton').click(function() {
    $('input:checkbox').prop('checked', false);
    $('#search').val($('input[name=category]:checked', '#iconRestaurant').val());
    $('#hits').addClass('hide');
    $('#headline').addClass('hide');
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

    //meldung "keine restaurants" noch bevor go button
    //alert($('#numberOfResults').text());
    // nimmt wert von voriger suche

    //if ($('#numberOfResults').text() == 0) {
    //  $('#hits').removeClass('hide');
    //}
  }
}

$(document).ready(init);
$(document).ready(search);
