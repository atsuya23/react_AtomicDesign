import { createContext } from "react";

export const UserContext = createContext({});

export const UserProvider = (props) => {
  const { children } = props;
  const contextName = "Curry";
  return (
    <UserContext.Provider valuE={{ contextName }}>
      {children}
    </UserContext.Provider>
  );
};
