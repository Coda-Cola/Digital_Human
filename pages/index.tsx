import LandingPage from './components/LandingPage'

export default function Index() {
  /**@todo add authentication logic */
  // const [isAuthenticated] = authUser() 

  const isAuthenticated = false;
  return (
    <>
      <LandingPage isAuthenticated={isAuthenticated}/>
    </>
  );
}
