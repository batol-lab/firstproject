export interface ResponceRecipes {
  recipes: Recipestype[];
  total: number;
  skip: number;
  limit: number;
}
 export interface Recipestype {
  name: string;
  ingredients: string[];
  instructions: string[];
  image: string;
  rating: number;
}