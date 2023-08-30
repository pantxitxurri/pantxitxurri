

class AcordionHeader {
  #hEl;
  constructor() {
    this.#hEl = document.createElement("h2");
    this.#hEl.className = "accordion-header";
    const button = document.createElement("button");
    button.className = "accordion-button  collapsed";
    button.type = "button";
    button.dataset.bsToggle = "collapse";
    this.#hEl.appendChild(button);
  }
  getEl() {
    return this.#hEl;
  }
}

class AccordionCollapse {
  #divEl;
  constructor(parentId) {
    this.#divEl = document.createElement("div");

    this.#divEl.className = "accordion-collapse collapse";
    const bodyEl = document.createElement("div");
    bodyEl.className = "accordion-body";
    this.#divEl.appendChild(bodyEl);
  }
  getEl() {
    return this.#divEl;
  }
}

class AccordionItem {
  #header;
  #collapse;
  #divEl;
  #button;

  constructor() {
    const collapseId = crypto.randomUUID();
    this.#header = new AcordionHeader();
    this.#collapse = new AccordionCollapse();
    this.#divEl = document.createElement("div");
    this.#divEl.className = "accordion-item";
    this.#divEl.append(this.#header.getEl(), this.#collapse.getEl());
    this.#button = this.#divEl.querySelector(".accordion-button");
    this.#button.dataset.bsTarget = `#${collapseId}`;
    this.#divEl.querySelector(".accordion-collapse").id = collapseId;
  }
  getEl() {
    return this.#divEl;
  }

  setParentId(id) {
    this.#collapse.getEl().dataset.bsParent = `#${id}`;
    return this;
  }
  setHeader(content) {
    this.#button.innerHTML = content;
    return this;
  }
  setContent(content) {
    this.#collapse.getEl().querySelector(".accordion-body").innerHTML=content;
    return this;
  }
}



export default class Accordion {
  #divEl;
  addItem(headerContent, bodyContent) {
    if (!this.#divEl) {
      this.#divEl = document.createElement("div");
      this.#divEl.id = crypto.randomUUID();
      this.#divEl.className = "accordion";
    }
    const item = new AccordionItem();
    item.setHeader(headerContent);
    item.setContent(bodyContent);
    item.setParentId(this.#divEl.id);
    this.#divEl.append(item.getEl())
    return this;
  }
  getEl(){
    return this.#divEl;
  }
}

