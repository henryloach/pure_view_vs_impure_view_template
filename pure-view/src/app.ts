import { DispatchFunction, Model, UpdateFunction, ViewFunction } from "./model"

export const app = (initModel: Model, view: ViewFunction, update: UpdateFunction, rootNode: HTMLElement) => {
    
    const dispatch: DispatchFunction = (message) => {
        const updatedModel = update(currentModel, message)
        const updatedView = view(updatedModel, dispatch)

        rootNode.replaceChild(updatedView, currentView)

        currentModel = updatedModel
        currentView = updatedView
    }

    let currentModel = initModel
    let currentView = view(initModel, dispatch)
    rootNode.appendChild(currentView)
}