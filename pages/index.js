import express from 'express'
const app = express()
const port = 3000


app.use(express.static("public"))

const onderwerpen = [
  {title: "Militaire wapens", description: "De onderstaande knop brengt u naar onze nieuwste assortiment van vuurwapens.", img: "../images/Glock-17 gen-4.png" },
  {title: "Engelse snacks", description: "Hier vindt u de meeste bekende snacks die engeland heeft te bieden!", img: "../images/walkers.png" },
  {title: "Video Games", description: "Click hier voor een paar populaire video spellen!", img: "../images/yakuze0.jpg" },
]

const onderwerp1 = [
  {title: "Glock-17 Gen-4 pistool", description: "Click hier als u meer informatie wilt weten van dit betrouwbare pistool.", img: "../images/Glock-17 gen-4.png" },
  {title: "Colt C7/C8-geweer", description: "Click hier als u meer informatie wilt weten van dit efficiënte geweer.", img: "../images/C8-geweer.png" },
  {title: "Mossberg-shotgun", description: "Click hier als u meer informatie wilt weten over deze krachtige shotgun.", img: "../images/Mossberg-shotgun.png" },
]

const onderwerp1_sub1 = [
  {title: "about Yakuza 0" }
]

const onderwerp1_subImg1 = [
  {img: "../images/kiryu-closeup-kiryu-zoom.gif", prijs: "Prijs: €20", merk: "Merk: Ryu Ga Gotoku Studio" }
]

const onderwerp1_sub2 = [
  {title: "about Yakuza 0", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit in molestias nobis distinctio, ex ullam provident. Esse dicta aspernatur facilis accusamus delectus deleniti, quae ut odit ipsa nesciunt omnis natus libero. Inventore cum voluptates iste odit et! Placeat, unde.", title2:"Mechanics", description2: "Je hebt 4 verschillende styles die je kunt gebruiken in een gevecht, daarmee kun je ook heat actions gebruiken om hoge damage te dealen tegen je vijanden en je moet ook heat vullen om deze acties te doen", img: "../images/kiryu-closeup-kiryu-zoom.gif", prijs: "Prijs: €20", merk: "Merk: Ryu Ga Gotoku Studio" },
  {title: "Breath of the wild", description: "Een open wereld avontuur waar je het kwaad moet verslaan.", img: "../images/breath of the wild.png" },
  {title: "Escape the backrooms", description: "Een spel gebaseerd op een urban legend waar je entiteiten moet ontsnappen.", img: "../images/escape the backrooms.png" },
]

const onderwerp1_sub3 = [
  {title: "about Yakuza 0", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit in molestias nobis distinctio, ex ullam provident. Esse dicta aspernatur facilis accusamus delectus deleniti, quae ut odit ipsa nesciunt omnis natus libero. Inventore cum voluptates iste odit et! Placeat, unde.", title2:"Mechanics", description2: "Je hebt 4 verschillende styles die je kunt gebruiken in een gevecht, daarmee kun je ook heat actions gebruiken om hoge damage te dealen tegen je vijanden en je moet ook heat vullen om deze acties te doen", img: "../images/kiryu-closeup-kiryu-zoom.gif", prijs: "Prijs: €20", merk: "Merk: Ryu Ga Gotoku Studio" },
  {title: "Breath of the wild", description: "Een open wereld avontuur waar je het kwaad moet verslaan.", img: "../images/breath of the wild.png" },
  {title: "Escape the backrooms", description: "Een spel gebaseerd op een urban legend waar je entiteiten moet ontsnappen.", img: "../images/escape the backrooms.png" },
]

const onderwerp2 = [
  {title: "Walkers", description: "Koop nu de bekende walker crisps.", img: "../images/walkers.png" },
  {title: "Custard cream", description: "Click hier voor meer informatie over de britse custard cream's.", img: "../images/custard cream.png" },
  {title: "Chocolate digestives", description: "Probeer nu de populaire digestives die vaak met thee worden gegeten.", img: "../images/chocolate digestives.png" },
]

const onderwerp3 = [
  {title: "Yakuza 0", description: "Hier zie je een van serieuze spellen dat gaat over Japanse maffia.", img: "../images/yakuze0.jpg" },
  {title: "Breath of the wild", description: "Een open wereld avontuur waar je het kwaad moet verslaan.", img: "../images/breath of the wild.png" },
  {title: "Escape the backrooms", description: "Een spel gebaseerd op een urban legend waar je entiteiten moet ontsnappen.", img: "../images/escape the backrooms.png" },
]

const onderwerp3_sub1 = [
  {title: "about Yakuza 0", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugit in molestias nobis distinctio, ex ullam provident. Esse dicta aspernatur facilis accusamus delectus deleniti, quae ut odit ipsa nesciunt omnis natus libero. Inventore cum voluptates iste odit et! Placeat, unde.", title2:"Mechanics", description2: "Je hebt 4 verschillende styles die je kunt gebruiken in een gevecht, daarmee kun je ook heat actions gebruiken om hoge damage te dealen tegen je vijanden en je moet ook heat vullen om deze acties te doen", img: "../images/kiryu-closeup-kiryu-zoom.gif", prijs: "Prijs: €20", merk: "Merk: Ryu Ga Gotoku Studio" },
  {title: "Breath of the wild", description: "Een open wereld avontuur waar je het kwaad moet verslaan.", img: "../images/breath of the wild.png" },
  {title: "Escape the backrooms", description: "Een spel gebaseerd op een urban legend waar je entiteiten moet ontsnappen.", img: "../images/escape the backrooms.png" },
]

app.get('/api/onderwerpen', (req, res) => {
  res.json(onderwerpen);
})

//Onderwerp 1

app.get('/api/onderwerp1', (req, res) => {
  res.json(onderwerp1);
})

app.get('/api/onderwerp1_sub1', (req, res) => {
  res.json(onderwerp1_sub1);
})

app.get('/api/onderwerp1_subImg1', (req, res) => {
  res.json(onderwerp1_subImg1);
})

app.get('/api/onderwerp1_sub2', (req, res) => {
  res.json(onderwerp1_sub2);
})

app.get('/api/onderwerp1_sub3', (req, res) => {
  res.json(onderwerp1_sub3);
})

//Onderwerp 2

app.get('/api/onderwerp2', (req, res) => {
  res.json(onderwerp2);
})

//Onderwerp 3

app.get('/api/onderwerp3', (req, res) => {
  res.json(onderwerp3);
})

app.get('/api/onderwerp3_sub1', (req, res) => {
  res.json(onderwerp3_sub1);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});