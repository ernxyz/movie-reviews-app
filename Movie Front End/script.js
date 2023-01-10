const APILINK = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=ef9cc109c04b0c91024d509c9bf1b9fb&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=ef9cc109c04b0c91024d509c9bf1b9fb&query=";

const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

returnMovies(APILINK);
function returnMovies(url){
  fetch(url).then(res => res.json())
  .then(function(data){
    console.log(data.results);
    data.results.forEach(element => {
      const div_card = document.createElement("div"); 
      div_card.setAttribute("class", "card");

      const div_row = document.createElement("div");
      div_row.setAttribute("class", "row");

      const div_column = document.createElement("div");
      div_column.setAttribute("class", "column");
      
      const image = document.createElement("img"); 
      image.setAttribute("class", "thumbnail");
      image.setAttribute("id", "image");
          
      const title = document.createElement("h3");
      title.setAttribute("id", "title");

      const center = document.createElement("center");   
    
      title.innerHTML = `${element.title}<br><a href="movie.html?id=${element.id}&title=${element.title}">Reviews</a>`;
      image.src = IMG_PATH + element.poster_path;

      center.appendChild(image);
      div_card.appendChild(center);
      div_card.appendChild(title);
      div_column.appendChild(div_card);
      div_row.appendChild(div_column);

      main.appendChild(div_row);
    });
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  main.innerHTML = "";

  const searchItem = search.value;

  if (searchItem){
    returnMovies(SEARCH_API + searchItem);
    search.value = "";
  }
});