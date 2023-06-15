const top5WorldCupWinners = [
  {
    country: "Brazil",
    titles: 5,
    years: [1958, 1962, 1970, 1994, 2002],
    imageURL: "https://example.com/brazil.jpg"
  },
  {
    country: "Germany",
    titles: 4,
    years: [1954, 1974, 1990, 2014],
    imageURL: "https://example.com/germany.jpg"
  },
  {
    country: "Italy",
    titles: 4,
    years: [1934, 1938, 1982, 2006],
    imageURL: "https://example.com/italy.jpg"
  },
  {
    country: "Argentina",
    titles: 2,
    years: [1978, 1986],
    imageURL: "https://example.com/argentina.jpg"
  },
  {
    country: "Uruguay",
    titles: 2,
    years: [1930, 1950],
    imageURL: "https://example.com/uruguay.jpg"
  }
];
//functions

function createCards() {
  const container = document.getElementById("card-container");

  top5WorldCupWinners.forEach(country => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = country.imageURL;
    image.alt = country.country;
    card.appendChild(image);

    const title = document.createElement("h2");
    title.textContent = country.country;
    card.appendChild(title);

    const subtitle = document.createElement("p");
    subtitle.textContent = `Titles: ${country.titles}`;
    card.appendChild(subtitle);

    const years = document.createElement("p");
    years.textContent = `Years: ${country.years.join(", ")}`;
    card.appendChild(years);

    container.appendChild(card);
  });
}

createCards();
