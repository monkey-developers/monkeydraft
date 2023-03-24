import axios from "axios";
import { API_URL, TypeCreateMarkdown } from "../../helpers"

export async function CreateMarkdown(data: TypeCreateMarkdown) {
    axios.post(`${API_URL}/createMarkdown`, data)
        .then((res) => console.log(res))
        .then((err) => console.log(err))
}