function my_Dictionary() {
    var movie ={
        Title: "The Avengers",
        Genre: "Action",
        Director: "Susan Smith",
        Rating: "PG-13",
    };
    delete movie.Genre; //removes the genre kvp 
document.getElementById("Dictionary").innerHTML = movie.Genre;
}