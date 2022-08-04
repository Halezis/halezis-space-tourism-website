const navBtn = document.querySelector('.hamburger')
const menu = document.querySelector('.menu')

navBtn.addEventListener('click', () => {
  menu.classList.toggle('open')
  changeNav()
})

function changeNav() {
  if (menu.classList.contains('open')) {
    navBtn.innerHTML = `
    <img src="/assets/shared/icon-close.svg" alt="close" class="hamburger-open">
    `
  } else {
    navBtn.innerHTML = `
    <img src="/assets/shared/icon-hamburger.svg" alt="hamburger" class="hamburger-open">
    `
  }
}
