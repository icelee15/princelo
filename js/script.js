gsap.registerPlugin(ScrollTrigger);

let horizontalSections = gsap.utils.toArray(".container");

horizontalSections.forEach((container) => {
 let sections = container.querySelectorAll(".panel");

gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: container,
    pin: true,
    scrub: 1,
    // base vertical scrolling on how wide the container is so it feels more natural.
    end: "+=3500",
  }
});
})

window.addEventListener('scroll', function() {
  var header = document.getElementById('main-header');
  var section2 = document.getElementById('hide-header');
  var section3 = document.getElementById('about');
  var section2Position = section2.getBoundingClientRect().top;
  var section3Position = section3.getBoundingClientRect().top;

  // When section2 goes above the viewport (i.e., out of view), hide the header
  if (section2Position <= 0 && section3Position > 0) {
      header.style.top = '-100px'; // Move header out of view
  } else if (section3Position <= 0) {
      header.style.top = '0'; // Show header
  } else {
    header.style.top = '0';
  }
});



document.addEventListener("DOMContentLoaded", function(){
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', mobileMenu);
  navLinks.querySelectorAll("a").forEach(n => n.addEventListener("click", closeMenu));

  function mobileMenu(){
    hamburger.classList.toggle("active");
    navLinks.classList.toggle("active");
  }

  function closeMenu(){
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  }
});

