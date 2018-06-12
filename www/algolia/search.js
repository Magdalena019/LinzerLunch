function init() {
  $('input:checkbox').removeAttr('checked');
  $('input:checkbox').removeClass('checked');
  $('input:radio').removeAttr('checked');
  $('#search').val(" ");
  $('div#checkicons').hide();

  /*var togSrc= ["images/icons/resgoldy.png","images/icons/cafe.png"];
  $('#iconRes').click(function(){
    this.src=togSrc.reverse()[0];
  }*/
}

function search() {
  var readyToFetchMore = true;
  var hitsContainer = $('#hits');

  const search = instantsearch({
    appId: 'Z0U7V7EJ1E',
    apiKey: 'a85163449a3db7812f4de4b3cafa2e3c',
    indexName: 'restaurants'
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

  /* Infinte Scroll */
/*  search.addWidget({
      init: function(params) {
        params.helper.setQueryParameter('hitsPerPage', 8);

        function scrollhandler() {

          var isAtBottomOfPage = $(window).scrollTop() + $(window).height() >
            $(document).height() - 500;

          if (readyToFetchMore && isAtBottomOfPage) {
            readyToFetchMore = false;
            params.helper.nextPage().search();
          }
        }

        $(window).bind("scroll", scrollhandler);
      },

      render: function(params) {

        readyToFetchMore = true;

        var hits = params.results.hits;


        if (params.state.page === 0) {
          hitsContainer.html('');
        }

        var html = '';

        if (params.results.nbHits > 0) {

          html = hits.map(function(hit) {

            //TODO: Template hier bauen:

            return '<div class="ais-hits--item col-lg-3 cl-sm-1>"' +
            '<section>' +
              '<ul class="cards">' +
                '<li class="cards__item ">' +
                  '<div class="card">' +

                  // TODO: Image Source Path: src="restaurants/' + hit.path + '/01.jpg"

                    '<div class="card__image card__image--restaurant"></div>' +
                    '<div class="card__content">' +
                      '<h2 class="card-title">' + hit.name + '</h2>' +
                      '<p class="card__text">' + hit.description + '</p>' +
                      '<button class="btn btn--block card__btn">Mehr Infos hier!</button>' +
                    '</div>' +
                  '</div>' +
                '</li>' +
              '</ul>' +
              '</section>' +
            '</div>';

          });

        } else {
          html = ['Leider kein passendes Restaurant gefunden!'];
        }

        hitsContainer.append(html.join(''));
      }
    }); */

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

    $.ajax({
      url: 'algolia/searchSettings.php',
      type: 'POST',

      data: {
        search: $('#search').val()
      },

      success: function(data) {
        if (data == 0) {
          $('#headline').addClass('hide');
          $('#noResult').removeClass('hide');
        } else {
          $('#headline').removeClass('hide');
          $('#noResult').addClass('hide');
        }
      }
    });

    $('#hits').removeClass('hide');
    $('#headline').removeClass('hide');

    $('div.ais-hits--item').addClass('col-lg-3 cl-sm-1');


  });

  $('#resetButton').click(function() {
    $('input:checkbox').prop('checked', false);
    $('input:radio').prop('checked', false);
    $('#search').val($('input[name=category]:checked', '#iconRestaurant').val());
    $('#hits').addClass('hide');
    $('#headline').addClass('hide');
    $('input[type=checkbox] + .checked').removeClass('checked');
    $('div#checkicons').fadeOut(1000, 0);
    setSettings();
    startSearch();
  });

  $('#iconRestaurant').click(function() {
    //$('input:checkbox').prop('checked', false);
    $('div#checkicons').fadeTo(1000, 1.0);
    $('#hits').addClass('hide');
  });

  $('#iconRestaurant').change(function() {
    $('#search').val($('input[name=category]:checked', '#iconRestaurant').val());
    $('input:checkbox').prop('checked', false);
    $('#hits').addClass('hide');
    setSettings();
    startSearch();
  });

  $('#checkicons input[type=checkbox] +div').click(function() {
    if ($(this).hasClass("checked")) {
      $('#search').val($('#search').val() + " " + $(this).attr("value"));
    } else {
      $('#search').val($('#search').val().replace($(this).attr("value"), ""));
    }
    $('#hits').addClass('hide');
    $('#headline').addClass('hide');
    setSettings();
    startSearch();
  });

  function startSearch() {
    var query = $('#search').val().trim();
    search.helper.setQuery(query).search();
  }

  function setSettings() {
    $.ajax({
      url: 'algolia/searchSettings.php',
      type: 'POST',
      success: function(data) {
      }
    });
  }
}

$(document).ready(init);
$(document).ready(search);
