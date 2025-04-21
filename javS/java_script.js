
/*---=====MENU HAMBURGER=====---*/
     function toggleMenu() {
        const mobileNav = document.getElementById("mobile-nav");
        mobileNav.classList.toggle("active");
    }

    

/*---=====codice del header=====---*/
const phrases = [
  "Web Developer",
  "Front-End",
  "Design pulito",
  "Codice pulito."
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



  /*---=====bara delle percentuali=====---*/
  
  // Funzione per avviare l'animazione delle barre di progresso
  function startAnimation() {
    const progressBars = document.querySelectorAll(".skill-progress");
    const percentages = document.querySelectorAll(".percentage");

    progressBars.forEach((bar, index) => {
      const value = parseInt(bar.getAttribute("data-progress"));
      const percentLabel = percentages[index];
      let current = 0;

      // Anima la barra
      setTimeout(() => {
        bar.style.width = value + "%";
      }, 100);

      // Anima il conteggio della percentuale
      const updateCount = () => {
        if (current < value) {
          current++;
          percentLabel.textContent = current + "%";
          requestAnimationFrame(updateCount);
        } else {
          percentLabel.textContent = value + "%";
        }
      };

      requestAnimationFrame(updateCount);
    });
  }

  // Intersection Observer per scoprire quando la sezione diventa visibile
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Avvia l'animazione delle barre quando la sezione diventa visibile
        startAnimation();
        observer.disconnect(); // Disconnette l'osservatore dopo l'animazione
      }
    });
  }, { threshold: 0.5 });

  // Osserva la sezione delle competenze
  const skillsSection = document.getElementById("skillsSection");
  observer.observe(skillsSection);

  /*---=====AOS=====---*/
  AOS.init();