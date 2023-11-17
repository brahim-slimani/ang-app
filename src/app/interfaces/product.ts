export interface Product {
    id: Number;
    title: String;
    description: String;
    price: number | null;
    discountPercentage: Number | null;
    rating: Number | null;
    stock: Number | null;
    brand: String;
    category: String;
    thumbnail: String;
    images: Array<String>;
}

export const productDefault: Product = {
    id: 0,
    title: '',
    description: '',
    price: null,
    discountPercentage: null,
    rating: 0,
    stock: null,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
}
