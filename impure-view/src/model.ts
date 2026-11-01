export type Model = {
    selected: Selected
}

export const initModel: Model = {
    selected: 'p1'
}

export type Selected = 'p1' | 'p2' | 'p3'

export type Message = 'select p1' | 'select p2' | 'select p3'

export type ViewFunction = (model: Model, dispatch: DispatchFunction) => void
export type UpdateFunction = (model: Model, message: Message) => Model
export type DispatchFunction = (message: Message) => void
