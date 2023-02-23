import React, { ReactNode } from "react";
import {
  onAuthStateChanged,
  getAuth,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";
import firebase_app, { db } from "@slp/configs/firebase";
import Spinner from "../Spinner";
import mapAuthCodeToMessage from "@slp/configs/mapAuthCodeToMessage";

interface IAuthContext {
  user: User | null;
}

const auth = getAuth(firebase_app);

export const AuthContext = React.createContext<any>(null);

export const useAuthContext = () => React.useContext(AuthContext);

const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  async function signUp(email: string, password: string, username: string) {
    let result = null,
      error = null;
    try {
      result = await createUserWithEmailAndPassword(auth, email, password);
      const usersRef = collection(db, "users");

      console.log(result.user.metadata, result.user.providerData[0]);

      const userExist = await getDoc(doc(db, "users", result.user.uid));

      if (!userExist.exists()) {
        await setDoc(doc(usersRef, result.user.uid), {
          ...result.user.metadata,
          ...result.user.providerData[0],
          username,
          emailVerified: result.user.emailVerified,
        });
      }
    } catch (e) {
      error = e;
    }

    return { result, error };
  }

  async function signIn(email: string, password: string) {
    let result = null,
      error: any = null;
    try {
      result = await signInWithEmailAndPassword(auth, email, password);
    } catch (e: any) {
      error = mapAuthCodeToMessage(e.code);
    }

    return { result, error };
  }

  async function googleSignin() {
    let result = null,
      error = null;
    const provider = new GoogleAuthProvider();
    try {
      result = await signInWithPopup(auth, provider);

      const usersRef = collection(db, "users");

      const userExist = await getDoc(doc(db, "users", result.user.uid));

      if (!userExist.exists()) {
        await setDoc(doc(usersRef, result.user.uid), {
          ...result.user.metadata,
          ...result.user.providerData[0],
          username: "",
          emailVerified: result.user.emailVerified,
        });
      }
    } catch (e: any) {
      error = mapAuthCodeToMessage(e.code);
    }

    return { result, error };
  }

  async function logout() {
    await signOut(auth);
  }

  return (
    <AuthContext.Provider
      value={{ user, signIn, signUp, googleSignin, logout }}
    >
      {loading ? <Spinner /> : children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
