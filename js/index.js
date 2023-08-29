
import data from "../data.js";
import "./Accordion.js"
import Accordion from "./Accordion.js";
import { ResourceHandler } from "./Resource.js";

const accordion = new Accordion();

for(let el of data){
  const resource = new ResourceHandler(el)
  const headerContent = `
  ${resource.name}
  ${resource.isForChilds() ? ' <img src="./images/childs.png" style="width:50px">':""} 
  ${resource.isEducative() ? ' <i class="bi bi-mortarboard" style="font-size: 2rem"></i>':""} 
  ${resource.isForAudio() ? ' <i class="bi bi-music-note-list" style="font-size: 2rem"></i>':""} 
  ${resource.isForVideo() ? ' <i class="bi bi-music-note-list" style="font-size: 2rem"></i>':""} 
  ${resource.isForDesign() ? ' <i class="bi bi-images" style="font-size: 2rem"></i>':""} 
  `
  const bodyContent = `
  <p>${el.description||"Ez da informaziorik aurkitu..."} </p>
  <a class="btn btn-success" href="${el.url}" target="_blank">Ikusi</a>
   `;
  accordion.addItem(headerContent, bodyContent )
}

document.body.append(accordion.getEl())