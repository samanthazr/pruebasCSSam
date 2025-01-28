import { createContext, ReactNode, useContext, useState,  } from "react";

interface AuthContextType {
    token: string | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null >(null);

export const AuthProvider: React.FC<{ children: ReactNode }>  = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem('token'));


    const login = (newToken: string) => {
        localStorage.setItem('token', newToken);
        setToken(newToken);
    }

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
    }

    return (
        <AuthContext.Provider value={{token, login, logout}}>
            {children }
        </AuthContext.Provider>
    );


}

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) {
        throw new Error(`useAuth debe usarse dentro de un AuthProvider`)
    }
    return context;
}