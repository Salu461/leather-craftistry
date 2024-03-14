const stagger = document.querySelectorAll(".stagger");
const modal = document.querySelector(".modal");
const toRight = document.querySelectorAll(".to-right");
const article = document.querySelector(".wrap");

gsap.from(stagger, {
  x: 100,
  delay: 0.5,
  duration: 0.5,
  stagger: 0.05,
  opacity: 0,
});

gsap.to(stagger, {
  x: -100,
  delay: 2,
  stagger: 0.05,
  opacity: 0,
  duration: 0.5,
});

setTimeout(() => {
  gsap.to(modal, {
    opacity: 0,
    duration: 0.5,
  });

  gsap.from(toRight, {
    y: 100,
    opacity: 0,
    duration: 0.5,
    stagger: 0.05,
  });
}, 3000);

gsap.to(modal, {
  display: "none",
  delay: 3.5,
});

function secCall(entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    gsap.to(article, {
      opacity: 1,
      duration: 0.5,
    });
  }
}

const sec1Obs = new IntersectionObserver(secCall, {
  root: null,
  threshold: 0,
  rootMargin: "-200px",
});

sec1Obs.observe(article);
