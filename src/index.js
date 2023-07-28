import {modal} from "./model.js";
import { templets} from "./templets.js";
// import './style/main.css' // так как пока не работаем с parcel



const $site = document.querySelector('#site');


modal.forEach(block => {

    const toHTML = templets[block.type];

    if(toHTML){
        $site.insertAdjacentHTML('beforeend', toHTML(block));
    }

});




