// Array of original words
const originalWords =[
  "ethereal",
  "serendipity",
  "eloquent",
  "effervescent",
  "mellifluous",
  "quintessential",
  "resplendent",
  "sagacious",
  "ubiquitous",
  "euphoria",
  "veracity",
  "ineffable",
  "vivacious",
  "opulent",
  "melancholy",
  "scintillating",
  "enigmatic",
  "pristine",
  "serene",
  "majestic",
  "harmonious",
  "luminous",
  "grandiose",
  "benevolent",
  "ethereal",
  "idyllic",
  "surreptitious",
  "capricious",
  "efflorescence",
  "impeccable",
  "clandestine",
  "pulchritudinous",
  "resilient",
  "serenity",
  "rhapsody",
  "tranquil",
  "exquisite",
  "effulgent",
  "phantasmagorical",
  "panacea",
  "incandescent",
  "labyrinthine",
  "ebullient",
  "quixotic",
  "ineffable",
  "opalescent",
  "enthralling",
  "solemn",
  "mirth",
  "resonance",
  "elysian",
  "lustrous",
  "vivacity",
  "bucolic",
  "solitude",
  "serenade",
  "sagacity",
  "epiphany",
  "illustrious",
  "melodious",
  "spectacular",
  "effervescence",
  "blissful",
  "vibrant",
  "sumptuous",
  "enchanting",
  "harmony",
  "empyrean",
  "enlightenment",
  "verdant",
  "serenity",
  "idyllic",
  "symphony",
  "exuberant",
  "benevolence",
  "enigmatic",
  "transcendent",
  "epicurean",
  "sublime",
  "euphoric",
  "whimsical",
  "resplendence",
  "elegance",
  "efflorescent",
  "ebullience",
  "seraphic",
  "scintillation",
  "vibrancy",
  "immaculate",
  "resilience",
  "ethereal",
  "incandescence",
  "serenade",
  "majesty",
  "luminosity",
  "labyrinth",
  "solemnity",
  "clandestinity",
  "pulchritude",
  "opulence",
  // Add more words here...
];
// Array to store user-entered words
const userWords = [];
// Score
let score = 0;
// Time limit (in seconds)
const timeLimit = 60;
let timerId;
let currentWordIndex = 0;

// Function to display the current word
function displayCurrentWord() {
  const wordListDiv = document.getElementById("word-list");
  wordListDiv.innerText = originalWords[currentWordIndex];
}

// Function to handle word submission
function submitWord() {
  const inputElement = document.getElementById("user-input");
  const inputValue = inputElement.value.trim().toLowerCase();

  // Clear the input field
  inputElement.value = "";

  // Check if the entered word matches the current word
  if (inputValue === originalWords[currentWordIndex]) {
    score += 10;
    inputElement.style.backgroundColor = "green";
    setTimeout(() => {
      inputElement.style.backgroundColor = "";
    }, 100); // Reset back to original color after 100 milliseconds

    currentWordIndex++;
    if (currentWordIndex < originalWords.length) {
      displayCurrentWord();
    } else {
      clearInterval(timerId);
      inputElement.disabled = true;
      inputElement.style.backgroundColor = "#ffffff";
      inputElement.placeholder = "Game Over";
      inputElement.blur();
      const scoreElement = document.getElementById("score");
      scoreElement.innerText = `Final Score: ${score}`;
    }
  } else {
    inputElement.style.backgroundColor = "red";
    setTimeout(() => {
      inputElement.style.backgroundColor = "";
    }, 100); // Reset back to original color after 100 milliseconds
  }

  const scoreElement = document.getElementById("score");
  scoreElement.innerText = `Score: ${score}`;
}

// Function to start the game
function startGame() {
  const startButton = document.querySelector(".start-button");
  startButton.disabled = true;
  startButton.style.backgroundColor = "#808080";

  const inputElement = document.getElementById("user-input");
  inputElement.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      submitWord();
    }
  });
  inputElement.disabled = false;
  inputElement.focus();

  const timerElement = document.getElementById("timer");
  timerElement.innerText = `Time: ${timeLimit}`;

  const startTime = Date.now();
  timerId = setInterval(function() {
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const remainingTime = timeLimit - elapsedTime;

    if (remainingTime >= 0) {
      timerElement.innerText = `Time: ${remainingTime}`;
    } else {
      clearInterval(timerId);
      inputElement.disabled = true;
      startButton.disabled = false;
      startButton.style.backgroundColor = "#008CBA";
      inputElement.style.backgroundColor = "#ffffff";
      inputElement.value = "";
      inputElement.placeholder = "Game Over";
      inputElement.blur();

      const scoreElement = document.getElementById("score");
      scoreElement.innerText = `Final Score: ${score}`;
    }
  }, 1000);

  displayCurrentWord();
}

// Initialize the game
const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", startGame);
