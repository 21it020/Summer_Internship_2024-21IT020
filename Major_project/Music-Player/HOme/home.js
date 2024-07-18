// Retrieve the username from localStorage and display it
let username = localStorage.getItem('username');
console.log(username);

let userection = document.getElementById('username');
if (userection) {
    userection.innerHTML = `<h1>${username}</h1>`;
} else {
    console.error('Element with ID "username" not found.');
}

// Logout functionality
let logout = document.getElementById('logout');
if (logout) {
    logout.addEventListener('click', (e) => {
        e.preventDefault();
        location.href = "../Signup-Login/login.html";
    });
} else {
    console.error('Element with ID "logout" not found.');
}

// Fetch and display albums
let albumdiv = document.getElementById('albumdiv');
let mainalbumdiv = document.getElementById('main_album_div');
let mainsongsdiv = document.getElementById('main_song_div');
let songsdiv = document.getElementById('songsdiv');

if (albumdiv && mainalbumdiv && mainsongsdiv && songsdiv) {
    fetch('./data.json')
        .then(res => res.json())
        .then(data => displayAlbums(data));
} else {
    console.error('Required elements for albums or songs display not found.');
}

let displayAlbums = (data) => {
    // Clear existing albums if any
    albumdiv.innerHTML = '';

    data.forEach(element => {
        let div = document.createElement('div');
        div.innerHTML = `<img src="${element.albumimage}">
                         <p>${element.albumname}</p>`;
        albumdiv.appendChild(div);

        div.addEventListener('click', () => {
            mainalbumdiv.style.display = 'none';
            mainsongsdiv.style.display = 'flex';
            displaySongs(element.songs);
        });
    });

    // Go back to album view
    let goback = document.getElementById('goback');
    if (goback) {
        goback.addEventListener('click', () => {
            mainsongsdiv.style.display = 'none';
            mainalbumdiv.style.display = 'flex';
            songsdiv.innerHTML = ''; // Clear songs div when going back
        });
    } else {
        console.error('Element with ID "goback" not found.');
    }
};

let displaySongs = (songs) => {
    // Clear existing songs if any
    songsdiv.innerHTML = '';

    songs.forEach(song => {
        let div = document.createElement('div');
        div.innerHTML = `<p>${song.songname}</p>
                         <h4>${song.artist}</h4>
                         <i class="fa-light fa-heart"></i>
                         <i class="fa-duotone fa-circle-play" style="--fa-primary-color: #000000; --fa-secondary-color: #00ff1e; --fa-secondary-opacity: 1;"></i>`;
        songsdiv.appendChild(div);

        let playbtn = div.querySelector('.fa-circle-play');
        playbtn.addEventListener('click', () => {
            playSong(song);
        });

        let likebtn = div.querySelector('.fa-heart');
        likebtn.addEventListener('click', () => {
            addToLiked(song);
        });
    });
};

let playSong = (song) => {
    let playblock = document.getElementById('play-block');
    if (playblock) {
        playblock.style.display = 'flex';
        playblock.innerHTML = `<p>${song.songname}</p>
                               <audio src="${song.song}" autoplay controls></audio>`;
    } else {
        console.error('Element with ID "play-block" not found.');
    }
};

let addToLiked = (song) => {
    let likeblock = document.getElementById('like-block');
    if (likeblock) {
        let likedSongsDiv = likeblock.querySelector('.liked-songs');
        let div = document.createElement('div');
        div.innerHTML = `<p>${song.songname}</p>
                         <i class="fa-duotone fa-circle-play" style="--fa-primary-color: #000000; --fa-secondary-color: #00ff1e; --fa-secondary-opacity: 1;"></i>
                         <button class="removebtn">Remove</button>`;
        likedSongsDiv.appendChild(div);
        let playbtn = div.querySelector('.fa-circle-play');
        playbtn.addEventListener('click', () => {
            playSong(song);
        });

        let removebtn = div.querySelector('.removebtn');
        removebtn.addEventListener('click', () => {
            likedSongsDiv.removeChild(div);
        });
    } else {
        console.error('Element with ID "like-block" not found.');
    }
};
