import "../styles/globals.css";
import Image from "next/image";
import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import Navbar from "./components/layout/Navbar";


function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {

  return (
    <SessionProvider session={session}>
      <Navbar />
      {Component.auth ? (
        <Auth>
          <Component {...pageProps} />
        </Auth>
      ) : (
        <Component {...pageProps} />
      )}
    </SessionProvider>
  );
}

export default MyApp;

function Auth({ children }: { children: JSX.Element }) {
  const { status } = useSession({ required: true });

  if (status === "loading") {
    return (
      <div
        style={{
          height: "100vh",
          width: "100wh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          width="64px"
          height="72px"
          src="/assets/img/logo.png"
          alt="logo"
        />
      </div>
    );
  }
  return children;
}
