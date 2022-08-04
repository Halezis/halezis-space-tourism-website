const namee = document.querySelector('.name')
const description = document.querySelector('.description')
const techImg = document.querySelector('.tech-container-right')
const techOne = document.querySelector('.tech-one')
const techTwo = document.querySelector('.tech-two')
const techThree = document.querySelector('.tech-three')
const techBtn = document.querySelectorAll('.tech-btn')

function removeActive() {
  techBtn.forEach((btn) => {
    btn.classList.remove('tech-active')
  })
}

techOne.addEventListener('click', () => {
  removeActive()
  techOne.classList.add('tech-active')
  namee.innerHTML = 'Launch vehicle'
  description.innerHTML =
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad"
  techImg.innerHTML = `
    <img src="/assets/technology/image-launch-vehicle-portrait.jpg" alt="tech image" class="tech-img">
    <img src="/assets/technology/image-launch-vehicle-landscape.jpg" alt="tech image" class="tech-img-mobile">
    `
})

techTwo.addEventListener('click', () => {
  removeActive()
  techTwo.classList.add('tech-active')
  namee.innerHTML = 'Spaceport'
  description.innerHTML =
    'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.'
  techImg.innerHTML = `
      <img src="/assets/technology/image-spaceport-portrait.jpg" alt="tech image" class="tech-img">
      <img src="/assets/technology/image-spaceport-landscape.jpg" alt="tech image" class="tech-img-mobile">
      `
})

techThree.addEventListener('click', () => {
  removeActive()
  techThree.classList.add('tech-active')
  namee.innerHTML = 'Space capsule'
  description.innerHTML =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
  techImg.innerHTML = `
      <img src="/assets/technology/image-space-capsule-portrait.jpg" alt="tech image" class="tech-img">
      <img src="/assets/technology/image-space-capsule-landscape.jpg" alt="tech image" class="tech-img-mobile">
      `
})
