import { createDOMEl } from "./helpers.js";

import * as boostrap from "../node_modules/bootstrap/dist/js/bootstrap.esm.js";



export default class BsModal{
  #modal;
  #id
 

constructor(parentEl){
  //console.log(parentEl)
  const div = document.createElement('div');
  div.className = "modal fade";
  this.#id = 'x'+crypto.randomUUID();
  div.id = this.#id;
  div.appendChild(createDOMEl('div', "modal-body"));
  parentEl.append(div);
  this.#modal = new boostrap.Modal(`#${div.id}`);
  console.log(this.#modal)
 
}
 show(){
  const modal = boostrap.Modal.getOrCreateInstance("#"+this.#id);
  modal.show()
 }

}

new BsModal(document.body).show()