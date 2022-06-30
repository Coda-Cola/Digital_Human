import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage'
import Navbar from './components/layout/Navbar';


import { useSession, signIn, signOut } from "next-auth/react"

export default function Index() {
  const { data: session } = useSession()

  if(session) {
    return <>
      <Navbar isAuthenticated={true} signIn={signIn} signOut={signOut}/>
      <Dashboard />
    </>
  }
  return <>
  <Navbar isAuthenticated={false} signIn={signIn} signOut={signOut}/>
  <LandingPage isAuthenticated={false}/>
  </>
}

export async function getServerSideProps() {
  return { props: {} }
}
