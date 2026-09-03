import { useNavigate } from "react-router";
import axios_instance from "../api/axios_instance";
import use_auth from "./use_auth";
import { useEffect } from "react";

const use_axios_secure = () => {
      // user data from auth context
      const { user, sign_out_user } = use_auth();

      const navigate = useNavigate();

      useEffect(() => {
            // request interceptors
            // set token in the header for all the api calls using interceptors
            const request_interceptor = axios_instance.interceptors.request.use(
                  (config) => {
                        const token = localStorage.getItem("auth-token");
                        if (token) {
                              config.headers.authorization = `Bearer ${token}`;
                        }
                        return config;
                  },
                  (error) => Promise.reject(error),
            );

            // response interceptor
            const response_interceptor =
                  axios_instance.interceptors.response.use(
                        (response) => {
                              return response;
                        },
                        (error) => {
                              const status = error.status;
                              if (status === 401 || status === 403) {
                                    console.log(
                                          "log out the user for bad request",
                                    );
                                    sign_out_user().then(() => {
                                          // navigate user to the register page
                                          navigate("/register");
                                    });
                              }
                              return;
                        },
                  );

            // unmount
            return () => {
                  axios_instance.interceptors.request.eject(
                        request_interceptor,
                  );
                  axios_instance.interceptors.response.eject(
                        response_interceptor,
                  );
            };
      }, [user, sign_out_user, navigate]);

      return axios_instance;
};

export default use_axios_secure;
