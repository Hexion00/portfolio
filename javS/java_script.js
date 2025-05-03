
/*---=====MENU HAMBURGER=====---*/
function toggleMenu() {
  const mobileNav = document.getElementById("mobile-nav");
  mobileNav.classList.toggle("active");
}


    

/*---=====codice del header=====---*/
const phrases = [
  "Web Developer",
  "Front-End",
  "UI Minimalista",
  "Codice leggibile"
];

let j = 0;
let currentPhrase = 0;
const magicText = document.getElementById('magic-text');

function type() {
  if (j < phrases[currentPhrase].length) {
    magicText.textContent += phrases[currentPhrase][j];
    j++;
    setTimeout(type, 90);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (j > 0) {
    magicText.textContent = phrases[currentPhrase].substring(0, j - 1);
    j--;
    setTimeout(erase, 40);
  } else {
    currentPhrase = (currentPhrase + 1) % phrases.length;
    setTimeout(type, 400);
  }
}

type();



/*---=====skills=====---*/
const showSkillsBtn = document.querySelector('.show-skills-btn');
const closeSkillsBtn = document.querySelector('.close-skills-btn');
const skillsSection = document.querySelector('#skills');
const skills = document.querySelectorAll('.skill');

function openSkillsSection() {
  skillsSection.style.visibility = "visible";
  skillsSection.style.height = "auto";
  skillsSection.style.opacity = "1";
  skillsSection.style.overflow = "visible";

  const btnRect = showSkillsBtn.getBoundingClientRect();

  skills.forEach((skill, index) => {
    const skillRect = skill.getBoundingClientRect();

    gsap.fromTo(skill,
      {
        x: btnRect.left - skillRect.left,
        y: btnRect.top - skillRect.top,
        scale: 0.3,
        opacity: 0
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: 0.2 + index * 0.08,
        ease: "power3.out"
      }
    );
  });

  showSkillsBtn.style.display = "none";
  closeSkillsBtn.style.display = "inline-block";
}

function closeSkillsSection() {
  skills.forEach((skill, index) => {
    gsap.to(skill, {
      scale: 0.5,
      opacity: 0,
      duration: 0.4,
      delay: index * 0.05,
      ease: "power2.in"
    });
  });

  gsap.to(skillsSection, {
    height: 0,
    opacity: 0,
    duration: 0.6,
    delay: 0.4,
    ease: "power2.inOut",
    onComplete: () => {
      skillsSection.style.visibility = "hidden";
      skillsSection.style.overflow = "hidden";
      showSkillsBtn.style.display = "inline-block";
      closeSkillsBtn.style.display = "none";
    }
  });
}

showSkillsBtn.addEventListener('click', openSkillsSection);
closeSkillsBtn.addEventListener('click', closeSkillsSection);


 

  /*---=====AOS=====---*/
  AOS.init();