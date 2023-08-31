import data,{LABELS_MAP}from "../data.js";




class Resource{
  #resource;
  #findLabel = targetLabel => this.#resource.labels.find(label=>label===targetLabel);
  constructor(resource){
    this.#resource = resource;
  }
  get name(){
    return this.#resource.name || ""
  }
  get description(){
    return this.#resource.description || "Ez da deskribapenik aurkitu...";
  }
  get url(){
    return this.#resource.url || "#"
  }
  get isForChilds(){
    return this.#findLabel("CHIL")
  }
  get isForWeb(){
    return this.#findLabel("WEB")
  }
  get isEducative(){
    return this.#findLabel("EDUC")
  }
  get isForAudio(){
    return this.#findLabel("AUDI")
  }
  get isForVideo(){
    return this.#findLabel("VIDE")
  }
  get isForDesign(){
    return this.#findLabel("DESI")
  }
  
  get isForTextEdition(){
    return this.#findLabel("TEXT")
    
  }
  get isForProjects(){
    return this.#findLabel("PROJ")
    
  }
  get isForPlaying(){
    return this.#findLabel("PLAY")
  }
  get isForOtherThings(){
    return this.#findLabel("OTHE")
  }
  hasLabel(targetLabel){
    return this.#findLabel(targetLabel);
  }
}

export default class DataHandler{
  static #resources = data.sort((el1, el2)=>el1.name>el2.name ?1 :-1).map(el => new Resource(el));
  static #filteredResources = ()=> {
    const resourceMap= new Map(); //Para evitar duplicados
    for(let label of this.#filters){
      for(let resource of this.#resources){
        if(resource.hasLabel(label)){
         resourceMap.set(resource.name, resource)
         
        }
      }
    }
    return resourceMap.values();
  }
  static #filters = new Set();
  static get data(){
    // console.log(this.#filters, this.#resources.length)
    return this.#filters.size ? this.#filteredResources() : this.#resources ;
  
  }
  static addFilter(label){
    this.#filters.add(label);
    
    return this;
  }
  
  static removeFilter(label){
    this.#filters.delete(label);
    return this;
  }
  
  static clearFilters(){
    this.#filters.clear();
    return this;
  }
  static get labels(){
    return LABELS_MAP
  }
}