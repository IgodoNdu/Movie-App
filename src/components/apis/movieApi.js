//Import axios for API calls
import axios from "axios";

export default axios.create({
    baseURL: "http://www.omdbapi.com",
})