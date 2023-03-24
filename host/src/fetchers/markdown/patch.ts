import axios from "axios";
import { API_URL, TypePatchMarkdown } from "../../helpers"

export async function PatchMarkdownContent(data: TypePatchMarkdown) {
    axios.patch(`${API_URL}/sendMarkdown`, data)
}