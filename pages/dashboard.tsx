import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from './context/auth-context'
import Navbar from "./components/layout/Navbar";
import { useSession, signIn, signOut } from "next-auth/react";

function Dashboard() {
  const router = useRouter()
  const authContext = useContext(AuthContext)
  const { data: session } = useSession()
  useEffect(() => {
    // authContext?.isAuthenticated() ? 
    // router.push("/dashboard") : 
    // router.push("/")
    // router.push("/api/auth/login")
  }, [])
  return (
    <>
      <Navbar isAuthenticated={!!session}/>
      <div>Dashboard</div>
    </>
  )
}

export default Dashboard

Dashboard.auth = {
  role: 'client',
  // loading: <Loading />,
  unauthorized: '/login',
}