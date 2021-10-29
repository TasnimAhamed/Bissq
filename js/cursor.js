// Stats
// const stats = new Stats(); stats.showPanel(0); document.body.appendChild(stats.dom);

const cursor = document.querySelector('.cursor');
const cursorInner = document.querySelector('.cursor-move-inner');
const cursorOuter = document.querySelector('.cursor-move-outer');

const anchors = document.querySelectorAll('a');
const buttons = document.querySelectorAll('button');

anchors.forEach((anchor)=>{

    anchor.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor--hover');
    });
      
    anchor.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor--hover');
    });

})
buttons.forEach((button)=>{

    button.addEventListener('mouseenter', () => {
        cursor.classList.add('cursor--hover');
    });
      
    button.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor--hover');
    });

})

let mouseX = 0;
let mouseY = 0;
let mouseA = 0;

let innerX = 0;
let innerY = 0;

let outerX = 0;
let outerY = 0;

let loop = null;

document.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  if (!loop) {
    loop = window.requestAnimationFrame(render);
  }
});



function render() {
  // stats.begin();

  loop = null;

  innerX = lerp(innerX, mouseX, 0.15);
  innerY = lerp(innerY, mouseY, 0.15);

  outerX = lerp(outerX, mouseX, 0.13);
  outerY = lerp(outerY, mouseY, 0.13);

  const angle = Math.atan2(mouseY - outerY, mouseX - outerX) * 180 / Math.PI;

  const normalX = Math.min(Math.floor(Math.abs(mouseX - outerX) / outerX * 1000) / 1000, 1);
  const normalY = Math.min(Math.floor(Math.abs(mouseY - outerY) / outerY * 1000) / 1000, 1);
  const normal = normalX + normalY * .5;
  const skwish = normal * .7;

  cursorInner.style.transform = `translate3d(${innerX}px, ${innerY}px, 0)`;
  cursorOuter.style.transform = `translate3d(${outerX}px, ${outerY}px, 0) rotate(${angle}deg) scale(${1 + skwish}, ${1 - skwish})`;

  // stats.end();

  // Stop loop if interpolation is done.
  if (normal !== 0) {
    loop = window.requestAnimationFrame(render);
  }
}

function lerp(s, e, t) {
  return (1 - t) * s + t * e;
}