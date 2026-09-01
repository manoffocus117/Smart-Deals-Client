import axios from "axios";
import use_auth from "./use_auth";

const axios_instance = axios.create({
      baseURL: "http://localhost:3000",
});
const use_axios_secure = () => {
      // user data from auth context
      const { user } = use_auth();

      // set token in the header for all the api calls using interceptors
      axios_instance.interceptors.request.use((config) => {
            config.headers.authorization = `Bearer ${user?.accessToken}`;
            return config;
      });

      return axios_instance;
};

export default use_axios_secure;
