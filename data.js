const LABELS = {
  EDUC: "Hezkuntza",
  PROI: "Proiektuak",
  DESI: "Diseinua",
  AUDI: "Audio",
  VIDE: "Bideo",
  PROG: "Programazioa",
  PLAY: "Jolasak",

}

const data = [
  {
    name: "GCompris",
    description: "Programa honek 2 eta 11 urte bitarteko haurrentzako 100 jarduera didaktiko baino gehiago biltzen ditu arlo ezberdinetan banatuta.",
    url:"https://www.gcompris.net/index-eu.html",
    basque: true,
    childs: true,
    labels: ["EDUC", "PLAY"],
    openSource: true,

  },
  {
    name: "Shepard",
    description: "Plataforma honek, ingeleraz bada ere, umeentzako hainbat jolas interaktibo eskaintzen ditu ikaskuntza-arlo ezberdinetakoak.",
    url:"https://www.sheppardsoftware.com/",
    childs: true,
    labels: ["EDUC", "PLAY"],
    openSource: true,

  },
  {
    name: "Tux Paint",
    description: "Adin guztietako umeentzako editore grafikoa",
    url:"https://tuxpaint.org/",
    childs: true,
    labels: ["DESI"],
    openSource: true,

  },
  {
    name: "Scratch",
    description: "Istorioak, jolasak eta animazioak sortu eta elkarbanatu programazioa ikasten duten bitartean.",
    url:"https://scratch.mit.edu/",
    childs: true,
    labels: ["PROG"],
    openSource: true,

  },
  {
    name: "Gimp",
    description: "Irudien edizioa eta lanketa",
    url:"https://www.gimp.org/",
    labels: ["DESI"],
    openSource: true,

  },
  {
    name: "InkScape",
    description: "Grafiko bektorialen editorea",
    url:"https://inkscape.org/es/",
    labels: ["DESI"],
    openSource: true,

  },
  {
    name: "Blender",
    description: "3D grafikoen editorea",
    url:"https://www.blender.org/",
    labels: ["DESI"],
    openSource: true,

  },
  {
    name: "Audacity",
    description: "Audio editorea",
    url:"https://www.audacityteam.org/",
    labels: ["AUDI"],
    openSource: true,

  },
  
]

export default data;