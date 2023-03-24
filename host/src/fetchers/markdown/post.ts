import axios from "axios";
import { API_URL, TypePostMarkdown } from "../../helpers"

export async function PostMarkdown(data: TypePostMarkdown) {
    axios.post(`${API_URL}/createMarkdown`, data)
        .then((res) => console.log(res))
        .then((err) => console.log(err))
}