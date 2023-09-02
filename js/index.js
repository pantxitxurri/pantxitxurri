import { LABELS_MAP } from "../data.js";
import DataHandler from "./DataHandler.js";
import { handleFilters, showAccordion } from "./helpers.js";
import AppModal from "./Modal.js";

const container = document.querySelector(".container");
const filterBtn = document.getElementById("filterBtn");
const modal = window.bootstrap.Modal.getOrCreateInstance("#appModal");
//Creamos el modal que es único para toda la aplicación (Singleton)

filterBtn.addEventListener("click", () => {
  modal.show();
  handleFilters(document.querySelector(".modal-body"), LABELS_MAP);
});

const navbar = document.querySelector(".collapse.navbar-collapse");
const labelsMap = DataHandler.labels;
for (let label in labelsMap) {
  const name = labelsMap[label].name || "";
  const filterEl = document.createElement("div");
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
  `;
  const check = filterEl.querySelector("input");
  check.addEventListener("click", ({ target: { id, checked } }) => {
    if (checked) {
      DataHandler.addFilter(id);
    } else {
      DataHandler.removeFilter(id);
    }
    document.querySelector(".accordion")?.remove();
    showAccordion(container, DataHandler.data);
  });
  navbar.append(filterEl);
}

showAccordion(container, DataHandler.data);

//console.dir(modal)
