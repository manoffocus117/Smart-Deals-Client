import React, { use } from "react";
import { Auth_context } from "../context/Auth_context";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

const Private_route = ({ children }) => {
      const { user, loading } = use(Auth_context);
      const location = useLocation();

      if (loading) {
            return <Loading />;
      }

      if (user && user?.email) {
            return children;
      }

      return <Navigate state={location.pathname} to={"/login"} />;
};

export default Private_route;
