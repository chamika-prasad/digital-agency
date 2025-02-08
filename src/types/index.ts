export type NavLinkType = {
    name: string;
    path: string;
}

export type ProductType = {
    id:number;
    image: string;
    name: string;
}

export type ProductSubOptionsType = {
    id:number;
    name: string;
}

export type ProductsOptionsType = {
    id:number;
    name: string;
    subOptions: ProductSubOptionsType[];
}