$(document).ready(function () {
  
});


var searchBtn = $('#searchBtn');
var titleFld = $('#title');

/*función para acceder a la información de la api tomando el valor del
* texto ingresado en el input (búsqueda)
*/ 
searchBtn.click(function searchMovie() {
  var titleText = titleFld.val();
  alert('listo');
  var url = "http://www.omdbapi.com/?apikey=276881c0&s=" + titleText;
  console.log(url);
  $.ajax({
    type: 'GET',
    url: url,
    success: renderMovies,
    error: renderError
  });
});

//
function renderMovies (response) {
  console.log(response);
  var movies = response.Search;
  var resultsUl = $('#results');
  resultsUl.empty();
  for (var m in movies) {
    var movie = movies[m];
    var title = movie.Title;
    var imdbID = movie.imdbID;
    var poster = movie.Poster;

    console.log([title, imdbID, poster]);

    var moviesList = $('<li class="list-group-item result"></li>');
    var moviePoster = $('<img src="' + poster + '"width=50px"/>');
    moviesList.append(moviePoster);
    moviesList.append('<span>' + title + '</span>');
    resultsUl.append(moviesList);
    //funcion para mostrar id de cada elemento
    
  }

  $('.result').click(function () {
    var str = $(this).text();
    var replacedStr = str.split(' ').join('+');         
    console.log(replacedStr);

    var newUrl = 'http://www.omdbapi.com/?t=' + replacedStr + '&apikey=276881c0';
    console.log(newUrl);
    $.ajax({
      type: 'GET',
      url: newUrl,
      success: movieInfo,
      error: renderError
    });

      function movieInfo(paste) {
        var poster= $('#poster');
        var datos= $('#datos');

        poster.append('<img src="' + paste.Poster + '" alt="poster">');

        datos.append('<h3>' + paste.Title + '</h3> <h4>Año:</h4><p>' 
                      + paste.Year + '</p><h4>Duración: </h4><p>' + paste.Runtime 
                      + '</p><h4>Director:</h4><p>' + paste.Director 
                      + '</p><h4>Escritor: </h4><p>' + paste.Writer 
                      + '</p><h4>Actores: </h4><p>' + paste.Actors 
                      + '</p><a href="' + paste.Website + '">Website Oficial</a>');
    }
      var x = $(this).text();
      for(var i = 0; i< x.length; i++){
        if(x.charAt(i) == " ") {
          var str = x.replace(" ", "+");
        }        
      }      
      console.log(str);
  });


}

function renderError (error) {
  console.log(error);
}

/*
function renderDetails () {

  $('.result').click(function (response) {
    var movies = response.Search;
    var resultsUl = $('#results');
    resultsUl.empty();
    for (var m in movies) {
      var movie = movies[m];
      var title = movie.Title;
      var imdbID = movie.imdbID;
      var poster = movie.Poster;
    }   
    //sacar id del elemento al que se le haga click
    var urlMovie = 'http://www.omdbapi.com/?i=' + imdbID + '&apikey=276881c0';
  })  
  console.log(urlMovie);
}


  $.getJSON('http://www.omdbapi.com/?t=Harry+Potter+and+the+Chamber+of+Secrets&apikey=276881c0').then(function(paste) {
     var poster = $('#poster');
     var titulo = $('#titulo');
     var datos = $('#datos');
     var rating = $('#rating');

     poster.append('<img src="' + paste.Poster + '" alt="poster">');
     titulo.append('<h4 style="font-weight: bold;">' + paste.Title + '</h4>');
     datos.append('<h6 class="h6bigger">Año:</h6><p>' + paste.Year + '</p><h6 class="h6bigger">Duración: </h6><p>' + paste.Runtime + '</p><h6 class="h6bigger">Director:</h6><p>' + paste.Director + '</p><h6 class="h6bigger">Escritor: </h6><p>' + paste.Writer + '</p><h6 class="h6bigger">Actores: </h6><p>' + paste.Actors + '</p><a class=center-align href="' + paste.Website + '">Website Oficial</a>');

     rating.append('<div style="background-color:#ffbf00; border-radius: 20px; width:8em; padding:0.3em; text-align:center; margin-top: 1em; display: inline-block;"> <h6 class="h6bigger">Rating:</h6><p style="font-size:1em;"><strong>'+ paste.imdbRating +'</strong> </p></div>');

   });
*/

>>>>>>> Stashed changes
 