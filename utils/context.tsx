import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from 'react'

interface IContextState {
  isDark: boolean
  isLoading: boolean
  isOpenMenu: boolean
  namePage: string
}

const AppContext = createContext<{
  contextState: IContextState,
  setContextState: Dispatch<SetStateAction<IContextState>>
}>({
    contextState: {
      isDark: false,
      isLoading: true,
      isOpenMenu: false,
      namePage: 'Trang chủ'
    },
    setContextState: ()=> {}
})



export function AppWrapper({ children }: { children: ReactNode }) {
    const [contextState, setContextState] = useState<IContextState>({
      isLoading: true,
      isDark: false,
      isOpenMenu: false,
      namePage: 'Trang chủ'
    })
  
    return (
        <AppContext.Provider
            value={{
              contextState,
              setContextState
            }}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}
