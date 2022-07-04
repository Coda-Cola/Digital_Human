import { useEffect, useContext } from 'react'
import { useRouter } from 'next/router'
import { AuthContext } from './context/auth-context'

function Dashboard() {
  const router = useRouter()
  const authContext = useContext(AuthContext)

  useEffect(() => {
    authContext?.isAuthenticated() ? router.push("/dashboard") : router.push("/api/auth/login")
  }, [])
  return (
    <div>Dashboard</div>
  )
}

export default Dashboard