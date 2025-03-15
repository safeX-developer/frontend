import { toast } from "sonner";
import api from "../api/axios";
import axios from "axios";
import {backendUrl} from "../api/axios"
import { getCookie } from "../api/cookies";

export class appScript{
    constructor(wallet){
        this.wallet = wallet
        this.user
        this.url = backendUrl()
        this.token = getCookie("token")
    }
    copyToClipboard(text) {
        navigator.clipboard.writeText(text).then(() => {
            toast.success("copied")
        }).catch(err => {
            toast.error("Error trying while to copy")
        });
    }
    referalUrl(code) {
        let path = window.location.origin + "/ref/" + code
        return path ;
    }
    async referalCodeRegistration(code){
        localStorage.setItem("ref", code)
        location.href = "/"
    }
    async resetProfileDetails(data){
        let load = true
        let response = ""
        const path = "/api/profile/change-details"
        await axios.post(this.url+path, data,{
            headers:{
                Authorization: `Bearer ${this.token}`
            }
        })
        .then((res)=>{
            response = res.data
            load = false
            toast.success("Updated successfully")
        })
        .catch((error)=>{
           this.errorHandler(error)
           load = false
        })
        return {load, response}
    }
    async securitySettings(data){
        console.log(data)
    }
    errorHandler(error){
        if (error.response) {
            console.error('API Error:', error.response.data);
            toast.error(error.response.data?.error)
          } else if (error.request) {
            console.error('Network Error:', error.request);
            toast.error(error.request)
          } else {
            console.error('Error:', error.message);
            toast.error(error.message)
          }
    }
}