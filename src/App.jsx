import './App.css'
import Home from './Component/Home/Home'
import CurrencyContext from './Context/CurrencyContext'
import { useState } from 'react';

function App() {
  const [currency,setCurrency] = useState('usd');

  return (
    <>
      <CurrencyContext.Provider value={{currency,setCurrency}}>
        <Home />
      </CurrencyContext.Provider>
    </>
  )
}

export default App
