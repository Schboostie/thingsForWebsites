const championsLeagueTeams = {
  barcelona: {
    country: "Spain",
    coach: "Ronald Koeman",
    stadium: "Camp Nou",
    titles: 5
  },
  realMadrid: {
    country: "Spain",
    coach: "Carlo Ancelotti",
    stadium: "Santiago Bernabeu",
    titles: 13
  },
  bayernMunich: {
    country: "Germany",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI9PNDa5nHe2bavsj8L1hJSi73u1dVfWh4K5morZjYhb_RbkHm0hmubfaM_mnfy8c2C3g&amp;usqp=CAU",
    coach: "Julian Nagelsmann",
    stadium: "Allianz Arena",
    titles: 6
  },
  liverpool: {
    country: "England",
    coach: "Jurgen Klopp",
    stadium: "Anfield",
    titles: 6
  },
  juventus: {
    country: "Italy",
    image:"https://i.guim.co.uk/img/media/86120b1f3f6f7416c6cdaaae4a59b06d3fe474ce/0_77_5406_3244/master/5406.jpg?width=700&amp;quality=85&amp;auto=format&amp;fit=max&amp;s=868a56893985ac757bf838249a53629c",
    coach: "Massimiliano Allegri",
    stadium: "Allianz Stadium",
    titles: 2
  }
};

// Accessing team information
const teamGridElement = document.getElementById("teamGrid");

    // Creating the HTML content dynamically
    let htmlContent = "";
    for (const team in championsLeagueTeams) {
      const { country, coach, stadium, titles, image } = championsLeagueTeams[team];
      htmlContent += `<div class="card" id="${team}">`;
      htmlContent += `<img src="${image}" alt="${team}">`;
      htmlContent += `<div class="card-content">`;
      htmlContent += `<h3>${team.toUpperCase()}</h3>`;
      htmlContent += `<p>Country: ${country}</p>`;
      htmlContent += `<p>Coach: ${coach}</p>`;
      htmlContent += `<p>Stadium: ${stadium}</p>`;
      htmlContent += `<p>Titles: ${titles}</p>`;
      htmlContent += `</div>`;
      htmlContent += `</div>`;
    }

    // Setting the HTML content in the div element
    teamGridElement.innerHTML = htmlContent;
