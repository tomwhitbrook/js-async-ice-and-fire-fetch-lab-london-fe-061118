function fetchBooks() {
  //write fetch request to the Game of Thrones API

  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => console.log(json));
  
}

function fetchHouses() {
  //write fetch request to the Game of Thrones API

  fetch('https://anapioficeandfire.com/api/houses')
  .then(resp => resp.json())
  .then(json => console.log(json));
  
}

function fetchFifthBook() {
  //write fetch request to the Game of Thrones API

  fetch('https://anapioficeandfire.com/api/books/5')
  .then(resp => resp.json())
  .then(json => console.log(json));
  
}

function fetch1031Char() {
  //write fetch request to the Game of Thrones API

  fetch('https://anapioficeandfire.com/api/characters/1031')
  .then(resp => resp.json())
  .then(json => console.log(json));
  
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

function fetchHousesAll() {
  //write fetch request to the Game of Thrones API

  for(var nof=1; nof<=number_of_result_pages;nof++)
  var URL='https://www.anapioficeandfire.com/api/characters?page='+nof+'&per_page=10';

  fetch(URL)
  .then(resp => resp.json())
  .then(json => console.log(json));
  
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  fetchHouses()
  fetchFifthBook()
  fetch1031Char()
  fetchHousesAll()
})
