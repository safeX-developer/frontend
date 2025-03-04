import { createContext, useEffect, useState } from "react";
import { toast } from "sonner"
import { useActiveAccount } from "thirdweb/react";
import api from "../api/axios.js";
import { setCookie } from "../api/cookies.js";
import { appScript } from "./app.js";

export const AppContext = createContext(); 
export const AppContextProvider = ({ children }) => {
    const [ user, setUser ] = useState(null)
    const [ rewardResults, setrewardResults ] = useState(null)
    const wallet = useActiveAccount()
    const _app = new appScript(wallet)
    const ref = localStorage.getItem("ref")

    const register = async(data) =>{
        if(!data?.userId){
          return toast.error("Something went wrong, Please return to home page")
        }
        let path = "/api/profile/register/"+ ref
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

    const getRewards = async(wallet)=>{
        if(!wallet) return {result: []}
        let path = "/api/rewards/daily"
        const result = await api.get(path)
        let reward = result.reward
        let user = result.user
        const key = {reward, ...user}
        setrewardResults(key)
    }

    const claimRecord = (async(data)=>{
      let path = "/api/rewards/claim";
      const result = await api.post(path, data)
      setrewardResults(result)
    })

  return (
    <AppContext.Provider value={{ getRewards, userProfile, register ,claimRecord,
     user, wallet: wallet?.address, rewardResults, _app}}>
      {children}
    </AppContext.Provider>
  );
};