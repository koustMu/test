import {BaseResponse} from './response.interface';
import {Image} from './ProductCardResponse';

export interface ArticlesResponse extends BaseResponse {
  articles: Article[];
}

export interface Author {
  email: string;
  name: string;
  type: string;
  vendorId: string;
}


export interface Article {
  author: Author;
  category: string;
  coverImage: Image;
  id: string;
  tags: string[];
  title: string;
}


