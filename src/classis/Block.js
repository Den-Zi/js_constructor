

import { row, col, css } from "../utils.js";
export class Block {
    constructor(type, value, options) {
        this.type = type,
        this.value = value,
        this.options = options
    }
    toHTML() {
        throw new Error('Метод toHTML должен быть реализован')
    }
}
export class TitleBlock extends Block {
    constructor(value, options) {
        super('titel', value, options)
    }

    toHTML() {
        const { style = 'h1', tag } = this.options
        return row(col(`<${tag}>${this.value}</${tag}>`), css(style));
    }

}
export class TexteBlock extends Block {
    constructor(value, options) {
        super('text', value, options)
    }

    toHTML() {
        return row(col(`<p>${this.value}</p>`), css(this.options.style));
    }

}
export class ColumsBlock extends Block {
    constructor(value, options) {
        super('colums', value, options)
    }

    toHTML() {
        let html = this.value.map(col).join('');
        return row(html, css(this.options.style));
    }

}
export class ImgeBlock extends Block {
    constructor(value, options) {
        super('img', value, options)
    }

    toHTML() {
        const { imageStyles, alt = '', style } = this.options
        return row(`<img src='${this.value}' alt ='${alt}' style="${css(imageStyles)}">`, css(style));
    }

}

console.log('Класс.js')