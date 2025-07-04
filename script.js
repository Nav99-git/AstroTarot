const majorArcana = [
  "fool", "magician", "highpriestess", "empress", "emperor",
  "hierophant", "lovers", "chariot", "strength", "hermit",
  "wheeloffortune", "justice", "hangedman", "death", "temperance",
  "devil", "tower", "star", "moon", "sun", "judgement", "world"
];

const drawBtn = document.getElementById("draw-btn");
const cardContainer = document.getElementById("card-container");

drawBtn.addEventListener("click", () => {
  cardContainer.innerHTML = ""; // Clear previous cards

  const pickedIndices = new Set();
  while (pickedIndices.size < 3) {
    pickedIndices.add(Math.floor(Math.random() * majorArcana.length));
  }

  pickedIndices.forEach((index, i) => {
    const cardName = majorArcana[index];
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("tarot-card");

    // Delay show for nice pop-out animation
    setTimeout(() => {
      cardDiv.classList.add("show");
    }, i * 300);

    cardDiv.style.backgroundImage = `url('images/${cardName}.jpg')`;
    cardDiv.title = cardName.replace(/_/g, ' ').toUpperCase();

    cardContainer.appendChild(cardDiv);
  });
});

