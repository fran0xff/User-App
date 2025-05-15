import { useAuth } from "../hoohs/useAuth";
import { AuthContext } from "./AuthContext"



export const AuthProvider = ({ children }) => {

    const { login, handlerLogin, handlerLogout } = useAuth();
    return (
        <AuthContext.Provider value={
            {
               login,
               handlerLogin,
               handlerLogout 
            }
        } >
            {children}
        </AuthContext.Provider>
    )
}
