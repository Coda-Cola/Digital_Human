import "../styles/globals.css";
import Image from "next/image";
import { SessionProvider, useSession } from "next-auth/react";
import { AuthProvider } from "./context/auth-context";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
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
// function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
//   return (
//     <AuthProvider>
//       <SessionProvider session={session}>
//         <Component {...pageProps} />
//       </SessionProvider>
//     </AuthProvider>
//   );
// }

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
        <div
          style={{
            height: "100px",
            width: "100px",
            backgroundColor: "white",
          }}
        >
          Loading
          {/* <Image alt="digital human logo"></Image> */}
        </div>
      </div>
    );
  }
  return children
}
