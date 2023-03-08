export interface Recipee {
    id: number;
    title: string;
    image: string;
    imageType: string;
}

export interface RecipeeData {
    results: Recipee[];
    offset: number;
    number: number;
    totalResults: number;
}