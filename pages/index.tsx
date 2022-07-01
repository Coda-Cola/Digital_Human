import { useRouter } from "next/router";
import Dashboard from "./Dashboard";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/layout/Navbar";

import { useSession, signIn, signOut } from "next-auth/react";

export default function Index() {
  const router = useRouter();

  // https://next-auth.js.org/getting-started/client#usesession
  // status: "loading" | "authenticated" | "unauthenticated"
  const { data: session, status } = useSession();

  const navbar = (
    <Navbar isAuthenticated={!!session} signIn={signIn} signOut={signOut} />
  );

  if (status === "loading") {
    /* prevent undesired content flashing */
    return <>{navbar}</>;
  }

  if (status === "authenticated") {
    return (
      <>
        {navbar}
        <Dashboard />
      </>
    );
  }

  return (
    <>
      {navbar}
      {session ? <Dashboard /> : <LandingPage isAuthenticated={false} />}
    </>
  );
}
