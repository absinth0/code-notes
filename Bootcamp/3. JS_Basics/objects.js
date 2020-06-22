var movies = [
    {
        title: "Titanic",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Avatar",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "Shawshank Redemption",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Seven",
        rating: 4,
        hasWatched: false
    }
];

function watchList() {
    movies.forEach(movie);
}

function movie(movie) {
    if (movie.hasWatched) {
        console.log("You have watched \"" + movie.title + "\" - " + movie.rating + " stars");
    }
    else {
        console.log("You have not watched \"" + movie.title + "\" - " + movie.rating + " stars");
    }
}