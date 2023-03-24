import { db } from "./database"

export async function createUserTable() {
    db.serialize(() => {
        db.exec(
            "CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY, username TEXT, email TEXT, password TEXT, markdownId TEXT)"
        )
    })
}

export async function createMarkdownTable() {
    db.serialize(() => {
        db.exec(
            "CREATE TABLE IF NOT EXISTS Markdown (id INTEGER PRIMARY KEY, author TEXT, content TEXT)"
        )
    })
}
