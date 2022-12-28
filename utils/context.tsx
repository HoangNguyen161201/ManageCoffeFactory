import { createContext, useContext, ReactNode, useState } from 'react';

const AppContext = createContext<{
    isDark: boolean,
    setIsDark: any,
    isLoading: boolean,
    setIsLoading: any,
    isOpenMenu: boolean,
    setIsOpenMenu: any
}>({
    isDark: false,
    setIsDark: ()=> {},
    isLoading: true,
    setIsLoading: ()=> {},
    isOpenMenu: true,
    setIsOpenMenu: ()=> {}
});

export function AppWrapper({ children }: {children: ReactNode}) {
  const [isDark, setIsDark] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [isOpenMenu, setIsOpenMenu] = useState(false)
  return (
    <AppContext.Provider value={{
        isDark,
        setIsDark,
        isLoading,
        setIsLoading,
        isOpenMenu,
        setIsOpenMenu
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
