let slider = document.querySelector(".slider-contenedor");
let sliderIndividual = document.querySelectorAll(".contenido-slider");
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 5000;
let resetIntervalo;

window.addEventListener("resize", function() {
  width = sliderIndividual[0].clientWidth;
  resetSlider();
});

setInterval(function() {
  slides();
}, intervalo);

function slides() {
  slider.style.transform = "translateX(" + (-width * contador) + "px)";
  slider.style.transition = "transform 0.4s";
  contador++;

  if (contador === sliderIndividual.length) {
    resetIntervalo = setTimeout(resetSlider, 1500);
  }
}

function resetSlider() {
  slider.style.transform = "translateX(0)";
  slider.style.transition = "transform 0s";
  contador = 1;
  clearTimeout(resetIntervalo);
}