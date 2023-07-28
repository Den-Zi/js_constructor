


export function row (content, style) {
    return `<div class="row" style="${style}">${content}</div>`;
}

export function col (content) {
    return `<div class="col-sm">${content}</div>`;
}

export function css(style = {}) {
    if(typeof style === 'string') return style
const keys = Object.keys(style);
const arry = keys.map(key => {
    return `${key}: ${style[key]}`
})
return arry.join(';')
}


export function block(type) {
    return `
    <form name="${type}">
    <h5>${type}</h5>
    <div class="form-group">
        <input class="form-control form-control-sm" name="value" placeholder="value">
    </div>
    <div class="form-group">
        <input class="form-control form-control-sm" name="styles" placeholder="styles">
    </div>
    <button type="submit" class="btn btn-primary btn-sm">Добавить</button>
</form>
<hr/>`

}

console.log('utilis.js')




