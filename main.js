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
var btn=document.getElementById("btn")
btn.addEventListener('click', () => {
  window.location.href="product.html";
});
var btn=document.getElementById("btn1")
btn.addEventListener('click', () => {
  window.location.href="product.html";
});