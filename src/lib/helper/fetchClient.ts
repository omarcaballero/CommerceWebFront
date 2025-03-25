
const API_URL= import.meta.env.VITE_API_URL;


export async function fetchClient<T>(
    endpoint:string,
    options: RequestInit = {},
    token?: string,
):Promise<T>
{
    const url = `${API_URL}/${endpoint}`;
    const defaultHeaders = {
        "Content-Type": "application/json",
        "Accept": "application/json", 
        ...(token && { Authorization: `Bearer ${token}` }), 
    };
    try{
        const response = await fetch(url, { ...options, headers: { ...defaultHeaders, ...options.headers } });
        
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
        }

        return response.json();
    }
    catch (error){
        console.error("Fetch error",error);
        throw error;
    }
}