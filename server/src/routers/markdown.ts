import { controller } from "../controller"
import { db } from "../database"

controller.get("/getMarkdown", async (req, res) => {
    db.serialize(() => {
        db.all(
            "SELECT * FROM Markdown",
            (error: Error, markdown: Array<{}>) => {
                if (error) return res.status(500).json({ error, msg: error.message })
                res.json({ markdown: markdown })
            }
        )
    })
})

controller.post("/send-markdown", async (req, res) => {
    db.serialize(() => {
        db.run(
            "INSERT INTO Markdown (content, author) VALUES (?,?)",
            [
                req.body.content,
                req.body.author
            ]
        )
    })
})