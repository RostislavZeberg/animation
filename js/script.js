let openBtn = document.querySelector(".burger");
let closeBtn = document.querySelector(".close");

gsap.from(".hero__title", { opacity: 0, delay: 0.2, duration: 1, y: 70 });
gsap.from(".hero__btn", { opacity: 0, delay: 0.2, duration: 1, y: 70 });
gsap.from(".hero__descr", { opacity: 0, delay: 0.5, duration: 1 });

gsap.from(".img1", { delay: 1, duration: 0.5, opacity: 0, scale: 0.5 });
gsap.from(".img2", { delay: 1.5, duration: 1, opacity: 0 });
gsap.from(".img3", { delay: 1.5, duration: 1, opacity: 0 });

let menuTimeline = gsap.timeline({ paused: true });
menuTimeline
  .fromTo(
    ".menu",
    { display: "none", opacity: 0 },
    { display: "block", opacity: 1 }
  )
  .from(".menu__top", { duration: 0.3, y: -150 })
  .from(".menu__nav", { opacity: 0, duration: 0.5, y: 100 })
  .from(".social, .menu__right", { opacity: 0, duration: 0.5, y: 100 });
openBtn.addEventListener("click", () => menuTimeline.play());
closeBtn.addEventListener("click", () => menuTimeline.reverse());
