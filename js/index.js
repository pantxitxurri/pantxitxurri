import { LABELS_MAP } from "../data.js";
import DataHandler from "./DataHandler.js";
import { showAccordion, showFilters } from "./helpers.js";
import AppModal from "./Modal.js";

const container = document.querySelector(".container");
const filterBtn = document.getElementById("filterBtn");
const modal = window.bootstrap.Modal.getOrCreateInstance("#appModal");
let activeFilter;
const clearFiltersBtn = document.getElementById("clearFilters");

const clearFilters = () => {
  console.log("clear");
  DataHandler.clearFilters();
  activeFilter = null;
  document.querySelector(".accordion")?.remove();
  showAccordion(container, DataHandler.data);
  modal.hide();
};

const handleFilter = filterLabel => {
  document.querySelector(".accordion")?.remove();
  DataHandler.filter = filterLabel;
  // console.log(DataHandler.data);
  modal.hide();
  clearFiltersBtn.removeEventListener("click", clearFilters);
  document.querySelector(".accordion")?.remove();
  showAccordion(container, DataHandler.data);
};

filterBtn.addEventListener("click", () => {
  // console.log(clearFiltersBtn);
  clearFiltersBtn.addEventListener("click", clearFilters);
  modal.show();
  const modalBody = document.querySelector(".modal-body").addEventListener("click", ({ target }) => {
    // console.log(target.dataset);
    if (target?.dataset.filterLabel) {
      activeFilter = target?.dataset.filterLabel;
      handleFilter(activeFilter);
    }
  });

  showFilters(document.querySelector(".modal-body"), LABELS_MAP, activeFilter);
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
