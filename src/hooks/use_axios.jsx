import axios from "axios";

const axios_instance = axios.create({
      baseURL: "http://localhost:3000",
});
const use_axios = () => {
      return axios_instance;
};

export default use_axios;
