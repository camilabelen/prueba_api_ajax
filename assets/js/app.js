$(document).ready(function () {
 
});

var searchBtn = $('#searchBtn');
var titleFld = $('#title');
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

    var moviesList = $('<li class="list-group-item"></li>');
    var moviePoster = $('<img src="' + poster + '"width=50px"/>');
    moviesList.append(moviePoster);
    moviesList.append(title);
    resultsUl.append(moviesList);

    moviesList.click(renderDetails);
  }
}

function renderError (error) {
  console.log(error);
}

function renderDetails () {
  console.log('details');
}