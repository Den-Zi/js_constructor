import {modal} from "./model.js";
import { Side } from "./classis/Side.js";
import { Sidebar } from "./classis/Sidebar.js";
// import './style/main.css' // так как пока не работаем с parcel


const $site = new Side('#site');
$site.toRender(modal);

const updateCallback = newBlock => {
    modal.push(newBlock)
    $site.toRender(modal)
}

const sidebar = new Sidebar('#panel',  updateCallback)




console.log('index.js')


