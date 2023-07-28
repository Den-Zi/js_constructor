

export class Side{
    constructor(selector) {
        this.$sel = document.querySelector(selector);
        
        
    }

    toRender(modal){
        this.$sel.innerHTML = ''
        modal.forEach(block => {
            this.$sel.insertAdjacentHTML('beforeend', block.toHTML());
    });
    }
}