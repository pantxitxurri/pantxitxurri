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
  hasLabel(targetLabel){
    return this.#resource.labels.find(label=>label===targetLabel);
  }
}

export default class DataHandler{
  static #resources = data.sort((el1, el2)=>el1.name>el2.name ?1 :-1).map(el => new Resource(el));
  static #filters = new Set();
  static get data(){
    console.log(this.#filters)
    if(!this.#filters.size)return this.#resources;
    const resources = this.#resources;
    const filteredResources = [];
    //Por cada filtro buscamos elementos y los quitamos del recorrido en caso de que se 
    for(let label of this.#filters){
      for(let i=0; i<resources.length; i++){
        const resource = resources[i];
        if(resource.hasLabel(label)){
         filteredResources.push(resource)
        }
      }
    }
    console.log(filteredResources.length)
    return filteredResources;
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