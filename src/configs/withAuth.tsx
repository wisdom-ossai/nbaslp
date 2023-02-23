import React from "react";
import { useAuthContext } from "@slp/components/AuthContext/AuthContext";
import { useRouter } from "next/router";
import Spinner from "@slp/components/Spinner";

export function withPublic(Component: any) {
  return function WithPublic(props: any) {
    const auth = useAuthContext();
    const router = useRouter();

    if (auth.user) {
      router.replace("/dashboard");

      return <Spinner />;
    }

    return <Component auth={auth} {...props} />;
  };
}

export function withProtected(Component: any) {
  return function WithProtected(props: any) {
    const auth = useAuthContext();
    const router = useRouter();

    if (!auth.user) {
      router.replace("/membership/signin");

      return <Spinner />;
    }

    return <Component auth={auth} {...props} />;
  };
}
