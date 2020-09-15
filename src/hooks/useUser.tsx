import { useState, useEffect } from 'react';
import firebase from '../firebase';
// import { route } from "preact-router";

export const useUser = (): {
  user: firebase.User | null;
  login: () => Promise<void>;
  logout: () => Promise<void>;
} => {
  const [user, setUser] = useState<firebase.User | null>(null);
  useEffect(() => {
    const verificate = async () => {
      firebase.auth().onAuthStateChanged(loginUser => {
        if (loginUser) {
          setUser(loginUser);
        } else {
          setUser(null);
        }
      });
    };
    verificate();
  });

  const login = async () => {
    const credential = await firebase.login();
    setUser(credential.user);
  };

  const logout = async () => {
    await firebase.logout();
    setUser(null);
    // route('/');
  };

  return { user, login, logout };
};
