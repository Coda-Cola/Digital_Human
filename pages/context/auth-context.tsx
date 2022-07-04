import { useState, createContext } from "react";

const AuthContext = createContext<AuthContextProps | null>(null);
const { Provider } = AuthContext;

interface AuthContextProps {
  authState: AuthStateProps,
  setAuthState: (userAuthInfo: AuthStateProps) => void
  isAuthenticated: () => boolean
}
interface AuthProviderProps {
  children: JSX.Element | JSX.Element[]
}
interface AuthStateProps {
  token: string|null
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [authState, setAuthState] = useState<AuthStateProps>({ token: null })

  const setUserAuthInfo = ({ token }: AuthStateProps): void => {
    /* persist in localStorage */
    if (token === null) {
      throw new Error(`AuthProvider.setUserAuthInfo: token is null.\ntoken: ${JSON.stringify(token, null,4)}`)
    }
    localStorage.setItem("token", token)

    /* set auth state */
    setAuthState({ token })
  }

  const isAuthenticated = () => !!authState.token

  return <Provider value={{
    authState,
    setAuthState: (userAuthInfo: AuthStateProps) => setUserAuthInfo(userAuthInfo),
    isAuthenticated
  }}>
    {children}
  </Provider>
}

export { AuthContext, AuthProvider }