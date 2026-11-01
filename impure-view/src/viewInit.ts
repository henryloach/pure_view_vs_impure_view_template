import { ViewFunction } from "./model"

export const viewInit: ViewFunction = (model, dispatch) => {
    const p1 = document.getElementById('p1')!
    const p2 = document.getElementById('p2')!
    const p3 = document.getElementById('p3')!

    p1.addEventListener('click', () => dispatch('select p1'))
    p2.addEventListener('click', () => dispatch('select p2'))
    p3.addEventListener('click', () => dispatch('select p3'))
}