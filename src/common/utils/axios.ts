import axios from "axios";

export async function testAxios() {
    const result = await axios.get("https://catfact.ninja/fact");
    return result;
}

export async function axiosGetRequest(url: string) {
    axios.defaults.baseURL = process.env.REACT_BE_URL;
    const result = await axios.get(url);
    return result;
}
