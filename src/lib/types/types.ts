export interface LoginCredentials {
    email: string;
    password: string;
}

export interface LoginResponse {
    message: string;
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
    };
}

export interface BrandFormProps{
    initialValue?: string;
    onSubmit: (brand: string, id?:number) => void;
    id?:number;
}

export interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
}

export interface CategoryFormProps {
    onSubmit: (category: string) => void;
}

export interface ProductFormProps {
    onSubmit: (product: {
        name: string;
        description: string;
        price: number;
        stock: number;
        brand_id: string;
        category_id: string;
        image: File | null;
    }) => void;
}

export interface BrandResponse {
    message: string,
    brand:{
        name: string,
        active : boolean,  
        id: number,
    }
}

export interface BrandBody{
    id?: number,
    name?:string
}