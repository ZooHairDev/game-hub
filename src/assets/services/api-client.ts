import axios from "axios"

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "0a6615f3ec354d4aa644dcab79415210"
    }
})