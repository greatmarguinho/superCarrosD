import Formulario from "./componentes/Formulario";
import TokenContext from './auth';
import React from 'react';
import Login from './pages/Login/index'

function App() {
  
    const [token, setToken] = React.useState('');

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {/* Your app components */}
      <Login />
    </TokenContext.Provider>
  );
}
  


export default App;
