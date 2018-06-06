$(document).ready(function() {

  $('#textSearch').val(" ");

  const textSearch = instantsearch({
    appId: 'Z0U7V7EJ1E',
    apiKey: 'a85163449a3db7812f4de4b3cafa2e3c',
    indexName: 'restaurants',
    urlSync: true,
    searchParameters: {
    hitsPerPage: 5
  }
  });

  textSearch.addWidget(
    instantsearch.widgets.searchBox({
      container: '#textSearch',
      reset: false,
      magnifier: false,
      autofocus: false
    })
  );

  textSearch.addWidget(
    instantsearch.widgets.hits({
      container: '#textHits',
      templates: {
        item: document.getElementById('textHit-template').innerHTML,
        empty: "Leider kein Restaurant mit diesem Namen gefunden!"
      }
    })
  );

  textSearch.start();

/*
  $('#textSearch').keydown(function() {
    var input = $('#textSearch').val().trim();

    if(input.length > 0) {
      $('#textHits').removeClass('hide');
    }
  });
  */
});
