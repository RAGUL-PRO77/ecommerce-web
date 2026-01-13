const menu = document.getElementById('menu')
const nav = document.getElementById('navbar')
const cancel = document.getElementById('cancel')



if (menu) {
  menu.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (cancel) {
  cancel.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}

