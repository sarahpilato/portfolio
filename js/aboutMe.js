// this is the data for holding which page we're on
let pageNumber = 0

// have the content for pages
const pages = [
    {copy: `a Toronto-based web developer who is interested in design`, background: '#F2DFD7', circle: '#B4CDED'},
  {copy: `obsessed with skincare (let's talk about our skincare routines!!!)`, background: '#B4CDED', circle: '#E8FCCF'},
  {copy: `a lover of Animal Crossing (coziest game ever)`, background: '#9a96ac', circle: '#ECEBF3'},
  {copy: `a mom to a mini bernadoodle named Koji`, background: '#B4CDED', circle: '#ECEBF3' }
]

//pick the relevant tags
const nextTag = document.querySelector('footer img.next')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const outputTag = document.querySelector('h2')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')
//make a next section to increase the pageNumber
const next = function() {
  pageNumber = pageNumber + 1
  
  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }
  
  updateSection()
}

const previous = function() {
  pageNumber = pageNumber - 1
  
  if (pageNumber < 0) {
      pageNumber = pages.length - 1
      }
  updateSection()
}

const random = function () {
  pageNumber = Math.floor ( Math.random() * pages.length )
  updateSection()
 }

const updateSection = function () {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}
      
nextTag.addEventListener('click', function() {
  next()
})

previousTag.addEventListener('click', function() {
  previous()
})

randomTag.addEventListener('click', function() {
  random()
})