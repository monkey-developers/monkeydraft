import axios from "axios";
import { API_URL } from '../../helpers'

export async function GetMarkdown() {
    return axios.get(`${API_URL}/getMarkdown`)
}