// Lenis Configration
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const closeModal = document.getElementById('closeModal');
const designImages = document.querySelectorAll('.design-image');

function showModal(imageSrc) {
  modalImage.src = imageSrc;
  imageModal.classList.remove('invisible', 'opacity-0');
  imageModal.classList.add('flex');
}

function hideModal() {
  imageModal.classList.add('invisible', 'opacity-0');
  imageModal.classList.remove('flex');
}

designImages.forEach(img => {
  img.addEventListener('click', () => showModal(img.src));
});

closeModal.addEventListener('click', hideModal);


// Flower blooming animation
function animateFlowers() {
  const flowers = gsap.utils.toArray('.flower-petal');

  gsap.set(flowers, { scale: 0});

  const tl = gsap.timeline();

  flowers.forEach((flower, index) => {
    tl.to(flower, {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'elastic.out(1, 0.5)',
      delay: index * 0.1
    }, index * 0.3);
  });
}

// Call the function when the DOM is ready
document.addEventListener('DOMContentLoaded', animateFlowers);


document.querySelector('a[href="#services"]').addEventListener('click', function (e) {
  e.preventDefault();
  const servicesSection = document.getElementById('services');
  const navHeight = document.querySelector('nav').offsetHeight;
  const gap = 1;

  window.scrollTo({
    top: servicesSection.offsetTop - navHeight - gap,
    behavior: 'smooth'
  });
});


const menuIcon = document.getElementById('menuIcon');
const navbar = document.getElementById('navbar');
const line1 = document.querySelector('.line1');
const line2 = document.querySelector('.line2');
let flag = false;

menuIcon.addEventListener('click', function () {
  if (navbar.classList.contains('hidden')) {
    navbar.classList.remove('hidden');
    gsap.to(line1, {
      rotate: '45deg',
      x: 4,
      y: 6
    });
    gsap.to(line2, {
      rotate: '-45deg',
      x: 4
    });
    flag = true;
  } else {
    navbar.classList.add('hidden');
    gsap.to(line1, {
      rotate: '0deg',
      y: 0
    });
    gsap.to(line2, {
      rotate: '0deg',
    });
    flag = false;
  }
});

document.querySelectorAll('#navbar a').forEach(link => {
  link.addEventListener('click', function () {
    if (!navbar.classList.contains('hidden')) {
      navbar.classList.add('hidden');
      gsap.to(line1, {
        rotate: '0deg',
        y: 0
      });
      gsap.to(line2, {
        rotate: '0deg',
      });
      flag = false;
    }
  });
});



let clothBtn = document.querySelectorAll('.clothBtn');
let modelImg = document.querySelector('.model');

clothBtn.forEach((design) => {
  design.addEventListener('click', (e) => {
    let imgSrc = design.querySelector('img').src;
    modelImg.src = imgSrc;
  });
});

// Clothes Changes Animation

function changeCloth() {

  gsap.to("#animatedModel",
    {
      opacity: 1, y: 0, duration: 2, ease: "power2.out"
    }
  );

  let tl = gsap.timeline();

  tl.to('.clothBtn', {
    opacity: 1,
    y: -12,
    duration: 1,
    stagger: .3
  });
}
changeCloth();

// About Section Animation


const sections = [".aboutSection1", ".aboutSection2", ".aboutSection3", ".aboutSection4", ".aboutSection5", ".aboutSection6"];

sections.forEach(section => {
  gsap.from(section, {
    y: 15,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      end: "top 60%",
    }
  });
});


document.querySelectorAll('.design-container').forEach((container, index) => {
  gsap.from(container, {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: container,
      start: "top 80%",
      end: "top 60%",
      scrub: true
    },
    delay: index * 1
  });
});

document.querySelectorAll('.clothBtn').forEach((section) => {
  section.addEventListener('mouseenter', () => {
    gsap.to(section, {
      scale: 1.1,
      ease: "power2.out",
      filter: "grayscale(80%)"
    });
  });

  section.addEventListener('mouseleave', () => {
    gsap.to(section, {
      scale: 1,
      ease: "power2.out",
      filter: "grayscale(0%)"
    });
  }); 
});
