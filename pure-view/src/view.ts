import { ViewFunction } from "./model"

export const view: ViewFunction = (model, dispatch) => {

    const div = document.createElement('div')

    const p1 = document.createElement('p')
    const p2 = document.createElement('p')
    const p3 = document.createElement('p')

    p1.textContent = 'this is p1'
    p2.textContent = 'this is p2'
    p3.textContent = 'this is p3'

    if (model.selected === 'p1') p1.style.textDecoration = 'underline'
    if (model.selected === 'p2') p2.style.textDecoration = 'underline'
    if (model.selected === 'p3') p3.style.textDecoration = 'underline'

    p1.addEventListener('click', () => dispatch('select p1'))
    p2.addEventListener('click', () => dispatch('select p2'))
    p3.addEventListener('click', () => dispatch('select p3'))

    const selected = document.createElement('p')
    selected.textContent = `${model.selected} is selected`

    const pre = document.createElement('pre')
    pre.textContent = JSON.stringify(model, null, 2)

    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)
    div.appendChild(selected)
    div.appendChild(pre)

    return div
} 