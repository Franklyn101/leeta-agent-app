import React, { createContext, useState, ReactNode } from 'react';

// Define the shape of your context
type ContextType = {
  state: boolean;
  setState: React.Dispatch<React.SetStateAction<boolean>>;
  userNum: string;
  setUserNum: React.Dispatch<React.SetStateAction<string>>;
};

// Create a Context with a default value
export const MyContext = createContext<ContextType | undefined>(undefined);

// Define the Provider component
type MyProviderProps = {
  children: ReactNode;
};

export const MyProvider = ({ children }: MyProviderProps): JSX.Element => {
  const [state, setState] = useState<boolean>(false); // ✅ state is now a boolean
  const [ userNum, setUserNum ] = useState<string>('');
  return (
    <MyContext.Provider value={{ state, setState, userNum, setUserNum }}>
      {children}
    </MyContext.Provider>
  );
};
