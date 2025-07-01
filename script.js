const majorArcana = [
    "fool", "magician", "highpriestess", "empress", "emperor",
    "hierophant", "lovers", "chariot", "strength", "hermit",
    "wheelofortune", "justice", "hangedman", "death", "temperance",
    "devil", "tower", "star", "moon", "sun", "judgement", "world"
  ];
  
  const cardContainer = document.getElementById("card-container");
  const drawBtn = document.getElementById("draw-btn");
  
  function getRandomCards(num = 3) {
    const selected = new Set();
    while (selected.size < num) {
      const randIndex = Math.floor(Math.random() * majorArcana.length);
      selected.add(majorArcana[randIndex]);
    }
    return Array.from(selected);
  }
  
  function drawCards() {
    cardContainer.innerHTML = ''; // Clear previous cards
  
    const cards = getRandomCards(3);
    cards.forEach((cardName, index) => {
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('tarot-card');
      // Use relative path and lowercase file names
      cardDiv.style.backgroundImage = `url('images/${cardName.toLowerCase()}.jpg')`;
      cardContainer.appendChild(cardDiv);
  
      // Staggered animation delay
      setTimeout(() => {
        cardDiv.classList.add('show');
      }, 200 * index);
    });
  }
  
  drawBtn.addEventListener('click', drawCards);
  