
const menuToggle = document.getElementById("menuToggle");
const toggler = document.querySelector(".toggle-ctn");
const closeToggle = document.getElementById("closeToggle");

menuToggle.addEventListener("click", () => {
 toggler.classList.add("active");
});

closeToggle.addEventListener("click", () => {
 toggler.classList.remove("active");
});

// nav active 
const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

navLinks.forEach(link => {
  link.addEventListener("click", function () {

    // sabse active hatao
    navLinks.forEach(nav => nav.classList.remove("active"));

    // clicked pe active
    this.classList.add("active");
  });
});


window.addEventListener("scroll", function () {
  let currentSection = "";

  sections.forEach(section => {
    let sectionTop = section.offsetTop;
    let sectionHeight = section.clientHeight;

    if (window.pageYOffset >= sectionTop - 150) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
});


// pop up jsy

// PROJECT DATA
const projects = [
  { title: "JavaScript Calculator Suite", img: "assets/smartcalc.png", desc: "A simple JavaScript project with BMI, Interest, and Calorie calculators", link: "https://abhismartcalcproj.netlify.app/" },
  { title: "Myntra Clone", img: "assets/3.png", desc: "E-commerce UI inspired by Myntra.", link: "https://flourishing-unicorn-e56212.netlify.app/" },
  { title: "To-Do List App", img: "assets/2.png", desc: "A clean JavaScript to-do app to add and delete daily tasks.", link: "https://abhitodoapp23wed.netlify.app/" },
  { title: "Tutorials Freak – Learning Platform UI", img: "assets/4.png", desc: "A modern educational website UI inspired by online learning platforms.", link: "https://cloneoftutorialpeak.netlify.app/" },
  { title: "API$WEB – Real-Time API Projects", img: "assets/5.png", desc: "A collection of JavaScript projects using real APIs like movie search, translator, and weather.", link: "https://stellular-baklava-de2342.netlify.app/" },
  { title: "IIP Academy – Educational Institute Website", img: "assets/6.png", desc: "A static institute website with courses, enquiry, and contact sections.", link: "https://cozy-chebakia-8b1ad5.netlify.app/" }
];

const track = document.querySelector("#projectsTrack");

// CREATE ALL CARDS ONCE
projects.forEach(p => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <img src="${p.img}">
    <div class="project-body">
      <h3>${p.title}</h3>
      <p>${p.desc}</p>
    </div>
  `;
  card.onclick = () => openPopup(p);
  track.appendChild(card);
});

// SLIDER LOGIC
let index = 0;
const visible = 3;
const gap = 18;

function slide() {
  const cardWidth = track.querySelector(".project-card").offsetWidth + gap;
  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

// next slide (smooth + infinite)
function nextSlide() {
  index++;

  if (index > projects.length - visible) {
    track.style.transition = "none";
    index = 0;
    slide();

    setTimeout(() => {
      track.style.transition = "transform 0.6s ease";
    }, 50);
  } else {
    slide();
  }
}

// prev slide
function prevSlide() {
  index--;
  if (index < 0) index = projects.length - visible;
  slide();
}

// arrows
document.querySelector(".project-arrow-right").onclick = nextSlide;
document.querySelector(".project-arrow-left").onclick = prevSlide;

// auto slide infinite
setInterval(nextSlide, 3000);

// POPUP LOGIC
const popup = document.querySelector("#projectPopup");
const popupImg = document.querySelector("#popupImg");
const popupTitle = document.querySelector("#popupTitle");
const popupDesc = document.querySelector("#popupDesc");
const popupLive = document.querySelector("#popupLive");

function openPopup(p) {
  popupImg.src = p.img;
  popupTitle.innerText = p.title;
  popupDesc.innerText = p.desc;
  popupLive.href = p.link;
  popup.style.display = "flex";
}

document.querySelector(".popup-close").onclick = () => {
  popup.style.display = "none";
};

popup.onclick = e => {
  if (e.target === popup) popup.style.display = "none";
};

// contact page js
const contactForm = document.querySelector("#contactForm");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // page reload rokne ke liye

  alert("✅ Your message has been sent!");

  contactForm.reset(); // form clear ho jayega
});

// FAQ js
let questions = document.querySelectorAll(".faq-question");

questions.forEach(function (q) {
  q.addEventListener("click", function () {
    let parent = q.parentElement;
    parent.classList.toggle("active");
  });
});


// footer time and date 
let yearEl = document.querySelector(".year");
let dateEl = document.querySelector(".date");
let timeEl = document.querySelector(".time");

function showDateTime() {
  var now = new Date();

  // year
  yearEl.innerText = now.getFullYear();

  // date
  dateEl.innerText = now.toDateString();

  // time
  timeEl.innerText = now.toLocaleTimeString();
}

// page load pe
showDateTime();

// har 1 second me update
setInterval(showDateTime, 1000);
