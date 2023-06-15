const navbarElement = document.querySelector('.navbar');

const buttonContainerElement = document.querySelector('.button-container');

window.addEventListener('scroll', () => {
  if (window.scrollY > buttonContainerElement.offsetTop - navbarElement.offsetHeight - 50) {
    navbarElement.classList.add('active');
  } else {
    navbarElement.classList.remove('active');
  }
})