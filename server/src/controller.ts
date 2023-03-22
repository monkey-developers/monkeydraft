import { Router } from "express"

const controller = Router()

controller.get("/", (req, res) => {
    res.send('sim')
})

export { controller }