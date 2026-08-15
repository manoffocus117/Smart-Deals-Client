import React from "react";
import { Auth_context } from "../context/Auth_context";

const Auth_provider = ({ children }) => {
      const auth_info = {};

      return <Auth_context value={auth_info}>{children}</Auth_context>;
};

export default Auth_provider;
