import React, { useEffect, useState } from "react";
import { Auth_context } from "../context/Auth_context";
import {
      createUserWithEmailAndPassword,
      GoogleAuthProvider,
      onAuthStateChanged,
      signInWithEmailAndPassword,
      signInWithPopup,
} from "firebase/auth";
import auth from "./../config/firebase.config";

// google auth provider
const google_auth_provider = new GoogleAuthProvider();

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

      // sign in with google
      const sign_in_with_google = () => {
            set_loading(true);
            return signInWithPopup(auth, google_auth_provider);
      };

      // auth observer
      useEffect(() => {
            const unsubscribe = onAuthStateChanged(auth, (current_user) => {
                  set_user(current_user);
                  set_loading(false);
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
            sign_in_with_google,
      };

      return <Auth_context value={auth_info}>{children}</Auth_context>;
};

export default Auth_provider;
