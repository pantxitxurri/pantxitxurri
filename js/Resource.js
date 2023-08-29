

export  class ResourceHandler{
  #resource;
  constructor(resource){
    this.#resource = resource;
  }
  get name(){
    return this.#resource.name || ""
  }
  isForChilds(){
    return this.#resource.childs;
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
}