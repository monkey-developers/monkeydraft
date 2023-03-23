import express from "express"
import cors from "cors"
import { controller } from "./controller"
import { createMarkdownTable, createUserTable } from "./helpers"

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(controller)
createUserTable()
createMarkdownTable()

app.listen(PORT, () => (
    console.log(
        `\x1b[32m[START]\x1b[0m Server is running on \x1b[35mhttp://localhost:${PORT}\x1b[0m`
    )
))
