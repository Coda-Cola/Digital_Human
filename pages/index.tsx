import { useRouter } from "next/router";
import Dashboard from "./dashboard";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/layout/Navbar";
import { AuthContext } from "./context/auth-context";
import { useContext, useEffect } from "react";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Index() {
  const router = useRouter();

  // https://next-auth.js.org/getting-started/client#usesession
  // session: { expires: date, user: string, email: string}
  // status: "loading" | "authenticated" | "unauthenticated"
  const { data: session, status } = useSession(
    // { 
    // required: true,   // `status` can only be "loading" or "authenticated"

    // onUnauthenticated() {
    //   router.push("/login")
    // }
  // }
  );
  console.log(session, status)

  // const authContext = useContext(AuthContext)

  // useEffect(() => {
  //   if (status === "authenticated") {
  //     /**@todo generate token */
  //     // const token = JWE.generateToken(JWE.withSalt())
  //     if (authContext?.isAuthenticated() === false ) {
  //       /** makes everyone know that user is good to go behind the curtains */
  //       authContext?.setAuthState({ token: "token123" })
  //     }
  //   }
  // }, [status])

  let isAuthenticated = !!session;

  const navbar = (
    <Navbar isAuthenticated={isAuthenticated} signIn={signIn} signOut={signOut} />
  );

  if (status === "loading") {
    /** prevens undesired content flashing */
    return <>{navbar}</>;
  }

  // if (status === "authenticated") {
  //   // return (
  //   //   <>
  //   //     {navbar}
  //   //     <Dashboard />
  //   //   </>
  //   // );
  //   router.push('/dashboard')
  // }

  return (
    <>
      {navbar}
      {/* {session ? <Dashboard /> : <LandingPage />} */}
      {<LandingPage />}
    </>
  );
}
