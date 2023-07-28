
//import img from './assets/img.jpg' // динмически создаваем путь д картинки

export const modal = [
    {
        type: 'titel',
        value: 'Hello Word from JS',
        options: {
            tag: 'h1',
            style: {
                background: 'black;',
                'font-size': '25px;'
            }
        }
    },
    {
        type: 'text',
        value: 'Lorem ipsum dolor sit amet consectetur adipisicing elitfgfgfg hh66k6kk',
        style: {
            background: 'black;',
            'font-size': '25px;'
        }
    },
    {
        type: 'colums',
        value: [
            '111111111',
            '2222222222',
            '33333333333',
            '4444444444444',
        ],
        style: {
            background: 'black;',
            'font-size': '25px;'
        }
    },
    {
        type: 'img',
        value: './assets/img.jpg',
        style: {
            background: 'black;',
            'font-size': '25px;'
        }
    }

];

console.log('model.js')