import { fecthClient } from "../../lib/helper/fetchClient";

interface Credentials {
    email: string;
    password: string;
}

export async function loginUser(credentials:Credentials){
    console.log('en service')
   return fecthClient("auth/login",{
        method:"POST",
        body: JSON.stringify(credentials),
    }
   )
}

export async function logoutUser(token:string){
    console.log('logout')
    return fecthClient("/auth/logout",{
        method:"POST",
        body: JSON.stringify(token)
    })
}