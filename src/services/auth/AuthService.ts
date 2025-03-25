import { fecthClient } from "../../lib/helper/fetchClient";
import { LoginCredentials } from "../../lib/types/types";
import { LoginResponse } from "../../lib/types/types";



export async function loginUser(credentials:LoginCredentials): Promise<LoginResponse> {
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