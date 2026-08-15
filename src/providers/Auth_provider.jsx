import React, { useEffect, useState } from "react";
import { Auth_context } from "../context/Auth_context";
import {
      createUserWithEmailAndPassword,
      onAuthStateChanged,
      signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "./../config/firebase.config";

const Auth_provider = ({ children }) => {
      // user data
      const [user, set_user] = useState(null);
      const [loading, set_loading] = useState(true);

      // create user
      const create_user = (email, password) => {
            set_loading(true);
            return createUserWithEmailAndPassword(
                  auth,
                  EmailAuthCredential,
                  password,
            );
      };

      // sign in user with email & password
      const sign_in_user = (email, password) => {
            set_loading(true);
            return signInWithEmailAndPassword(auth, email, password);
      };

      // auth observer
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (current_user) => {
                  set_user(current_user);
            });
            return () => {
                  unsubscribe();
            };
      }, []);

      const auth_info = {
            user,
            loading,
            create_user,
            sign_in_user,
      };

      return <Auth_context value={auth_info}>{children}</Auth_context>;
};

export default Auth_provider;
