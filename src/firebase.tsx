import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY,
  authDomain: process.env.FIREBASE_AUTHDOMAIN,
};

// https://firebase.google.com/docs/auth/web/start
// see: GitHub認証の統合 https://firebase.google.com/docs/auth/web/github-auth?hl=ja
const githubProvider = new firebase.auth.GithubAuthProvider();

const FirebaseFactory = (): {
  signup: (
    email: string,
    password: string,
  ) => Promise<firebase.auth.UserCredential>;
  auth: () => firebase.auth.Auth;
  login: () => Promise<firebase.auth.UserCredential>;
  logout: () => Promise<void>;
} => {
  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();

  return {
    signup: (email: string, password: string) =>
      auth.createUserWithEmailAndPassword(email, password),
    auth: () => auth,

    login: () => auth.signInWithPopup(githubProvider),

    logout: () => auth.signOut(),
  };
};

export default FirebaseFactory();
