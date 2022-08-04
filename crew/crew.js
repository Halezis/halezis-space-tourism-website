const role = document.querySelector('.role')
const namee = document.querySelector('.name')
const bio = document.querySelector('.bio')
const crewImg = document.querySelector('.crew-container-right')
const crewOne = document.querySelector('.crew-one')
const crewTwo = document.querySelector('.crew-two')
const crewThree = document.querySelector('.crew-three')
const crewFour = document.querySelector('.crew-four')
const crewBtn = document.querySelectorAll('.crew-btn')

function removeActive() {
  crewBtn.forEach((btn) => {
    btn.classList.remove('crew-active')
  })
}

crewOne.addEventListener('click', () => {
  removeActive()
  crewOne.classList.add('crew-active')
  role.innerHTML = 'Commander'
  namee.innerHTML = 'Douglas Hurley'
  bio.innerHTML =
    'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.'
  crewImg.innerHTML = `
    <img src="/assets/crew/image-douglas-hurley.png" alt="crew image" class="crew-img">
    <div class="crew-line"></div>
    `
})

crewTwo.addEventListener('click', () => {
  removeActive()
  crewTwo.classList.add('crew-active')
  role.innerHTML = 'Pilot'
  namee.innerHTML = 'Victor Glover'
  bio.innerHTML =
    'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.'
  crewImg.innerHTML = `
    <img src="/assets/crew/image-victor-glover.png" alt="crew image" class="crew-img">
    <div class="crew-line"></div>
    `
})

crewThree.addEventListener('click', () => {
  removeActive()
  crewThree.classList.add('crew-active')
  role.innerHTML = 'Mission Specialist'
  namee.innerHTML = 'Mark Shuttleworth'
  bio.innerHTML =
    'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.'
  crewImg.innerHTML = `
    <img src="/assets/crew/image-mark-shuttleworth.png" alt="crew image" class="crew-img">
    <div class="crew-line"></div>
    `
})

crewFour.addEventListener('click', () => {
  removeActive()
  crewFour.classList.add('crew-active')
  role.innerHTML = 'Flight Engineer'
  namee.innerHTML = 'Anousheh Ansari'
  bio.innerHTML =
    'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.'
  crewImg.innerHTML = `
    <img src="/assets/crew/image-anousheh-ansari.png" alt="crew image" class="crew-img">
    <div class="crew-line"></div>
    `
})
