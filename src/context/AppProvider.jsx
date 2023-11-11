import { createContext, useReducer, useContext } from 'react'
import reducer,{ initialState } from './reducer'

const AppContext = createContext()

const AppProvider = ({children}) => {
  return (
    <AppContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </AppContext.Provider>
  )
}

export const useValue = () => useContext(AppContext)

export default AppProvider