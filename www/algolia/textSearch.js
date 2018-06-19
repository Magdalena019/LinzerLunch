$(document).ready(function() {
  $('#textSearch').val(' ');

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
              '<img src="../www/restaurants/' + hit.path + '/01.jpg" class="rounded thumbImage">' +
              '<h4><b><br>' + hit.name + '</b></h4>' +
              '<p>' + hit.description + '</p>' +
              '<p>Info: ' + hit.info + '</p>' +
              '<h5>Öffnungszeiten: ' + '</h5>' +
              '<p>Montag: ' + hit.hours.mon + '<br>' +
              'Dienstag: ' + hit.hours.tue + '<br>' +
              'Mittwoch: ' + hit.hours.wed + '<br>' +
              'Donnerstag: ' + hit.hours.thu + '<br>' +
              'Freitag: ' + hit.hours.fri + '<br>' +
              'Samstag: ' + hit.hours.sat + '<br>' +
              'Sonntag: ' + hit.hours.sun + '</p>' +
              '</div>' +
              '<button class="getInfo hide" value="' + hit.name + '">Zurück</button>');

              $('#randomhit').click(function(){
                if($('.randomclass').hasClass("hide")){
                  $('.randomclass').removeClass("hide");
                }else{
                  $('.randomclass').addClass("hide");
                }
            });

          $hit.click(function() {
          var name = hit['name'];
          if($('.resultInfo[value="' + name + '"]').hasClass("hide")){
            $('.resultInfo[value="' + name + '"]').removeClass("hide");
            $(this).removeClass('hide');
            $('.hit').addClass('hide');
          }else{
            $('.resultInfo[value="' + name + '"]').addClass("hide");
          }
        /*  $('.resultInfo[value="' + name + '"]').removeClass('hide');*/

        });
        $hits.push($hit);
      });

      $('#textHits').html($hits);
    }
  });

  textSearch.start();

  $('#textSearch').keydown(function(event) {
  //  console.log(event.which);
    if ( event.which == 32 ||$('#textSearch').val().search(/\S/)==-1) {
       $('#textHits').addClass('hide');
   //event.preventDefault();
 }else{
   $('#textHits').removeClass('hide');
 }

//console.log($('#textSearch').val().search(/\S/));
    //regex - buchstabe zwischen a bis z und A bis Z
  /*  if ($('#textSearch').val().search(/\S/) == -1) {
        $('#hits').addClass('hide');
    } else {
        $('#hits').removeClass('hide');
    }*/

    //$('#hits').addClass('hide');

    $.ajax({
      url: 'algolia/textSettings.php',
      type: 'POST',
      success: function(data){
      }
    });

  //  $('#textHits').removeClass('hide');
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
