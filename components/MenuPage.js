export class MenuPage extends HTMLElement {
    constructor(){
        super();

      
    }
    //when the component is attached to the dom 
    connectedCallback(){
        const template = document.getElementById('menu-page-template')
        //get template val to clone as template val cannot be visible
        const content = template.content.cloneNode(true)
        this.appendChild(content)
    }
}

customElements.define("menu-page", MenuPage)