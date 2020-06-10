import {Params} from "@angular/router";

export interface SearchParams extends Params {
  country?: string[];
  elevation?: number;
  manufacture?: string;
  material?: string;
  maxPrice?: number;
  minPrice?: number;
  organic?: boolean;
  page?: number;
  pressed?: boolean;
  query?: string;
  roasted?: boolean;
  sample?: boolean;
  searchType?: SearchType;
  season?: Season;
  type?: ProductType;
  variety?: string[];
  vendorId?: string;
}

export enum ProductType {
  GREEN = 'green',
  WHITE = 'white',
  YELLOW = 'yellow',
  BLACK = 'black',
  OOLONG = 'oolong',
  PUERH = 'puerh',
  TEAPOT = 'teapot',
  GAIWAN = 'gaiwan',
  TEASET = 'teaset',
  PITCHER = 'pitcher',
  CUP = 'cup',
  MUG = 'mug',
  TRAY = 'tray',
  ACCESSORY = 'accessory',
  UNKNOWN = ''
}

export enum Season {
  SPRING = 'spring',
  AUTUMN = 'autumn',
  WINTER = 'winter',
  SUMMER = 'summer'
}

export enum SearchType {
  TEA = 'tea', TEAWARE = 'teaware'
}
