
import { row, col, css} from "./utils.js";

function titel(block) {

    const {style = 'h1', tag} = block.options
    
    
    return row(col(`<${tag}>${block.value}</${tag}>`), css(style));
}
function text(block) {
    return row(col(`<p>${block.value}</p>`));
}
function colums(block) {

    let html = block.value.map(col).join('');

    return row(html);
}
function img(block) {
    return row(`<img src='${block.value}' alt =''>`);
}

export const templets = {
    titel,
    text,
    colums,
    img
}

console.log('templets.js')

console.log(row('ffdfdf'))