import React from "react";
import { use } from "react";
import { Auth_context } from "../context/Auth_context";

const use_auth = () => {
      const auth_info = use(Auth_context);

      return auth_info;
};

export default use_auth;
