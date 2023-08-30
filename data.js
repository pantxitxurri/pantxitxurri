export const LABELS_MAP = {
  EDUC: "Hezkuntza",
  PROJ: "Proiektuak",
  DESI: "Diseinua",
  AUDI: "Audio",
  VIDE: "Bideo",
  PROG: "Programazioa",
  PLAY: "Jolasak",
  PROD: "Tresnak",
  TEXT: "Testua",
  CHIL: "Umeak"

}
const data = [
  {
    name: "Camstudio",
    description: "Windowsen pantailako bideo eta audio jarduerak grabatzeko",
    url:"https://camstudio.org/",
    labels: ["AUDI","VIDE",],
    openSource: true,
  
  },
  {
    name: "Timeline",
    description: "Ekitaldiak sortu eta hauen denbora-lerroak bistaratzeko eta nabigatzeko aplikazioa",
    url:"https://getsharex.com/",
    labels: ["PROJ"],
    openSource: true,
  
  },
  {
    name: "ShareX",
    description: "Windowsen pantaila-argazkiak egiteko",
    url:"https://getsharex.com/",
    labels: ["DESI",],
    openSource: true,
  
  },
  {
    name: "PDFCreator",
    description: "PDF artxiboekin lan egiteko aplikazioa",
    url:"https://www.pdfforge.org/pdfcreator/",
    labels: ["PROD",],
    openSource: true,
  
  },
  {
    name: "ToDoList",
    description: "Ataza-kudeatzailea",
    url:"https://www.abstractspoon.com/",
    labels: ["PROJ"],
    openSource: true,
  
  },
  {
    name: "Clamwin",
    description: "Antibirus deskargagarria",
    url:"http://es.clamwin.com/",
    labels: ["PROD",],
    openSource: true,
  
  },
  {
    name: "OpenOffice",
    description: "Ofimatika aplikazio multzoa (testu editorea, kalkulu horriak, datu-basea...) ",
    url:"https://www.openoffice.org/",
    labels: ["TEXT","PROD",],
    openSource: true,
  
  },
  {
    name: "VLC player",
    description: "Multimedia fitxategi gehienak erreproduzitzeko gai den aplikazioa",
    url:"http://www.videolan.org/vlc/",
    labels: ["VIDE", "AUDI"],
    openSource: true,
  
  },
  {
    name: "GCompris",
    description: "Programa honek 2 eta 11 urte bitarteko haurrentzako 100 jarduera didaktiko baino gehiago biltzen ditu arlo ezberdinetan banatuta",
    url:"https://www.gcompris.net/index-eu.html",
    basque: true,
    labels: ["EDUC", "PLAY", "CHIL"],
    openSource: true,
  
  },
  {
    name: "Shepard",
    description: "Plataforma honek, ingeleraz bada ere, umeentzako hainbat jolas interaktibo eskaintzen ditu ikaskuntza-arlo ezberdinetakoak",
    url:"https://www.sheppardsoftware.com/",
    labels: ["EDUC", "PLAY","CHIL"],
    openSource: true,

  },
  {
    name: "Tux Paint",
    description: "Adin guztietako umeentzako editore grafikoa",
    url:"https://tuxpaint.org/",
    labels: ["DESI", "CHIL"],
    openSource: true,

  },
  {
    name: "Scratch",
    description: "Istorioak, jolasak eta animazioak sortu eta elkarbanatu programazioa ikasten duten bitartean",
    url:"https://scratch.mit.edu/",
    labels: ["PROG","CHIL"],
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
  
  {
    name: "Etherpad",
    description: "Elkar-lankidetza baimentzen duen online testu editorea.",
    url:"https://etherpad.org/",
    labels: ["TEXT"],
    openSource: true,

  },
  
  {
    name: "Bigbluebutton",
    description: "Irakasle zein ikaslei zuzendutako ikasgela birtuala.",
    url:"https://bigbluebutton.org/",
    labels: ["PROD", "EDUC"],
    openSource: true,

  },

  
]

export default data;