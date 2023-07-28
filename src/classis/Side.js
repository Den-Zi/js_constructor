

export class Side{
    constructor(selector) {
        this.$sel = document.querySelector(selector);
        
        
    }

    toRender(modal){
        modal.forEach(block => {
            this.$sel.insertAdjacentHTML('beforeend', block.toHTML());
    });
    }
}