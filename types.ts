export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  url: string;
  thumbnailUrl: string;
}

export interface BeautyState {
  originalImage: string | null;
  generatedImage: string | null;
  products: Product[];
  isLoading: boolean;
  error: string | null;
  lookDescription: string | null;
}

export interface SharedData {
  desc: string;
  prods: Product[];
}