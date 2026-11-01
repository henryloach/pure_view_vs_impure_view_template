import { app } from "./app"
import { initModel } from "./model"
import { update } from "./update"
import { view } from "./view"

const rootNode = document.body

app(initModel, view, update, rootNode)