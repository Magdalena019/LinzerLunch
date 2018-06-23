var check = true;
var start = false;

function init() {
  $('input:checkbox').removeAttr('checked');
  $('input:checkbox').removeClass('checked');
  $('input:radio').removeAttr('checked');
  $('#search').val(" ");
  $('div#checkicons').hide();
  $('div#stats').addClass('hide');
  $('#heading').addClass('hide');
  $('#noResult').addClass('hide');
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

  search.addWidget({
    init: function(params) {
      /*params.helper.setQueryParameter('hitsPerPage', 5);

      function scrollhandler() {

        var isAtBottomOfPage = $(window).scrollTop() + $(window).height() >
          $(document).height() - 1000;

        if (readyToFetchMore && isAtBottomOfPage) {
          readyToFetchMore = false;
          params.helper.nextPage().search();
        }
      }

      $(window).bind("scroll", scrollhandler); */
    },

    render: function(params) {
      params.helper.setQueryParameter('hitsPerPage', 40);

      readyToFetchMore = true;

      var hits = params.results.hits;

      if (params.results.nbHits == 0) {
        params.helper.setQueryParameter('removeWordsIfNoResults', 'allOptional').search();
        $('#heading').addClass('hide');
        $('#noResult').removeClass('hide');
        check = false;
      } else if (params.results.nbHits != 0 && check && start) {
        $('#heading').removeClass('hide');
        $('#noResult').addClass('hide');
      }

      if (params.state.page === 0) {
        hitsContainer.html('');
      }

      var html = '';

      if (params.results.nbHits > 0) {
        check = true;
        html = hits.map(function(hit) {

          //TODO: Template hier bauen:

          return '<div class="ais-hits--item  col-xs-4 col-sm-4 col-md-4 col-lg-4>' +
            '<section>' +
            '<ul class="cards">' +
            '<li class="cards__item ">' +
            '<div class="card">' +

            '<img src="../www/restaurants/' + hit.path + '/01.jpg" class="card__image hideMore" height="20%" value="' + hit.name + '"' +
            '<div class="card__content">' +
            '<br>' +
            '<h2 class="card-title">' + hit.name + '</h2>' +
            '<p class="card__text information" value="' + hit.name + '">' + hit.description + '</p>' +
            //TODO: Aufklappbares Template bauen:
            '<div class="moreInfoTemplate hide" value="' + hit.name + '">' +
            '<p value="' + hit.name + '" class="information hours">' +
            hit.street + '<br>' +
            // hit.zip + '&nbsp;' + hit.city + is eigentlich nicht notwendig im Moment haben ja sowieso nur LinzInnenstadt
            '<br>Mo: ' + hit.hours.mon +
            '<br>Di: ' + hit.hours.tue +
            '<br>Mi: ' + hit.hours.wed +
            '<br>Do: ' + hit.hours.thu +
            '<br>Fr: ' + hit.hours.fri +
            '<br>Sa: ' + hit.hours.sat +
            '<br>So: ' + hit.hours.sun +
            '</p>' +
            '</div>' +

            '<button class="moreInfo btn btn--block card__btn" value="' + hit.name + '">Mehr Infos hier!</button>' +
            '</div>' +
            '</div>' +
            '</li>' +
            '</ul>' +
            '</section>' +
            '</div>';
        });

        params.helper.setQueryParameter('removeWordsIfNoResults', 'none');
      }

      hitsContainer.append(html.join(''));
    }
  });

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
    setSettings();
    startSearch();
    $('#hits').removeClass('hide');
    $('html, body').animate({scrollTop: $('#results').offset().top}, 500, 'linear');
    $('div.ais-hits--item').addClass('col-lg-3 cl-sm-1');
  });

  $('#resetButton').click(function() {
    $('input:checkbox').prop('checked', false);
    $('input:radio').prop('checked', false);
    $('#search').val($('input[name=category]:checked', '#iconRestaurant').val());
    $('#hits').addClass('hide');
    $('input[type=checkbox] + .checked').removeClass('checked');
    $('div#checkicons').fadeOut(1000, 0);
    $('div#stats').addClass('hide');
    $('#heading').addClass('hide');
    $('#noResult').addClass('hide');
    start = false;
    $('html, body').animate({
      scrollTop: $('#chooseType').offset().top
    }, 500, 'linear');

    $('.randomrestaurant').removeClass('checked');
    $('.randomcafe').removeClass('checked');
    $('.randombar').removeClass('checked');
    $('.randomall').removeClass('checked');
    setSettings();
  });

  $('#iconRestaurant').click(function() {
    $('div#checkicons').fadeTo(1000, 1.0);
    $('#hits').addClass('hide');
    $('div#stats').addClass('hide');
    $('#heading').addClass('hide');
    $('#noResult').addClass('hide');
    start = false;
    setSettings();
  });

  $('#iconRestaurant').change(function() {
    $('#search').val($('input[name=category]:checked', '#iconRestaurant').val());
    $('input:checkbox').prop('checked', false);
    $('#hits').addClass('hide');
    $('#checkicons input[type=checkbox] +div').removeClass('checked');
    setSettings();
  });

  $('#checkicons input[type=checkbox] +div').click(function() {
    if ($(this).hasClass("checked")) {
      $('#search').val($('#search').val() + " " + $(this).attr("value"));
    } else {
      $('#search').val($('#search').val().replace($(this).attr("value"), ""));
    }
    $('#hits').addClass('hide');
    $('div#stats').removeClass('hide');
    $('#heading').removeClass('hide');
    start = true;

    setSettings();
  });

  function startSearch() {
    var query = $('#search').val().trim();
    search.helper.setQuery(query).search();
  }

  function setSettings() {
    $.ajax({
      url: 'algolia/searchSettings.php',
      type: 'POST',
      data: { search: '' },
      success: function(data) {}
    });
  }
}

document.addEventListener('click', (e) => {
  if (e.target.matches('.moreInfo')) {
    let name = e.target.value;
    $('.moreInfoTemplate[value="' + name + '"]').toggleClass("hide");
    if ($('.moreInfo[value="' + name + '"]').text() == "Mehr Infos hier!") {
      $('.moreInfo[value="' + name + '"]').text('Weniger anzeigen!');
    } else {
      $('.moreInfo[value="' + name + '"]').text('Mehr Infos hier!');
    }
    $('.hideMore[value="' + name + '"]').toggleClass("hide");
  }
})

$(document).ready(init);
$(document).ready(search);
