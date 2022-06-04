window.addEventListener('scroll', showButtonTop)

const buttonTop = document.getElementById('button-top')

function showButtonTop() {
  if (scrollY > 650) {
    buttonTop.classList.add('show')
  } else {
    buttonTop.classList.remove('show')
  }
}
