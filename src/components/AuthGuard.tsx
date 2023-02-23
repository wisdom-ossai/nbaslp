import { useRouter } from "next/router";
import React from "react";
import { useAuthContext } from "./AuthContext/AuthContext";

const AuthGuard = ({ children }: any) => {
  const { user } = useAuthContext();
  const router = useRouter();

  React.useLayoutEffect(() => {
    if (user == null) router.push("/");
  }, [user]);

  return <div>AuthGuard</div>;
};

export default AuthGuard;
