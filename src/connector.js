import axios from "axios"
import { toast } from "sonner"
const backendUrl = ()=>{
    let localhostUrl = "http://localhost:8000"
    let remoteUrl = "https://cat3poker-d07112c3d84c.herokuapp.com"
    const _api = location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? localhostUrl : remoteUrl
    return _api
}

export default class Connector{
    constructor(){
        this.wallect = "6872862"
        this.user = ""
        this.url = backendUrl()
    }
    async register(data){
        if(!data?.walletAddress){
          return  toast.error("Something went wrong, Please return to home page")
        }
        let path = "/api/profile/register"
        await axios.post(this.url + path, {
            register: data
        })
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    async userProfile(address){
        if(!address) return
        let path = "/api/profile/user/"+ address?.address
        await axios.get(this.url + path)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            if(err.response.data.error === "User not found"){
             return   window.location.href = "/p2p/register"
            }
            toast.error(err.response.data.error)
            console.log(err.response.data.error)
        })
    }
}