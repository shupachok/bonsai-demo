import { useEffect } from "react";
import { createContext, useState } from "react";
import { onAuthChangeListener,createUserDocumentFromAuth } from "../firebase/firebase.utils";
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null
})

export const UserProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser }
    useEffect(() => {
        const unsubscribe = onAuthChangeListener(async (user) => {
            if (user){
               await createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });
        return unsubscribe;
    }, [])
    return (<UserContext.Provider value={value}>{children}</UserContext.Provider>);
}