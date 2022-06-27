const APIKEY = "92e182aeebdbb5ae0aef5883442908a4";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";


const options = {
    method:'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
};

const nowPlayingURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`;
const nowPlaying = document.getElementById('nowPlaying');

fetch(nowPlayingURL,options)
    .then(response=>response.json())
    .then(response=>{
        response.results.map((element) => {

            let movieLi = document.createElement("li");
            let movieDiv = document.createElement("div");

            let movieImg = document.createElement("img");
            movieImg.setAttribute("src",IMAGE_URL + element.backdrop_path);
            let movieTitle = document.createElement("h4");
            movieTitle.innerText = element.title;
            let movieRate = document.createElement("div");
            movieRate.classList.add("Star");
            movieRate.innerText = "★" + element.vote_average;

            movieDiv.appendChild(movieImg);
            movieDiv.appendChild(movieTitle);
            movieDiv.appendChild(movieRate);

            movieLi.appendChild(movieDiv);

            nowPlaying.appendChild(movieLi);
        });
    });

const popularURL = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`;
const popular = document.getElementById('popular');

fetch(popularURL,options)
    .then(response=>response.json())
    .then(response=>{
        response.results.map((element) => {

            let movieLi = document.createElement("li");
            let movieDiv = document.createElement("div");
    
            let movieImg = document.createElement("img");
            movieImg.setAttribute("src",IMAGE_URL + element.backdrop_path);
            let movieTitle = document.createElement("h4");
            movieTitle.innerText = element.title;
            let movieRate = document.createElement("div");
            movieRate.classList.add("Star");
            movieRate.innerText = "★" + element.vote_average;
    
            movieDiv.appendChild(movieImg);
            movieDiv.appendChild(movieTitle);
            movieDiv.appendChild(movieRate);
    
            movieLi.appendChild(movieDiv);
            popular.appendChild(movieLi);
        });
    });


const topRatedURL = `https://api.themoviedb.org/3/movie/top_rated?api_key=${APIKEY}&language=en-US&page=1`;
const topRated = document.getElementById('topRated');
fetch(topRatedURL,options)
    .then(response=>response.json())
    .then(response=>{
        response.results.map((element) => {

            let movieLi = document.createElement("li");
            let movieDiv = document.createElement("div");
    
            let movieImg = document.createElement("img");
            movieImg.setAttribute("src",IMAGE_URL + element.backdrop_path);
            let movieTitle = document.createElement("h4");
            movieTitle.innerText = element.title;
            let movieRate = document.createElement("div");
            movieRate.classList.add("Star");
            movieRate.innerText = "★" + element.vote_average;
    
            movieDiv.appendChild(movieImg);
            movieDiv.appendChild(movieTitle);
            movieDiv.appendChild(movieRate);
    
            movieLi.appendChild(movieDiv);
            topRated.appendChild(movieLi);
        });
    });


const upComingURL = `https://api.themoviedb.org/3/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`;
const upComing = document.getElementById('upComing');
fetch(upComingURL,options)
    .then(response=>response.json())
    .then(response=>{
        response.results.map((element) => {
    
            let movieLi = document.createElement("li");
            let movieDiv = document.createElement("div");
        
            let movieImg = document.createElement("img");
            movieImg.setAttribute("src",IMAGE_URL + element.backdrop_path);
            let movieTitle = document.createElement("h4");
            movieTitle.innerText = element.title;
            let movieRate = document.createElement("div");
            movieRate.classList.add("Star");
            movieRate.innerText = "★" + element.vote_average;
        
            movieDiv.appendChild(movieImg);
            movieDiv.appendChild(movieTitle);
            movieDiv.appendChild(movieRate);
        
            movieLi.appendChild(movieDiv);
            upComing.appendChild(movieLi);
        });
    });