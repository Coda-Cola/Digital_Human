import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage'
import Navbar from './components/layout/Navbar';

export default function Index() {
  /**@todo add authentication logic */
  // const [isAuthenticated] = authUser() 

  const isAuthenticated = false;
  return (
    <>
      <Navbar isAuthenticated={isAuthenticated} />
      {
        isAuthenticated ? 
        <Dashboard /> : 
        <LandingPage isAuthenticated={isAuthenticated}/>
      }
      
    </>
  );
}
