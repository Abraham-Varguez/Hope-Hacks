const cards = document.querySelectorAll(".ab-cards__single");

function flipCard() {
  this.classList.toggle("flip");
}
cards.forEach((card) => card.addEventListener("click", flipCard));
