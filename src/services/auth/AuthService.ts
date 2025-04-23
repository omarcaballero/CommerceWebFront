import { fetchClient } from "../../lib/helper/fetchClient";
import { LoginCredentials } from "../../lib/types/types";
import { LoginResponse } from "../../lib/types/types";



export async function loginUser(credentials:LoginCredentials): Promise<LoginResponse> {
    console.log('Credenciales en login:', credentials);
   return fetchClient("auth/login",{
        method:"POST",
        body: JSON.stringify(credentials),
    }
   )
}

export async function logoutUser(token:string):Promise<void>{
    return fetchClient("auth/logout",{
        method:"POST"
    },token)
}