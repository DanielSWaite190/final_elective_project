import React, {useState, useContext } from "react";

const AuthContext = React.createContext()
const UpdateAuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext);
}

export const useUpdateAuth = () => {
  return useContext(UpdateAuthContext);
};

export const AuthProvider = ({value, children}) => {
  const [auth, setAuth] = useState(value);
  return(
    <AuthContext.Provider value={auth}>
      <UpdateAuthContext.Provider value={setAuth}>
        {children}
      </UpdateAuthContext.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;