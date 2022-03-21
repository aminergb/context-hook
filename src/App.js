import logo from './logo.svg';
import './App.css';
import { Display } from './components/Display'
import React from 'react';
import { ContextThemeProvider } from './hooks/ContextProvider';


//pas de context ici
function App() {


  return (
    <>
      <ContextThemeProvider>
        <Display />
      </ContextThemeProvider>

    </>
  );
}

export default App;
