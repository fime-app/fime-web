import axios from "axios";

export async function testAxios() {
    const result = await axios.get("https://catfact.ninja/fact");
    return result;
}
