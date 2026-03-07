 export interface Productstype {
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
}

 export interface ResponceProducts {
  products: Productstype[];
  limit: number;
  skip: number;
  total: number;
}
