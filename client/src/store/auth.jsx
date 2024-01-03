import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();




export const AuthProvider = ({children}) =>{

    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [services, setServices] = useState("");
    

    const storeTokenInLS= (serverToken)=>{
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    let isLoggedIn = !!token;


    // logout functionality
    const LogoutUser  =()=>{
        setToken("");
        return localStorage.removeItem("token");
    };


    //JWT AUTHENTICATION - to the currently loggedIN user 
    const userAuthentication = async()=>{
        try {
            const response = await fetch("http://localhost:8000/api/auth/user", {
                method: "GET",
                headers:{
                    Authorization: `Bearer ${token}`
                },
            });

            if(response.ok){
                const data = await response.json();
                console.log("user data", data.userData);
                setUser(data.userData);

            }
        } catch (error) {
            console.log("Error fetching user data");
        }
    }

    // FETCH SERVICES DATA FROM BACKEND
    const getServices = async()=>{
        try {
            const response = await fetch("http://localhost:8000/api/data/service",{
                method:"GET",
            });

            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        } catch (error) {
            console.log(`services frontend error ${error}`);
        }
    }

    useEffect(()=>{
        getServices();
        userAuthentication();
    }, []);

    return <AuthContext.Provider value={{isLoggedIn ,storeTokenInLS, LogoutUser, user, services}}>
        {children}
    </AuthContext.Provider>
};

export const useAuth = ()=>{
    const authContextValue = useContext(AuthContext);
    if(!authContextValue){
        throw new Error("userAuth used outside the Provider");
    }
    return authContextValue;
}

