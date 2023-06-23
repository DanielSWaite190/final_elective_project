import React, {useState, useContext } from "react";

const AuthContext = React.createContext()
// const AuthUpdateContext = React.createContext()

//Creating custom auth hook
// export const useAuth = () => {
//   return useContext(AuthContext);
// }

export function AuthProvider({children}) {
  const [auth, setAuth] = useState(null);

  return(
    <AuthContext.Provider value={{auth, setAuth}}>
      {children}
    </AuthContext.Provider>
  );
};

// export default AuthContext;