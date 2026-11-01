import { ViewFunction } from "./model"

export const viewUpdate: ViewFunction = (model, dispatch) => {

    const p1 = document.getElementById('p1')!
    const p2 = document.getElementById('p2')!
    const p3 = document.getElementById('p3')!

    setDecoration(p1, model.selected === 'p1')
    setDecoration(p2, model.selected === 'p2')
    setDecoration(p3, model.selected === 'p3')

    const selected = document.getElementById('selected')!
    selected.textContent = `${model.selected} is selected`

    const pre = document.getElementById('pre')!
    pre.textContent = JSON.stringify(model, null, 2)
} 

const setDecoration = (el: HTMLElement, active: boolean): void => {
  if (active !== (el.dataset.active === 'true')) {
    el.style.textDecoration = active ? 'underline' : 'none'
    el.dataset.active = String(active)
  }
}