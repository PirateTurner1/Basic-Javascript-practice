console.log('i am javaScript running in your page!')

let main header = document.querySelector('h1')

console.log(mainHeader)

let allHeaders = document.queryselectorAll('h1')

console.log(allHeaders)

mainHeader.textContent = 'Austin is the Best!'

main header.setAttribute("style", "color:red; border:1px solid blue;")

let newDiv = document.createElement("div");

newDiv.textContent = "Here I am! A new Div"

document.body.appendChild(newDiv)

document.querySelector('main').setAttribute("style", "background-color:#dfdfdf;")

document.querySelector('main').appendChild(newDiv)


//for main javascript file.

//import things from a different server. 
//remove these so that it can be put in its right place!!!   

import { films } from 'assets/fims.js'

console.log(films[0].opening_crawl)

let mainSection = document.querySelector('main')

let film1 = document.createElement('div')
let film2 = document.createElement('div')
let film3 = document.createElement('div')
let film4 = document.createElement('div')
let film5 = document.createElement('div')
let film6 = document.createElement('div')
let film7 = document.createElement('div')

Film1.textContent = Film[0].opening_crawl
Film2.textContent = Film[1].opening_crawl
Film3.textContent = Film[2].opening_crawl
Film4.textContent = Film[3].opening_crawl
Film5.textContent = Film[4].opening_crawl
Film6.textContent = Film[5].opening_crawl
Film7.textContent = Film[6].opening_crawl