import { controller } from "../controller"

controller.get("/markdown", async (req, res) => {
    res.send('sim')
})