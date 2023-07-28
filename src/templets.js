
import { row, col } from "./utils.js";
function titel(block) {
    
    // return row(col(block.value));

    return `
    <div class="row">
    <div class="col-sm">
        <h1>${block.value}</h1>
    </div>
</div>`;
}
function text(block) {
    return `
    <div class="row">
    <div class="col-sm">
        <p>${block.value}</p>
    </div>
</div>`;
}
function colums(block) {

    let html = block.value.map(item => `<div class="col-sm">${item}</div>`);

    return `<div class="row">${html.join('')}</div>`;
}
function img(block) {
    return `<div class="row"><img src='${block.value}' alt =''></div>`
}

export const templets = {
    titel,
    text,
    colums,
    img
}