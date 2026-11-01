import { UpdateFunction } from "./model";

export const update: UpdateFunction = (model, message) => {
    switch (message) {
        case 'select p1':
            return { selected: 'p1' }
        case 'select p2':
            return { selected: 'p2' }
        case 'select p3':
            return { selected: 'p3' }
    }
}