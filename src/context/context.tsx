import { createContext, useEffect, useState } from "react";

interface UserContextType {
  user: any;
}

export const UserContext = createContext<any>(null);

export const UserProvider: any = ({ children }: any) => {


  const [user, setUser] = useState<any>(null);


  const pass_value = {
    user,
    setUser
  };

  return (
    <UserContext.Provider value={pass_value}>{children}</UserContext.Provider>
  );
};
