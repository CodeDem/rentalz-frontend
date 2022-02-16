function aboutToggle() {
    var element = document.getElementById("about-paragraph");
    element.classList.toggle("opacity-and-translate");
    var showIcon = document.getElementById("show-about");
    var hideIcon = document.getElementById("hide-about");

    var mintContainer = document.getElementById("mint")

    if (element.classList.contains('opacity-and-translate')) {
        hideIcon.classList.remove('hidden')
        showIcon.classList.add('hidden')
        
    } else {
        hideIcon.classList.add('hidden')
        showIcon.classList.remove('hidden')
    }
    element.removeAttribute("data-animation")
    mintContainer.classList.toggle("-mt-80")
}
function mintToggle() {
    var element = document.getElementById("mint-paragraph");
    element.classList.toggle("opacity-and-translate");
    var showIcon = document.getElementById("show-mint");
    var hideIcon = document.getElementById("hide-mint");

    var roadmapContainer = document.getElementById("roadmap")
    if (element.classList.contains('opacity-and-translate')) {
        hideIcon.classList.remove('hidden')
        showIcon.classList.add('hidden')
    } else {
        hideIcon.classList.add('hidden')
        showIcon.classList.remove('hidden')
    }
    element.removeAttribute("data-animation")
    roadmapContainer.classList.toggle("-mt-72")
}

function handleRoadmapElement(id) {

  const roadmap = document.getElementById('roadmap-cards')
  roadmap.classList.toggle('opacity-0')
  const showElement = document.getElementById(`phase-${id}`)
  showElement.classList.toggle('scale-100')
}

var Animation = function({ offset } = { offset: 10 }) {
    var _elements;

    // Define a dobra superior, inferior e laterais da tela
    var windowTop = offset * window.innerHeight / 100;
    var windowBottom = window.innerHeight - windowTop;
    var windowLeft = 0;
    var windowRight = window.innerWidth;
            
    function start(element) {
      // Seta os atributos customizados
      element.style.animationDelay = element.dataset.animationDelay;
      element.style.animationDuration = element.dataset.animationDuration;
      // Inicia a animacao setando a classe da animacao
      element.classList.add(element.dataset.animation);
      // Seta o elemento como animado
      element.dataset.animated = "true";
    }

function isElementOnScreen(element) {
// Obtem o boundingbox do elemento
var elementRect = element.getBoundingClientRect();
var elementTop =
  elementRect.top + parseInt(element.dataset.animationOffset) ||
  elementRect.top;
var elementBottom =
  elementRect.bottom - parseInt(element.dataset.animationOffset) ||
  elementRect.bottom;
var elementLeft = elementRect.left;
var elementRight = elementRect.right;

// Verifica se o elemento esta na tela
return (
  elementTop <= windowBottom &&
  elementBottom >= windowTop &&
  elementLeft <= windowRight &&
  elementRight >= windowLeft
);
}

// Percorre o array de elementos, verifica se o elemento está na tela e inicia animação
function checkElementsOnScreen(els = _elements) {
for (var i = 0, len = els.length; i < len; i++) {
  // Passa para o proximo laço se o elemento ja estiver animado
  if (els[i].dataset.animated) continue;

  isElementOnScreen(els[i]) && start(els[i]);
}
}

// Atualiza a lista de elementos a serem animados
function update() {
_elements = document.querySelectorAll(
  "[data-animation]:not([data-animated])"
);
checkElementsOnScreen(_elements);
}

// Inicia os eventos
window.addEventListener("load", update, false);
window.addEventListener("scroll", () => checkElementsOnScreen(_elements), { passive: true });
window.addEventListener("resize", () => checkElementsOnScreen(_elements), false);

// Retorna funcoes publicas
return {
start,
isElementOnScreen,
update
};
};

// Initialize
var options = {
offset: 20 //percentage of window
};
var animation = new Animation(options);

function toggleModal() {
  document.getElementById('modal').classList.toggle('hidden')
}

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('#menu');
const header = document.querySelector("#header")

menuButton.addEventListener('click', () => {
  if(menu.classList.contains('hidden')){
    header.style.backgroundColor = "rgba(110, 28, 88, 0.9)";
    header.style.height = '100vh'
  } else{
    header.style.backgroundColor = "transparent";
    header.style.height = 'auto'
  }
  menu.classList.toggle('hidden');
  
});

function handleMenuItemClick() {
  menuButton.click()
}