const APIKEY = "ab2c913ace8800e0fafd60680837213c";
const IMAGE_URL = "http://image.tmdb.org/t/p/w500";
const nowPlayingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`;
const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`;
const topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`;
const upcomingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`;

const nowPlaying = document.getElementById("now-playing");
const popular = document.getElementById("popular");
const topRated = document.getElementById("top-rated");

const upcoming = document.getElementById("upcoming");

const options = {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};

fetch(nowPlayingURL, options)
  .then((res) => res.json())
  .then((res) => {
    res.results.forEach((element) => {
      console.log(element.backdrop_path);
      console.log(element.title);
      console.log(element.vote_average);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", `${IMAGE_URL}${element.backdrop_path}`);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "★" + element.vote_average;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      nowPlaying.appendChild(movie);
    });
  });

fetch(popularURL, options)
  .then((res) => res.json())
  .then((res) => {
    res.results.forEach((element) => {
      console.log(element.backdrop_path);
      console.log(element.title);
      console.log(element.vote_average);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", `${IMAGE_URL}${element.backdrop_path}`);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "★" + element.vote_average;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      popular.appendChild(movie);
    });
  });

fetch(topRatedURL, options)
  .then((res) => res.json())
  .then((res) => {
    res.results.forEach((element) => {
      console.log(element.backdrop_path);
      console.log(element.title);
      console.log(element.vote_average);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", `${IMAGE_URL}${element.backdrop_path}`);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "★" + element.vote_average;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      topRated.appendChild(movie);
    });
  });

fetch(upcomingURL, options)
  .then((res) => res.json())
  .then((res) => {
    res.results.forEach((element) => {
      console.log(element.backdrop_path);
      console.log(element.title);
      console.log(element.vote_average);

      let movie = document.createElement("li");
      let moviediv = document.createElement("div");
      let backdrop = document.createElement("img");
      backdrop.setAttribute("src", `${IMAGE_URL}${element.backdrop_path}`);
      let title = document.createElement("h4");
      title.innerText = element.title;
      let rate = document.createElement("span");
      rate.innerText = "★" + element.vote_average;
      moviediv.appendChild(backdrop);
      moviediv.appendChild(title);
      moviediv.appendChild(rate);
      movie.appendChild(moviediv);
      upcoming.appendChild(movie);
    });
  });