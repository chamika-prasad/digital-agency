export type NavLinkType = {
    name: string;
    path: string;
}

export type ProductType = {
    id: number|null;
    image: string|null;
    name: string|null;
    ingredients: string|null;
    packSizes: string|null;
}

export type ProductSubOptionsType = {
    id: number;
    name: string;
}

export type ProductsOptionsType = {
    id: number;
    name: string;
    subOptions: ProductSubOptionsType[];
}

export type ProductDetailsType = {
    products: ProductType[] | undefined,
    discription: string | undefined,
    middleImage: string | undefined
}

export type ProductStateType = {
    isProductShow: boolean;
    product: ProductType;
}