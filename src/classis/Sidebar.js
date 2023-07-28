
import { block } from "../utils.js"
import { TexteBlock, TitleBlock } from "./Block.js"

export class Sidebar {
    constructor(selector) {
        this.$el = document.querySelector(selector)
        this.init()
    }
    
    init() {
        this.$el.insertAdjacentHTML('afterbegin', this.template)
        this.$el.addEventListener('submit', this.add.bind(this))
    }

    get template() {
        return [
            block('text'),
            block('titel')
        ].join('')
        
      
    }

    add(event) {
        event.preventDefault()

        const type = event.target.name
        const value = event.target.value.value
        const style = event.target.styles.value
        

       const newBlock = (type === 'text')  
       ? newBlock = new TexteBlock(value, {style})
       : newBlock = new TitleBlock(value, {style})

       this.update(newBlock)

       event.target.value.value =''
       event.target.styles.value

    }
}
