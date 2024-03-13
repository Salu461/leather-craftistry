const stagger = document.querySelectorAll(".stagger");
const modal = document.querySelector(".modal");
const toRight = document.querySelectorAll(".to-right");

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
