import Accordion from "./Accordion.js";
import AppModal from "./Modal.js";

/**
 * Renderiza el componente accordion en el nodo padre con la data que se le envíe
 *
 */

export function showAccordion(parentNode, data = []) {
  const accordion = new Accordion();

  for (let resource of data) {
    const headerContent = `
    <span class="accordion-header-text">  ${resource.name}</span>
    <div class="accordion-items-container">
     ${resource.isForChilds ? ' <img src="./images/childs.png" >' : ""} 
     ${resource.isEducative ? ' <i class="bi bi-mortarboard" ></i>' : ""} 
     ${resource.isForPlaying ? ' <i class="bi bi-joystick" ></i>' : ""} 
     ${resource.isForWeb ? ' <i class="bi bi-cloud-check" ></i>' : ""} 
     ${resource.isForAudio ? ' <i class="bi bi-music-note-list" ></i>' : ""} 
     ${resource.isForVideo ? ' <i class="bi bi-camera-reels" ></i>' : ""} 
     ${resource.isForDesign ? ' <i class="bi bi-images" ></i>' : ""} 
     ${resource.isForTextEdition ? ' <i class="bi bi-file-text" ></i>' : ""} 
     ${resource.isForProjects ? ' <i class="bi bi-list-check" ></i>' : ""} 
     ${resource.isForProgram ? ' <i class="bi bi-motherboard" ></i>' : ""} 
     ${resource.isForOtherThings ? ' <i class="bi bi-wrench-adjustable" ></i>' : ""} 
    </div accordion-header-item>
    `;
    const bodyContent = `
    <p>${resource.description || "Ez da informaziorik aurkitu..."} </p>
    <a class="btn btn-success" href="${resource.url}" target="_blank">Ikusi</a>
     `;
    accordion.addItem(headerContent, bodyContent);
  }
  parentNode.append(accordion.getEl());
}

export function showFilters(parentEl, data, activeFilter) {
  // console.log(activeFilter);
  parentEl.innerHTML = "";
  const ul = document.createElement("ul");
  ul.className = "list-group";
  for (let el in data) {
    const label = data[el];
    const listItem = document.createElement("li");

    const filterBtn = document.createElement("button");
    filterBtn.dataset.filterLabel = el;
    filterBtn.innerHTML += label.bsEl || `<span>${label.name}</span>`;
    filterBtn.append(label.description || "");
    listItem.innerHTML = label.bsEl + `<span data-filter-label="${el}">&nbsp&nbsp&nbsp${label.description}</span>`;
    listItem.dataset.filterLabel = el;
    listItem.className = el === activeFilter ? "list-group-item list-group-item-success" : "list-group-item";
    ul.appendChild(listItem);
    parentEl.append(ul);
  }
}

export function createDOMEl(type, className = "") {
  const el = document.createElement(type);
  el.className = className;
  return el;
}
