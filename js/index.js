
import DataHandler from "./DataHandler.js";
import { handleFilters, showAccordion } from "./helpers.js";
import * as boostrap from "../node_modules/bootstrap/dist/js/bootstrap.esm.js";
import AppModal from "./Modal.js";

const container = document.querySelector(".container");
const filterBtn = document.getElementById('filterBtn');
//Creamos el modal que es único para toda la aplicación (Singleton)

new AppModal(container);

filterBtn.addEventListener('click', handleFilters)

const navbar = document.querySelector(".collapse.navbar-collapse");
const labelsMap = DataHandler.labels;
for(let label in labelsMap ){
  const name = labelsMap[label].name || "";
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
    >${name}</label
  >
  `
  const check = filterEl.querySelector("input");
  check.addEventListener("click", (({target:{id,checked}})=>{
    if(checked) {
      DataHandler.addFilter(id);
    }else{
      DataHandler.removeFilter(id);
    }
    document.querySelector(".accordion")?.remove()
    showAccordion(container, DataHandler.data);
  }))
  navbar.append(filterEl)
}

showAccordion(container, DataHandler.data);
const modal = document.querySelector(".modal");

//console.dir(modal)