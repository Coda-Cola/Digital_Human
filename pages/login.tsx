import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from './context/auth-context'
import Navbar from "./components/layout/Navbar";

function Login() {
  const router = useRouter()
  const authContext = useContext(AuthContext)

  useEffect(() => {
    // authContext?.isAuthenticated() ? 
    // router.push("/login") : 
    // router.push("/")
    // router.push("/api/auth/login")
  }, [])
  return (
    <>
    <div>Login</div>
    </>
  )
}

export default Login