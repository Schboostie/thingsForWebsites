const language = {
  السلام: 'Peace',
  ماء: 'Water',
  الحب: 'Love',
  الشمس: 'Sun',
  القمر: 'Moon',
  صديق: 'Friend',
  بيت: 'House',
  سماء: 'Sky',
  زهرة: 'Flower',
  قهوة: 'Coffee',
  عائلة: 'Family',
  مدرسة: 'School',
  كتاب: 'Book',
  سفر: 'Travel',
  جمال: 'Beauty',
  صحة: 'Health',
  طعام: 'Food',
  موسيقى: 'Music',
  فرح: 'Joy',
  عمل: 'Work',
  وقت: 'Time',
  نجمة: 'Star',
  لغة: 'Language',
  شجرة: 'Tree',
  حلم: 'Dream'
};

function createCard(word, translation) {
  const card = document.createElement('div');
  card.classList.add('card');

  const wordElement = document.createElement('div');
  wordElement.classList.add('word');
  wordElement.textContent = word;

  const translationElement = document.createElement('div');
  translationElement.classList.add('translation');
  translationElement.textContent = translation;

  const showTranslationButton = document.createElement('div');
  showTranslationButton.classList.add('qa');
  showTranslationButton.textContent = 'Show Translation';
  showTranslationButton.addEventListener('click', function() {
    translationElement.style.display = 'block';
  });

  card.appendChild(wordElement);
  card.appendChild(translationElement);
  card.appendChild(showTranslationButton);

  return card;
}

const container = document.getElementById('card-container');

for (const word in language) {
  const translation = language[word];
  const card = createCard(word, translation);
  container.appendChild(card);
}

