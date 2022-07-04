import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "./context/auth-context";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <AuthProvider>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </AuthProvider>
  );
}

export default MyApp;
