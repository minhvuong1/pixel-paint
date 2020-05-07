var colorInput = document.querySelector('.color-form input');
var colorForm = document.querySelector('.color-form');
var colorBlock = document.querySelector('.color-block');
var movieInput = document.querySelector('.movie-form input');
var movieForm = document.querySelector('.movie-form');

if (colorBlock.style.backgroundColor == '') {
    colorBlock.style.backgroundColor = 'palegreen';
    colorInput.value = 'palegreen';
}

colorForm.addEventListener('submit', e => {
    e.preventDefault();
    if (colorBlock.style.backgroundColor == '') {
        colorBlock.style.backgroundColor = 'black';
    } else {
        colorBlock.style.backgroundColor = colorInput.value;
    }
})

for (i = 0; i < 4411; i++) {
    var newPixel = document.createElement('div');
    newPixel.classList.add('pixel');
    newPixel.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = colorBlock.style.backgroundColor;
    })
    document.body.appendChild(newPixel);
}

movieForm.addEventListener('submit', e => {
    e.preventDefault();
    var movieTitle = movieInput.value;
    const url = `http://www.omdbapi.com/?t=${movieTitle}&apikey=2f6435d9`;
    axios.get(url).then((response) => {
        var result = response.data;
        document.body.style.backgroundImage = `url("${result.Poster}")`;
    });

})
