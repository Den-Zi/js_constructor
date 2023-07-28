import {modal} from "./model.js";
import { text, titel,colums,img } from "./templets.js";
import './style/main.css'



const $site = document.querySelector('#site');

modal.forEach(block => {
    let html = '';
    if (block.type === 'titel') {
        html = titel(block);
    }
    if (block.type === 'text') {
        html = text(block);
    }
    else if (block.type === 'colums') {
        html = colums(block);
    }
    else if (block.type === 'img') {
        html = img(block);
    }
    $site.insertAdjacentHTML('beforeend', html);
});


function titel(block) {
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

