import { useState } from "react";
import { AuthContext } from "./AuthContext";

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  return (
    <AuthContext
      value={{
        auth,
        setAuth,
      }}
    >
      {children}
    </AuthContext>
  );
};

export default AuthContextProvider;
