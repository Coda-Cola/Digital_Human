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
    /** persists token in localStorage 
     * @todo or sessionStorage
     * https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
     * make it safer with sessionStorage? or just more annoying coz will ask to login every time user closes browser tab.
    */
    if (token === null) {
      throw new Error(`AuthProvider.setUserAuthInfo: token is null.\ntoken: ${JSON.stringify(token, null,4)}`)
    }

    console.log('setting token to localStorage', token)
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