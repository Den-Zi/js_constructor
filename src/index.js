import {modal} from "./model.js";
// import './style/main.css' // так как пока не работаем с parcel




const $site = document.querySelector('#site');


modal.forEach(block => {
        $site.insertAdjacentHTML('beforeend', block.toHTML());
});

console.log('index.js')


