import { createDOMEl } from "./helpers.js";

export default class AppModal {
  #id;
  #header;
  #body;
  #modal;

  constructor(parentEl) {
    if (!AppModal.modal) {
      const div = document.createElement("div");
      div.className = "modal fade";
      div.dataset.bsBackdrop = "static";
      this.#id = "x" + crypto.randomUUID();
      console.log(this.#id);
      div.id = this.#id;
      const modalDialog = div.appendChild(createDOMEl("div", "modal-dialog"));
      const modalContent = modalDialog.appendChild(createDOMEl("div", "modal-content"));
      this.#header = modalContent.appendChild(createDOMEl("div", "modal-header"));
      const btn = this.#header.appendChild(createDOMEl("button", "btn-close"));
      btn.dataset.bsDismiss = "modal";
      this.#body = modalContent.appendChild(createDOMEl("div", "modal-body"));
      parentEl.append(div);
      this.#modal = new boostrap.Modal(`#${this.#id}`);
      AppModal.modal = this;
    }
    return AppModal.modal;
  }
  get id() {
    return this.#id;
  }
  show() {
    this.#modal.show();
  }
  get element() {
    return document.getElementById(this.#id);
  }

  static get instance() {
    return boostrap.Modal.getOrCreateInstance(`#${this.#id}`);
  }

  addContent(content) {
    this.#body.append(content);
  }
}
