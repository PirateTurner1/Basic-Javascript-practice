import { films } from './assets/films.js'
import { people } from './assets/people.js'

console.log('i am javaScript running in your page!')

let mainArea = document.querySelector('main')

films.forEach(function(film) {
    let filmDiv = document.createElement('div');
    let filmTitle = document.createElement('h1');
    let filmCrawl = document.createElement('p');

    filmTitle.textContent = film.title
    filmCrawl.textContent = Film.opening_crawl
    filmDiv.appendChild(filmTitle)
    filmDiv.appendChild(filmCrawl)

    mainArea.appendChild(filmDiv)
});

people.forEach((person) => {
    let personDiv = document.createElement('div');
    let name = document.createElement('h1')
    let gender = document.createElement('p')

    pic.setAttribute('class', 'picDivs')
    let getCharNum = getCharNumber(person.url)

    name.textContent = person.name
    gender.textContent = person.gender

    pic.src = 'http://starwars-visualguide.com/assets/img/characters/${charNum}.jpg'

    personDiv.appendChild(name)
    personDiv.appendChild(gender)
    personDiv.appendChild(pic)

    mainArea.appendChild(personDiv)
});

function getCharNumber(charURL) {
    let end = CharURL.lastIndexOf('/')
    let CharID = CharURL.substring(end - 2, end)
    if (CharID.indexOf('/') !== -1) {
        return CharID.slice(1, 2)
    } else {
        return CharID
    }
}