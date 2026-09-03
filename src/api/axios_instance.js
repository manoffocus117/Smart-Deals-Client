import axios from "axios";

const axios_instance = axios.create({
      baseURL: "https://smart-deals-server-inky.vercel.app",
});

export default axios_instance;
