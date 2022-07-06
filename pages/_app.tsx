import "../styles/globals.css";
import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import { SessionProvider, useSession } from "next-auth/react";
import type { AppProps } from "next/app";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";

export type Page<T> = NextPage<T> & {
  auth?: { role: string; unauthorized: string } | undefined 
};

type CustomAppProps = AppProps & {
  Component: Page<unknown>;
};

function MyApp({ Component, pageProps: { session, ...pageProps } }: CustomAppProps) {
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
  /**
   * { required: true } makes sure there are only
   * "loading"|"authenticated" states.
   * If this set to false, code below needs to add
   * "unauthenticated" check and manually redirect to
   * authorization page (call signIn() is the easiest).
   */
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
