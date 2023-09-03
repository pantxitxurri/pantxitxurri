import { LABELS_MAP } from "../data.js";
import DataHandler from "./DataHandler.js";
import { showAccordion, showFilters } from "./helpers.js";
import AppModal from "./Modal.js";

const container = document.querySelector(".container");
const filterBtn = document.getElementById("filterBtn");
const modal = window.bootstrap.Modal.getOrCreateInstance("#appModal");
let activeFilter;
const clearFilterBtn = document.getElementById("clearFilter");

const clearFilters = () => {
  // console.log("clear");
  DataHandler.filter = null;
  activeFilter = null;
  document.querySelector(".accordion")?.remove();
  showAccordion(container, DataHandler.data);
  clearFilterBtn.classList.add("visually-hidden");
};

clearFilterBtn.addEventListener("click", clearFilters);

const handleModalBody = ({ target }) => {
  // console.log(target.dataset);
  if (target?.dataset.filterLabel) {
    activeFilter = target?.dataset.filterLabel;
    handleFilter(activeFilter);
  }
};

const handleFilter = filterLabel => {
  document.querySelector(".accordion")?.remove();
  DataHandler.filter = filterLabel;
  console.log(DataHandler.filter);
  document.querySelector(".modal-body").removeEventListener("click", handleModalBody);
  modal.hide();
  clearFilterBtn.innerHTML = `<i class='bi bi-x-circle-fill'></i>${DataHandler.filterBsEl}`;
  clearFilterBtn.classList.remove("visually-hidden");
  document.querySelector(".accordion")?.remove();
  showAccordion(container, DataHandler.data);
};

filterBtn.addEventListener("click", () => {
  modal.show();
  document.querySelector(".modal-body").addEventListener("click", handleModalBody);
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
