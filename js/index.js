
import "./Accordion.js"
import Accordion from "./Accordion.js";
import DataHandler from "./DataHandler.js";


function showAccordion (data){
  document.querySelector(".accordion")?.remove()
  const accordion = new Accordion();
  
  
  for(let resource of DataHandler.data){
    const headerContent = `
    <span class="accordion-header-text">  ${resource.name}</span>
    <div class="accordion-items-container">
     ${resource.isForChilds() ? ' <img src="./images/childs.png" >':""} 
     ${resource.isEducative() ? ' <i class="bi bi-mortarboard" ></i>':""} 
     ${resource.isForAudio() ? ' <i class="bi bi-music-note-list" ></i>':""} 
     ${resource.isForVideo() ? ' <i class="bi bi-camera-reels" ></i>':""} 
     ${resource.isForDesign() ? ' <i class="bi bi-images" ></i>':""} 
     ${resource.isForTextEdition() ? ' <i class="bi bi-file-text" ></i>':""} 
     ${resource.isForProjects() ? ' <i class="bi bi-list-check" ></i>':""} 
     ${resource.isForPlaying() ? ' <i class="bi bi-joystick" ></i>':""} 
     ${resource.isForProductivity() ? ' <i class="bi bi-wrench-adjustable" ></i>':""} 
    </div accordion-header-item>
    `
    const bodyContent = `
    <p>${resource.description||"Ez da informaziorik aurkitu..."} </p>
    <a class="btn btn-success" href="${resource.url}" target="_blank">Ikusi</a>
     `;
    accordion.addItem(headerContent, bodyContent )

  }
  document.querySelector(".container").append(accordion.getEl())
}


const navbar = document.querySelector(".collapse.navbar-collapse");
const labelsMap = DataHandler.labels;
for(let label in labelsMap ){
  const filterEl = document.createElement('div');
  filterEl.className = "form-check form-switch";
  filterEl.innerHTML = `
  <input
    class="form-check-input"
    type="checkbox"
    role="switch"
    id=${label}
  />
  <label class="form-check-label" for=${label}
    >${labelsMap[label]}</label
  >
  `
  const check = filterEl.querySelector("input");
  check.addEventListener("click", (({target:{id,checked}})=>{
    if(checked) {
      DataHandler.addFilter(id);
    }else{
      DataHandler.removeFilter(id);
    }
    showAccordion();
  }))
  navbar.append(filterEl)
}


showAccordion();
