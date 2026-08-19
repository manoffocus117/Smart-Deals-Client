import React from "react";
import { HashLoader } from "react-spinners";

const Loading = () => {
      return (
            <section className="w-11/12 mx-auto h-screen flex items-center justify-center">
                  <HashLoader loading={true} size={100} color="#333333" />
            </section>
      );
};

export default Loading;
