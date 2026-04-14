export interface ResponceArticles {
  status: string;
  totalResults: number;
  articles: ArticleType[];
}
export interface ArticleType {
  author: string;
  title: string;
  description: string;
  content: string;
  urlToImage: string;
  url: string;
  publishedAt: string;
  source: {
    name: string;
  };
}
