let body = document.querySelector('body');
console.log(body);

// Nav bar - mobile: Middle btn shrink when scroll

body.onscroll = event => {
  console.log(window.scrollY);
  const navBtn = document.querySelector('.menu-container');
  const navBar = document.querySelector('nav'); 
  if(window.scrollY > 20){
    navBtn.classList.add("small-menu");
    navBar.classList.add("small-nav");

    navBar.classList.add('nav-bg');
  }else{
    navBtn.classList.remove("small-menu");
    navBar.classList.remove("small-nav");

    navBar.classList.remove('nav-bg');
  }
}

// Menu functionality

const menuBtn = document.querySelector('#menu-btn');
menuBtn.addEventListener('click', event => {
  document.querySelector('.menu-slide').style.left = "-5vw";
  activateMenu();
});

const menuCloseBtn = document.querySelector('.close-menu-btn');
menuCloseBtn.addEventListener('click', event => {
  document.querySelector('.menu-slide').style.left = "-105vw";
  deactivateMenu();
});

function activateMenu(){
  console.info("Activating Menu");
  
  const menuLinks = document.querySelectorAll(".menu-slide__content-container ul li");

  menuLinks.forEach(element => {
    element.addEventListener('click', event => {
      document.querySelector('.menu-slide').style.left = "-105vw";
      console.info("Action accomplished");
      deactivateMenu();
    });
  });

  console.info("Menu Activated");
}

function deactivateMenu(){
  console.info("Deactivating Menu");

  const menuLinks = document.querySelectorAll(".menu-slide__content-container ul li");

  menuLinks.forEach(element => {
    element.removeEventListener('click', event => {
      document.querySelector('.menu-slide').style.left = "-105vw";
      console.info("Action accomplished");
    });
  });

  console.log("Menu Deactivated")
}
