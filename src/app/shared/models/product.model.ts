export interface ProductModel {
    id: number;
    name: string;
    imageUrl: string;
    description: string;
    "price": number,
    "type": {
        "id": number,
        "name": string
    }
}
