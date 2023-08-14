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
  }else{
    navBtn.classList.remove("small-menu");
    navBar.classList.remove("small-nav");
  }
}