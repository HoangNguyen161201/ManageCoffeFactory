import { createContext, useContext, ReactNode, useState } from 'react';

const AppContext = createContext<{
    isDark: boolean,
    setIsDark: any
}>({
    isDark: false,
    setIsDark: ()=> {}
});

export function AppWrapper({ children }: {children: ReactNode}) {
  const [isDark, setIsDark] = useState(false)
  return (
    <AppContext.Provider value={{
        isDark,
        setIsDark
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
