import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store.js'
import { AppContextProvider } from './context/AppContext.jsx'
import { Provider } from 'react-redux'
import './i18n.js'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContextProvider>
        <App />
      </AppContextProvider>      
    </Provider>
  </React.StrictMode>,
)
