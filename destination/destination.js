const moonBtn = document.querySelector('.moon')
const marsBtn = document.querySelector('.mars')
const europaBtn = document.querySelector('.europa')
const titanBtn = document.querySelector('.titan')
const namee = document.querySelector('.name')
const description = document.querySelector('.description')
const distance = document.querySelector('.distance')
const travel = document.querySelector('.travel')
const destinationImg = document.querySelector('.dest-container-left')
const destBtn = document.querySelectorAll('.dest-btn')

function removeActive() {
  destBtn.forEach((btn) => {
    btn.classList.remove('dest-active')
  })
}

moonBtn.addEventListener('click', () => {
  removeActive()
  moonBtn.classList.add('dest-active')
  namee.innerHTML = 'Moon'
  description.innerHTML =
    'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.'
  distance.innerHTML = '384,400 km'
  travel.innerHTML = '3 days'
  destinationImg.innerHTML =
    '<img src="/assets/destination/image-moon.png" alt="destination image" class="destination-img">'
})

marsBtn.addEventListener('click', () => {
  removeActive()
  marsBtn.classList.add('dest-active')
  namee.innerHTML = 'Mars'
  description.innerHTML =
    'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!'
  distance.innerHTML = '225 mil. km'
  travel.innerHTML = '9 months'
  destinationImg.innerHTML =
    '<img src="/assets/destination/image-mars.png" alt="destination image" class="destination-img">'
})

europaBtn.addEventListener('click', () => {
  removeActive()
  europaBtn.classList.add('dest-active')
  namee.innerHTML = 'Europa'
  description.innerHTML =
    'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.'
  distance.innerHTML = '628 mil. km'
  travel.innerHTML = '3 years'
  destinationImg.innerHTML =
    '<img src="/assets/destination/image-europa.png" alt="destination image" class="destination-img">'
})

titanBtn.addEventListener('click', () => {
  removeActive()
  titanBtn.classList.add('dest-active')
  namee.innerHTML = 'Titan'
  description.innerHTML =
    'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'
  distance.innerHTML = '1.6 bil. km'
  travel.innerHTML = '7 years'
  destinationImg.innerHTML =
    '<img src="/assets/destination/image-titan.png" alt="destination image" class="destination-img">'
})
