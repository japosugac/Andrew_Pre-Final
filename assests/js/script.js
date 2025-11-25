const reveals = document.querySelectorAll('.reveal');

function handleReveal() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 90;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("visible");
    }
  }
}

window.addEventListener("scroll", handleReveal);
window.addEventListener("load", handleReveal);

function setActiveNavLink() {

  let pathname = window.location.pathname;
  let page = pathname.substring(pathname.lastIndexOf('/') + 1);

  if (!page) page = 'index.html';

  const navLinks = document.querySelectorAll('.navbar .nav-link');

  navLinks.forEach(link => {

    const href = link.getAttribute('href');

    const linkPage = (href && href !== '') ? href.split('/').pop() : 'index.html';

    if (linkPage === page) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveNavLink);
