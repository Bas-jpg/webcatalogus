fetch("/api/onderwerpen")
  .then((mainOnderwerp) => mainOnderwerp.json())
  .then((mainOnderwerpText) => mainOnderwerpFetch(mainOnderwerpText));

//Onderwerp 1 server fetch

fetch("/api/onderwerp1")
  .then((myData1) => myData1.json())
  .then((textData1) => showCards1(textData1));

fetch("/api/onderwerp1_Sub1")
  .then((myData1_Sub1) => myData1_Sub1.json())
  .then((textData1_Sub1) => showCards1_Sub1(textData1_Sub1));

fetch("/api/onderwerp1_SubImg1")
  .then((myData1_SubImg1) => myData1_SubImg1.json())
  .then((textData1_SubImg1) => showCards1_Sub1(textData1_SubImg1));

fetch("/onderwerp1_Sub2")
  .then((myData1_Sub2) => myData1_Sub2.json())
  .then((textData1_Sub2) => showCards1_Sub2(textData1_Sub2));

fetch("/onderwerp1_Sub3")
  .then((myData1_Sub3) => myData1_Sub3.json())
  .then((textData1_Sub3) => showCards1_Sub3(textData1_Sub3));

//Onderwerp 2 server fetch

fetch("/api/onderwerp2")
  .then((myData2) => myData2.json())
  .then((textData2) => showCards2(textData2));

//Onderwerp 3 server fetch

fetch("/api/onderwerp3")
  .then((myData) => myData.json())
  .then((textData) => showCards3(textData));

//Main onderwerpen fetch functie

function mainOnderwerpFetch(mainOnderwerp) {
  const cards = mainOnderwerp;
  cardsContainer = document.querySelector(".fetch");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
      <div class="ond${i} ond">
          <img class = "ond-IMG" src="${card.img}" alt=""></img>
      <h2>${card.title}</h2>
        <p>
         ${card.description}
          <a href="Onderwerp${i}.html"><button class="ondBtn">
            button
          </button></a>
        </p>
      </div>
      `;
  }
}

//onderwerp 1 fetch functie's

function showCards1(data) {
  const cards = data;
  cardsContainer = document.querySelector(".fetchOnd1");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
      <div class="ond${i} ond">
          <img class = "ond-IMG" src="${card.img}" alt=""></img>
      <h2>${card.title}</h2>
        <p>
         ${card.description}
          <a href="onderwerp0_Sub${i}.html"><button class="ondBtn">
            button
          </button></a>
        </p>
      </div>
      `;
  }
}
//NOT WORKING
//function showCards1_Sub1(data1) {
//  const cards = data1;
//  cardsContainer = document.querySelector(".fetchOnd1_Sub1");
//  cardsContainerIMG = document.querySelector(".fetchOnd1_SubImg1");
//  for (let i = 0; i < cards.length; i++) {
//    const card = cards[i];
//    cardsContainer.innerHTML += `
//      <h1 class="titletxt">${card.title}</h1>
//
//      <ul class="specifications">
//        <h2>Specificaties</h2>
//        <li>producent: Glock GmbH</li>
//        <li>lengte: 20,3 centimeter</li>
//        <li>gewicht: 870 gram</li>
//        <li>munitie: 9mm Parabellum (9 x 19mm)</li>
//        <li>magazijn: 17 patronen</li>
//        <li>effectieve dracht: 40 meter maximaal</li>
//        <li>in gebruik bij: alle krijgsmachtdelen van nederland</li>
//      </ul>
//
//      <br>
//
//      <div class="safety">
//        <h2>Veiligheid</h2>
//        <p>
//          Het wapen heeft 3 veiligheden die ervoor zorgen dat een geladen
//          wapen automatisch op veilig staat. Dit voorkomt dat een wapen afgaat
//          bij stoten of vallen. Het wapen vuurt pas als de militair de
//          trekkerveiligheid indrukt en de trekker helemaal overhaalt.
//        </p>
//      </div>
//
//      <div class="name">
//        <h2>Naam</h2>
//        <p>
//          De Glock 17 Gen4 dankt zijn naam aan het feit dat het het 17e patent
//          was van de Oostenrijkse fabrikant Glock GmbH. Het wapen is
//          grotendeels van kunststof, behalve loop, slede en kamer. Het bestaat
//          uit 33 onderdelen, wat in vergelijking weinig is.
//        </p>
//      </div>
//
//      <div class="irregularies">
//        <h2>Afwijkend</h2>
//        <p>
//          Het wapen onderscheidt zich van andere pistolen door de vierkante
//          slede en het ontbreken van een hamer. De loop wijkt ook af van
//          gebruikelijk. Bij de meeste pistolen heeft de loop groeven die de
//          kogel een draaiing geven. Die groeven, ook wel ‘trekken en velden’
//          genoemd. De loop van de Glock 17 Gen4 is 6-hoekig (hexagonaal) en
//          heeft minder gaslekken. Hierdoor ligt de mondingssnelheid hoger dan
//          bij conventionele 'trekken en velden'. Dit zorgt voor meer
//          trefenergie zonder dat er meer kruit nodig is.
//        </p>
//      </div>
//
//      <a href="Onderwerp0.html"><button class="btn">Ga terug</button></a>
//    </div>
//  </div>
//         `;
//    cardsContainerIMG.innerHTML += `
//     <div class="display_container">
//     <img
//       class="display"
//       src="${card.img}"
//       alt="Glock-17"
//     />
//     <div class="display2">
//       Prijs: ${card.prijs} <br />
//       Merk: ${card.merk}
//     </div>
//   </div>
//         `;
//  }
//}

function showCards1_Sub2(data1) {
  const cards = data1;
  cardsContainer = document.querySelector(".fetchOnd1_Sub2");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
          <div class="ond${i} ond">
              <img class = "ond-IMG" src="${card.img}" alt=""></img>
          <h2>${card.title}</h2>
            <p>
             ${card.description}
              <a href="onderwerp0_Sub${i}.html"><button class="ondBtn">
                button
              </button></a>
            </p>
          </div>
          `;
  }
}

function showCards1_Sub3(data1) {
  const cards = data1;
  cardsContainer = document.querySelector(".fetchOnd1_Sub3");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
          <div class="ond${i} ond">
              <img class = "ond-IMG" src="${card.img}" alt=""></img>
          <h2>${card.title}</h2>
            <p>
             ${card.description}
              <a href="onderwerp0_Sub${i}.html"><button class="ondBtn">
                button
              </button></a>
            </p>
          </div>
          `;
  }
}

//onderwerp 2 fetch functie's

function showCards2(data) {
  const cards = data;
  cardsContainer = document.querySelector(".fetchOnd2");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
      <div class="ond${i} ond">
          <img class = "ond-IMG" src="${card.img}" alt=""></img>
      <h2>${card.title}</h2>
        <p>
         ${card.description}
          <a href="onderwerp1_Sub${i}.html"><button class="ondBtn">
            button
          </button></a>
        </p>
      </div>
      `;
  }
}

//onderwerp 3 fetch functie's

function showCards3(data) {
  const cards = data;
  cardsContainer = document.querySelector(".fetchOnd3");
  for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    cardsContainer.innerHTML += `
       <div class="ond${i} ond">
           <img class = "ond-IMG" src="${card.img}" alt=""></img>
       <h2>${card.title}</h2>
         <p>
          ${card.description}
           <a href="onderwerp2_Sub${i}.html"><button class="ondBtn">
             button
           </button></a>
         </p>
       </div>
       `;
  }
}
