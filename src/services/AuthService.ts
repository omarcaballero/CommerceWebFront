const API_URL = import.meta.env.VITE_API_URL;

interface Credentials {
    email: string;
    password: string;
}

export async function loginUser(credentials:Credentials){
    try{
        const res = await fetch(
            `${API_URL}/auth/login`,{
                method: 'POST',
                headers : { 'Content-Type': 'application/json' },
                body: JSON.stringify(credentials),
            }
        );
        if (!res.ok) {
            const errorData = await res.json();
            throw new Error(errorData.message || 'Error en la autenticación');
        }

        return await res.json();
    }
    catch (error){
        console.error(error);
        throw error
    }
}