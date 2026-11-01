import { app } from "./app"
import { initModel } from "./model"
import { update } from "./update"
import { viewInit } from "./viewInit"
import { viewUpdate } from "./viewUpdate"

const rootNode = document.body

app(initModel, viewInit, viewUpdate, update, rootNode)