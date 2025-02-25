import axios from "axios"
import { toast } from "sonner"
import { useAuthContext } from "./context/useContext"
const backendUrl = ()=>{
    let localhostUrl = "http://localhost:8000"
    let remoteUrl = "https://safex.onrender.com"
    const _api = location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? localhostUrl : remoteUrl
    return _api
}

export default class Connector{
    constructor(){
        this.wallect = "6872862"
        this.user = ""
        this.url = backendUrl()
        this.dispatch = useAuthContext();
    }
    async register(data){
        if(!data?.userId){
          return  toast.error("Something went wrong, Please return to home page")
        }
        let path = "/api/profile/register"
        await axios.post(this.url + path, {
            register: data
        })
        .then((res)=>{
            return window.location.href = "/p2p/trade/buy"
        })
        .catch((err)=>{
            toast.error(err.response.data.error)
        })
    }
    async userProfile(address){
        if(!address?.address) return
        let path = "/api/profile/user/"+ address?.address
        await axios.get(this.url + path)
        .then((res)=>{
            this.dispatch?.dispatch({ type: "LOGIN", payload:  res.data});
        })
        .catch((err)=>{
            console.log(err)
            if(err.response.data.error === "User not found"){
                toast.warning("Authenticate your new account with your details")
             return window.location.href = "/p2p/register"
            }
            toast.error(err.response.data.error)
            console.log(err.response.data.error)
        })
    }
    async getRewards(){
        let result = null
        let path = "/api/rewards/daily"
        await axios.get(this.url + path)
        .then((res)=>{
            result = res.data
        })
        .catch((err)=>{
            toast.error(err.response.data.error)
        })
        return {result}
    }
}