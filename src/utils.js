


export function row (content, style) {
    return `<div class="row" style="${style}">${content}</div>`;
}

export function col (content) {
    return `<div class="col-sm">${content}</div>`;
}

export function css(style = {}) {
const keys = Object.keys(style);
const arry = keys.map(key => {
    return `${key}: ${style[key]}`
})
return arry.join(';')
}

console.log('utilis.js')




