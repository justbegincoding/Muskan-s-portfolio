/*------show nav------*/
const navMenu = document.getElementById("nav-menu"),
navToggle = document.getElementById("nav-toggle"),
navClose = document.getElementById("nav-close")
const SideNav = document.querySelector('.aside');
if(navToggle){
    navToggle.addEventListener('click', () => {
        SideNav.classList.add("show-menu");
        navToggle.style.display = 'block';
        navClose.style.display = 'none';
    })
}
/*===== MENU HIDDEN =====*/
/* validate if constant exists  */
if(navClose)
{
  navClose.addEventListener('click', () => {
    SideNav.classList.remove("show-menu");
    navToggle.style.display = 'none';
    navClose.style.display = 'block';
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll(".nav-link")

function linkAction()
{
  const navMenu = document.getElementById("nav-menu")
  // when we click on each nav link, we remove the show menu class
  navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

// get all sections that have an id defined
const sections = document.querySelectorAll("section[id]");

// add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter()
{
  // get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58,
    sectionId = current.getAttribute("id");
    /* - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector */
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
    {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add("active-link")
    }
    else
    {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove("active-link")
    }
  })
}
/*===== FONTS =====*/
const fontSizes = document.querySelectorAll('.choose-size span');
//remove active class from spans or font size selectors
const removeSizeSelector = () => {
  fontSizes.forEach(size => {
    size.classList.remove("active");
  })
}
fontSizes.forEach(size => {
  size.addEventListener('click', () => {

    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');
    if(size.classList.contains('font-size-1'))
    {
      fontSize = '12px';
    }
    else if(size.classList.contains('font-size-2'))
    {
      fontSize = '14px';
    }
    else if(size.classList.contains('font-size-3'))
    {
      fontSize = '16px';
    }
    else if(size.classList.contains('font-size-4'))
    {
      fontSize = '18px';
    }
    // change font size of the root html element 
    document.querySelector('html').style.fontSize = fontSize;

  })
})



