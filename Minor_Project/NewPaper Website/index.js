let headlines = document.getElementById('headlines');
let technology = document.getElementById('technology');
let entertainment = document.getElementById('entertainment');
let sports = document.getElementById('sports');
let health = document.getElementById('health');
let science = document.getElementById('science');
let business = document.getElementById('business');




// Fetch and display headlines
let fetchheadlines = async function () {
    let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=68e9ec5280974327a10c4fae926ce5a9');
    let data = await result.json();
    displayheadlines(data.articles);
}

fetchheadlines();

let displayheadlines = (data) => {
    data.forEach(element => {
        let subdiv = document.createElement('div');
        subdiv.style.backgroundImage = `url(${element.urlToImage})`;
        subdiv.innerHTML = `<h2>${element.title}</h2>`;
        headlines.appendChild(subdiv);
    });
}

// Fetch and display technology news
let fetchtechnology = async function () {
    let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=68e9ec5280974327a10c4fae926ce5a9');
    let data = await result.json();
    displaytechnology(data.articles);
}

fetchtechnology();

let displaytechnology = (data) => {
    data.forEach(element => {
        let subdiv = document.createElement('div');
        
        subdiv.innerHTML = `<h3>${element.title}</h3>
        <img src='${element.urlToImage}'>
        <p>${element.description}</p>
        <a href='${element.url}' target='_blank'><button>Explore Official website</button></a>`;
        technology.appendChild(subdiv);
    });
}

// Similarly, add functions for other categories
let fetchentertainment = async function () {
    let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=68e9ec5280974327a10c4fae926ce5a9');
    let data = await result.json();
    displayentertainment(data.articles);
}

fetchentertainment();

let displayentertainment = (data) => {
    data.forEach(element => {
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h3>${element.title}</h3>
        <img src='${element.urlToImage}'>
        <p>${element.description}</p>
        <a href='${element.url}' target='_blank'><button>Explore Official website</button></a>`;
        entertainment.appendChild(subdiv);
    });
}

let fetchsports = async function () {
    let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=68e9ec5280974327a10c4fae926ce5a9');
    let data = await result.json();
    displaysports(data.articles);
}

fetchsports();

let displaysports = (data) => {
    data.forEach(element => {
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h3>${element.title}</h3>
        <img src='${element.urlToImage}'>
        <p>${element.description}</p>
        <a href='${element.url}' target='_blank'><button>Explore Official website</button></a>`;
        sports.appendChild(subdiv);
    });
}

let fetchhealth = async function () {
    let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=68e9ec5280974327a10c4fae926ce5a9');
    let data = await result.json();
    displayhealth(data.articles);
}

fetchhealth();

let displayhealth = (data) => {
    data.forEach(element => {
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h3>${element.title}</h3>
        <img src='${element.urlToImage}'>
        <p>${element.description}</p>
        <a href='${element.url}' target='_blank'><button>Explore Official website</button></a>`;
        health.appendChild(subdiv);
    });
}

let fetchscience = async function () {
    let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=68e9ec5280974327a10c4fae926ce5a9');
    let data = await result.json();
    displayscience(data.articles);
}

fetchscience();

let displayscience = (data) => {
    data.forEach(element => {
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h3>${element.title}</h3>
        <img src='${element.urlToImage}'>
        <p>${element.description}</p>
        <a href='${element.url}' target='_blank'><button>Explore Official website</button></a>`;
        science.appendChild(subdiv);
    });
}

let fetchbusiness = async function () {
    let result = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=68e9ec5280974327a10c4fae926ce5a9     ');
    let data = await result.json();
    displaybusiness(data.articles);
}

fetchbusiness();

let displaybusiness = (data) => {
    data.forEach(element => {
        let subdiv = document.createElement('div');
        subdiv.innerHTML = `<h3>${element.title}</h3>
        <h3>business</h3>
        <img src='${element.urlToImage}'>
        <p>${element.description}</p>
        <a href='${element.url}' target='_blank'><button>Explore Official website</button></a>`;
        business.appendChild(subdiv);
    });
}

