export const LABELS_MAP = {
  EDUC: {
    name: "Hezkuntza",
    bsEl: '<i class="bi bi-mortarboard" ></i>',
  },
  PROJ: {
    name: "Proiektuak",
    bsEl: '<i class="bi bi-list-check" ></i>',
  },
  DESI: {
    name: "Diseinua",
    bsEl: '<i class="bi bi-images" ></i>',
  },
  AUDI: {
    name: "Audio",
    bsEl: '<i class="bi bi-music-note-list" ></i>',
  },
  VIDE: {
    name: "Bideo",
    bsEl: '<i class="bi bi-camera-reels" ></i>',
  },
  PROG: {
    name: "Programazioa",
    bsEl: '<i class="bi bi-motherboard"></i>',
  },
  PLAY: {
    name: "Jolasak",
    bsEl: '<i class="bi bi-joystick" ></i>',
  },
  TEXT: {
    name: "Testua",
    bsEl: '<i class="bi bi-file-text" ></i>',
  },
  CHIL: {
    name: "Umeak",
    bsEl: '<img src="./images/childs.png" >',
  },
  WEB: {
    name: "Internet",
    bsEl: '<i class="bi bi-cloud-check" ></i>',
  },
  OTHE: {
    name: "Bestelakoak",
    bsEl: '<i class="bi bi-wrench-adjustable" ></i>',
  },
};
const data = [
  {
    name: "Brave",
    description: "Interneterako nabigatzailea",
    url: "https://brave.com/",
    labels: ["WEB"],
    openSource: true,
  },
  {
    name: "Firefox",
    description: "Interneterako nabigatzailea",
    url: "https://www.mozilla.org/eu/",
    labels: ["WEB"],
    openSource: true,
  },
  {
    name: "KeePass",
    description: "Pasahitzak kudeatzeko aplikazio deskargagarria",
    url: "https://keepass.info/",
    labels: ["OTHE"],
    openSource: true,
  },
  {
    name: "eXeLearning",
    description: "Irakaskuntzarako edukiak sortzeko aplikazioa",
    url: "https://exelearning.net/",
    labels: ["EDUC"],
    openSource: true,
  },
  {
    name: "Thunderbird",
    description: "Emailak, kontaktuak eta egutegia kudeatzeko aplikazio deskargarria",
    url: "https://www.thunderbird.net/es-ES/",
    labels: ["WEB"],
    openSource: true,
  },
  {
    name: "Camstudio",
    description: "Windowsen pantailako bideo eta audio jarduerak grabatzeko",
    url: "https://camstudio.org/",
    labels: ["AUDI", "VIDE"],
    openSource: true,
  },
  {
    name: "Timeline",
    description: "Ekitaldiak sortu eta hauen denbora-lerroak bistaratzeko eta nabigatzeko aplikazioa",
    url: "https://getsharex.com/",
    labels: ["PROJ"],
    openSource: true,
  },
  {
    name: "ShareX",
    description: "Windowsen pantaila-argazkiak egiteko",
    url: "https://getsharex.com/",
    labels: ["DESI"],
    openSource: true,
  },
  {
    name: "PDFCreator",
    description: "PDF artxiboekin lan egiteko aplikazioa",
    url: "https://www.pdfforge.org/pdfcreator/",
    labels: ["OTHE"],
    openSource: true,
  },
  {
    name: "ToDoList",
    description: "Ataza-kudeatzailea",
    url: "https://www.abstractspoon.com/",
    labels: ["PROJ"],
    openSource: true,
  },
  {
    name: "Clamwin",
    description: "Antibirus deskargagarria",
    url: "http://es.clamwin.com/",
    labels: ["OTHE"],
    openSource: true,
  },
  {
    name: "OpenOffice",
    description: "Ofimatika aplikazio multzoa (testu editorea, kalkulu horriak, datu-basea...) ",
    url: "https://www.openoffice.org/",
    labels: ["TEXT", "OTHE"],
    openSource: true,
  },
  {
    name: "VLC player",
    description: "Multimedia fitxategi gehienak erreproduzitzeko gai den aplikazioa",
    url: "http://www.videolan.org/vlc/",
    labels: ["VIDE", "AUDI"],
    openSource: true,
  },
  {
    name: "GCompris",
    description: "Programa honek 2 eta 11 urte bitarteko haurrentzako 100 jarduera didaktiko baino gehiago biltzen ditu arlo ezberdinetan banatuta",
    url: "https://www.gcompris.net/index-eu.html",
    basque: true,
    labels: ["EDUC", "PLAY", "CHIL"],
    openSource: true,
  },
  {
    name: "Shepard",
    description: "Plataforma honek, ingeleraz bada ere, umeentzako hainbat jolas interaktibo eskaintzen ditu ikaskuntza-arlo ezberdinetakoak",
    url: "https://www.sheppardsoftware.com/",
    labels: ["EDUC", "PLAY", "CHIL"],
    openSource: true,
  },
  {
    name: "Tux Paint",
    description: "Adin guztietako umeentzako editore grafikoa",
    url: "https://tuxpaint.org/",
    labels: ["DESI", "CHIL"],
    openSource: true,
  },
  {
    name: "Scratch",
    description: "Istorioak, jolasak eta animazioak sortu eta elkarbanatu programazioa ikasten duten bitartean",
    url: "https://scratch.mit.edu/",
    labels: ["PROG", "CHIL"],
    openSource: true,
  },
  {
    name: "Gimp",
    description: "Irudien edizioa eta lanketa",
    url: "https://www.gimp.org/",
    labels: ["DESI"],
    openSource: true,
  },
  {
    name: "InkScape",
    description: "Grafiko bektorialen editorea",
    url: "https://inkscape.org/es/",
    labels: ["DESI"],
    openSource: true,
  },
  {
    name: "Blender",
    description: "3D grafikoen editorea",
    url: "https://www.blender.org/",
    labels: ["DESI"],
    openSource: true,
  },
  {
    name: "Audacity",
    description: "Audio editorea",
    url: "https://www.audacityteam.org/",
    labels: ["AUDI"],
    openSource: true,
  },

  {
    name: "Etherpad",
    description: "Elkar-lankidetza baimentzen duen online testu editorea.",
    url: "https://etherpad.org/",
    labels: ["TEXT"],
    openSource: true,
  },

  {
    name: "Bigbluebutton",
    description: "Irakasle zein ikaslei zuzendutako ikasgela birtuala.",
    url: "https://bigbluebutton.org/",
    labels: ["EDUC"],
    openSource: true,
  },
];

export default data;
