import { toast } from "sonner";
import api from "../api/axios";

export class appScript{
    constructor(){
        this.user
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
}