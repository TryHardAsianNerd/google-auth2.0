import logo from './logo.svg';
import './App.css';
import LoginButton from './components/login';
import LogoutButton from './components/logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = "711257370451-c51493ed6nr7qtdmjndn4snhdos9l14b.apps.googleusercontent.com";

function App() {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: 'email'
      })
    }

    gapi.load('client:auth2', start)
  }, [])


  return (
    <div className="App">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}

export default App;
