import { DispatchFunction, Model, UpdateFunction, ViewFunction } from "./model"

export const app = (model: Model, viewInit: ViewFunction, viewUpdate: ViewFunction, update: UpdateFunction, rootNode: HTMLElement) => {

    const dispatch: DispatchFunction = (message) => {
        model = update(model, message)
        viewUpdate(model, dispatch)
    }
    
    viewInit(model, dispatch)
}