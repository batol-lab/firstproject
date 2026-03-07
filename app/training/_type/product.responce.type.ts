 export interface ProductResponce {
  products: ProductType[];
  total: number;
  skip: number;
  limit: number;
}
 export interface ProductType {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  thumbnail: string;
  images: string[];
}
