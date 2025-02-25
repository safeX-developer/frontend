import { createContext, useEffect, useState } from "react";
import { toast } from "sonner"
import { useActiveAccount } from "thirdweb/react";
import api from "../api/axios.js";
import { setCookie } from "../api/cookies.js";

export const AppContext = createContext(); 
export const AppContextProvider = ({ children }) => {
    const [ user, setUser ] = useState(null)
    const wallet = useActiveAccount()

    const register = async(data) =>{
        if(!data?.userId){
          return toast.error("Something went wrong, Please return to home page")
        }
        let path = "/api/profile/register"
         const res = await api.post(path, {
            register: data
        })
        setUser(res.user)
        setCookie("token", res.token)
    }

    const userProfile = async() => {
        let result = true
        if(!wallet?.address) return
        let path = "/api/profile/user/"+ wallet?.address
        const response = await api.get(path)
        if(response.error){
            result =  false
        }else{
            setUser(response.user)
            setCookie("token", response.token)
        }
        return result
    }

    const getRewards = async()=>{
        let path = "/api/rewards/daily"
        const result = await api.get(path)
        return {result}
    }

  return (
    <AppContext.Provider value={{ getRewards, userProfile, register , user, wallet: wallet?.address}}>
      {children}
    </AppContext.Provider>
  );
};