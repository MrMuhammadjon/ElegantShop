'use strict'

import { createContext } from "react"

export const AppContext = createContext();

export const AppContextProvider = ({children}) =>{

  const contextValue = {}

  return(
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  )
}

export const useAppContext = () => useAppContext(AppContext)