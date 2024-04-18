
async function fetchData() {
    const api = await fetch("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_release_type=2|3&api_key=04c35731a5ee918f014970082a0088b1");
    const data = await api.json();
    const result = data.results;

    return result;
}

const movieData = async function() {
    const movie = await fetchData(); 

    let card_container = document.querySelector('.card_container');

    movie.slice(0, 5).forEach(data => {
        let div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML= `
            <img src="https://image.tmdb.org/t/p/w200${data.poster_path}" alt="">
            <div class="about">
                <h1>${data.title}</h1>
                <p>Released</p>
            </div>
        `
        card_container.appendChild(div);
    });  

}

movieData();

