// Autenticación
export interface LoginCredentials {
    username: string;
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

// Formularios de productos, categorías, marcas
export interface BrandFormProps {
    initialValue?: string;
    onSubmit: (brand: string, id?: number) => void;
    id?: number;
}

export interface LoginFormProps {
    onSubmit: (email: string, password: string) => void;
}

export interface CategoryFormProps {
    initialValue?: string;
    onSubmit: (category: string, id?: number) => void;
    id?: number;
}

export interface ProductFormProps {
    initialValue?: {
        name: string;
        description: string;
        price: string;
        stock: number;
        brand?: BrandBody;
        category?: CategoryBody;
        image: File | null;
    };
    onSubmit: (product: {
        name: string;
        description: string;
        price: string;
        stock: number;
        brand?: BrandBody;
        category?: CategoryBody;
        image: File | null;
    }) => void;
    id?: number;
}

// Respuestas de API para marcas y categorías
export interface BrandResponse {
    message: string;
    brand: {
        name: string;
        active: boolean;
        id: number;
    };
}

export interface CategoryResponse {
    message: string;
    category: {
        name: string;
        active: boolean;
        id: number;
    };
}

// Cuerpo de objetos de marcas, categorías y productos
export interface BrandBody {
    id?: number;
    name?: string;
}

export interface CategoryBody {
    id?: number;
    name?: string;
}

export interface ProductBody {
    id?: number;
    name?: string;
    description?: string;
    price?: string;
    stock?: number;
    brandName?: string;
    categoryName?: string;
    imageUrl?: string | null;
    active?: boolean;
}

// Respuesta de productos con paginación
export interface ProductResponse {
    message: string;
    products: ProductBody[];
    meta: {
        current_page: number;
        last_page: number;
        total: number;
    };
}

// Propiedades del header en el dashboard
export interface HeaderDashboardProps {
    onLogout: () => void;
}
