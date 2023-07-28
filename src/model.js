
//import img from './assets/img.jpg' // динмически создаваем путь д картинки
import {TitleBlock,  TexteBlock, ImgeBlock, ColumsBlock } from "./classis/Block.js";

export const modal = [
    new TitleBlock('Hello Word from JS', {
        tag: 'h1',
        style: {
            background: 'black;',
            'font-size': '25px;'
        }
    }),

    new TexteBlock('Lorem ipsum dolor sit amet consectetur adipisicing elitfgfgfg hh66k6kk', {
        style: {
            background: 'black;',
            'font-size': '25px;'
        }
    }),

    new ColumsBlock([
        '111111111',
        '2222222222',
        '33333333333',
        '4444444444444',
    ],{
        style: {
            background: 'black;',
            'font-size': '25px;'
        }
    }),
   
    new ImgeBlock('./assets/img.jpg', {
        style: {
            padding: '2rem 0',
            display: 'flex',
            'justify-content': 'center'
        },
        imageStyles: {
            width: '500px',
            height: 'auto'
        },
        alt: 'Ван Гог'
    })
];

console.log('model.js')