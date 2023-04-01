import { useState, createContext, useEffect, useContext } from "react";
import {fetchMe,fetchLogout} from '../api/api';


const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const me = await fetchMe();
        setLoggedIn(true);
        setUser({username:me.username,role:me.role});
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    })();
  }, []);

  const login = (data) => {
    setLoggedIn(true);
    setUser({username:data.username,role:data.role});
  };

  const logout = async (callback) => {
    setLoggedIn(false);
    setUser(null);
    await fetchLogout();
    callback();
  };

  const values = {
    loggedIn,
    user,
    login,
    logout,
  };

  if (loading) {
    return (
      <div>Yükleniyor...</div>
    );
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

const useAuth = () => useContext(AuthContext);
export { AuthProvider, useAuth };

