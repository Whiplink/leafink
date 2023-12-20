const btn = document.querySelector('.mobile_menu_button')
const menu = document.querySelector('.mobile_menu')
const aTags = document.querySelectorAll('.mobile_menu > div > a')

btn.addEventListener('click', () => {
  menu.classList.toggle('active')
})

menu.addEventListener('click', e => {
  if (e.target != menu) return
  menu.classList.toggle('active')
})

aTags.forEach(a => {
  a.addEventListener('click', () => {
    menu.classList.toggle('active')
  })
})