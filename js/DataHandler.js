import data,{LABELS_MAP}from "../data.js";




class Resource{
  #resource;
  constructor(resource){
    this.#resource = resource;
  }
  get name(){
    return this.#resource.name || ""
  }
  isForChilds(){
    return this.#resource.labels.find(label=>label==="CHIL")
  }
  get description(){
    return this.#resource.description || "Ez da deskribapenik aurkitu...";
  }
  get url(){
    return this.#resource.url || "#"
  }
  isEducative(){
    return this.#resource.labels.find(label=>label==="EDUC")
  }
  isForAudio(){
    return this.#resource.labels.find(label=>label==="AUDI")
  }
  isForVideo(){
    return this.#resource.labels.find(label=>label==="VIDE")
  }
  isForDesign(){
    return this.#resource.labels.find(label=>label==="DESI")
  }
  
  isForTextEdition(){
    return this.#resource.labels.find(label=>label==="TEXT")
    
  }
  isForProjects(){
    return this.#resource.labels.find(label=>label==="PROJ")
    
  }
  isForProductivity(){
    return this.#resource.labels.find(label=>label==="PROD")
  }
  isForPlaying(){
    return this.#resource.labels.find(label=>label==="PLAY")
  }
  hasLabel(targetLabel){
    return this.#resource.labels.find(label=>label===targetLabel);
  }
}

export default class DataHandler{
  static #resources = data.sort((el1, el2)=>el1.name>el2.name ?1 :-1).map(el => new Resource(el));
  static #filters = new Set();
  static get data(){
    console.log(this.#filters, this.#resources.length)
    if(!this.#filters.size)return this.#resources;
    
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