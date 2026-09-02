import axios from "axios";
import use_auth from "./use_auth";
import { useEffect } from "react";

const axios_instance = axios.create({
      baseURL: "http://localhost:3000",
});
const use_axios_secure = () => {
      // user data from auth context
      const { user } = use_auth();

      const request_interceptors = useEffect(() => {
            // set token in the header for all the api calls using interceptors
            axios_instance.interceptors.request.use((config) => {
                  config.headers.authorization = `Bearer ${user?.accessToken}`;
                  return config;
            });

            // unmount
            return () => {
                  axios_instance.interceptors.request.eject(
                        request_interceptors,
                  );
            };
      }, [user]);

      return axios_instance;
};

export default use_axios_secure;
