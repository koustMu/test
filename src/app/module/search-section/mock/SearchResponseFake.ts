import {ImageResource, ProductCardResource, ProductType, TagResource} from "../../core/api/SearchResponse";

class SearchResponseFake {
  filters: Map<string, FilterResourceFake[]>
  results: ProductCardResourceFake[];

  constructor(filters: Map<string, FilterResourceFake[]>, results: ProductCardResourceFake[]) {
    this.filters = filters || new Map<string, FilterResourceFake[]>();
    this.results = results || [];
  }
}


class FilterResourceFake {
  value: string;
  count: number;

  constructor(value: string, count: number) {
    this.value = value || "";
    this.count = count || 0;
  }
}

export class ProductCardResourceFake implements ProductCardResource {
  deals?: DealsFake;
  favorite: boolean;
  name: string;
  price: PriceResourceFake;
  productId: string;
  productType: ProductType;
  ratingDetails?: ProductRatingResourceFake;
  specialCard?: boolean;
  tags?: TagResourceFake[];
  thumbnail?: ImageResourceFake;
  vendorId: string;
  vendorName: string;

  constructor() {
    this.deals = new DealsFake("badgeName", new Date(), ['Lo stai perdendo!']);
    this.favorite = false;
    this.name = "Nome del tè molto lunga così riproduciamo il caso peggiore (50x4g)";
    this.price = new PriceResourceFake("USD", 22.4, 20, 89);
    this.productId = "9230930933";
    this.productType = ProductType.TEA;
    this.ratingDetails = new ProductRatingResourceFake(4.7, 38, 0);
    this.specialCard = false;
    this.tags = [
      new TagResourceFake(TagType.ELEVATION, "2000"),
      new TagResourceFake(TagType.SEASON, "Autumn"),
      new TagResourceFake(TagType.ORIGIN, "Malaysia"),
      new TagResourceFake(TagType.TYPE, 'Matcha'),
      new TagResourceFake(TagType.YEAR, '1920'),
    ];
    this.thumbnail = new ImageResourceFake("209320943", "Descrizione thumbnail immagine", "http://www.google.it");
    this.vendorId = "98237298348";
    this.vendorName = "The Tea Guru";

  }

  // constructor(deals: DealsFake, favorite: boolean, name: string, price: PriceResourceFake, productId: string, productType: ProductTypeFake, ratingDetails: ProductRatingResourceFake, specialCard: boolean, tags: TagResourceFake[], thumbnail: ImageResourceFake, vendorId: string, vendorName: string) {
  //   this.deals = deals || new DealsFake("", new Date(), []);
  //   this.favorite = favorite || false;
  //   this.name = name || "";
  //   this.price = price || new PriceResourceFake("", 0, 0, 0);
  //   this.productId = productId || "";
  //   this.productType = productType || ProductTypeFake.TEA;
  //   this.ratingDetails = ratingDetails || new ProductRatingResourceFake(0, 0, 0);
  //   this.specialCard = specialCard || false;
  //   this.tags = tags || [];
  //   this.thumbnail = thumbnail || new ImageResourceFake("", "");
  //   this.vendorId = vendorId || "";
  //   this.vendorName = vendorName || "";
  // }


}

enum ProductTypeFake  {
  TEA, TEAWARE
}

export class DealsFake {
  badge?: string;
  expiration?: Date;
  sellingAlerts?: string[];


  constructor(badge: string, expiration: Date, sellingAlerts: string[]) {
    this.badge = badge || "";
    this.expiration = expiration || new Date(Date.now());
    this.sellingAlerts = sellingAlerts || [];
  }
}

export class PriceResourceFake {
  currency: string;
  discountedPrice: number;
  percentageDiscount: number;
  price: number;


  constructor(currency: string, discountedPrice: number, percentageDiscount: number, price: number) {
    this.currency = currency || "";
    this.discountedPrice = discountedPrice || 0;
    this.percentageDiscount = percentageDiscount || 0;
    this.price = price || 0;
  }
}

export class ProductRatingResourceFake {
  avg: number;
  totalReview: number;
  totalScore: number;

  constructor(avg: number, totalReview: number, totalScore: number) {
    this.avg = avg || 0;
    this.totalReview = totalReview || 0;
    this.totalScore = totalScore || 0;
  }
}

export class TagResourceFake implements TagResource {
  type: TagType;
  value: string;


  constructor(type: TagType, value: string) {
    this.type = type || TagType.ELEVATION;
    this.value = value || "";
  }
}

export enum TagType {
  ORIGIN, ELEVATION, TYPE, YEAR, SEASON
}

export class ImageResourceFake implements ImageResource {
  id: string;
  name: string;
  url: string;

  constructor(id: string, name: string, url: string) {
    this.id = id || "";
    this.name = name || "";
    this.url = url || "";
  }
}


/* ============================== 1° FILTRI ==============================  */

let filterResourceFake1: FilterResourceFake = {
  count: 1,
  value: "ch"
}

let filterResourceFake2: FilterResourceFake = {
  count: 1,
  value: "silver needle"
}

let filterResourceFake3: FilterResourceFake = {
  count: 2010,
  value: "1"
}

let filterResourceFake4: FilterResourceFake = {
  value: "spring",
  count: 1
}

let filterResourceFake5: FilterResourceFake = {
  value: "white",
  count: 1
}

let filterResourceFake6: FilterResourceFake = {
  value: "tea",
  count: 1
}

let filtersFake = new Map<string, FilterResourceFake[]>([
  ["country", [filterResourceFake1]],
  ["variety", [filterResourceFake2]],
  ["year", [filterResourceFake3]],
  ["season", [filterResourceFake4]],
  ["type", [filterResourceFake5]],
  ["productType", [filterResourceFake6]]
]);


/* ============================== 2° PRODUCT CARD ==============================  */


var dealsFake: DealsFake = {
  badge: 'badgeNmae',
  expiration: new Date(),
  sellingAlerts: [],
};

let tagResourcefake: TagResourceFake[] = [
  {
    type: TagType.ELEVATION,
    value: "2010",
  },
  {
    type: TagType.ELEVATION,
    value: "2020"
  },
  {
    type: TagType.SEASON,
    value: "Spring"
  }
];


export let productCardResourceFake: ProductCardResourceFake = {
  deals: dealsFake,
  favorite: false,
  name: "*2018 ‘Guru Raw Puerh’ Spring Da Shu Sample Pack (5 x 20g)",
  price: {
    price: 62.7,
    currency: "EUR",
    discountedPrice: 0,
    percentageDiscount: 0
  },
  productId: "5e98bff7e4698b28c8756c2b",
  productType: ProductType.TEA,
  ratingDetails: {
    avg: 4.7,
    totalReview: 388,
    totalScore: 4.7,
  },
  specialCard: false,
  tags: tagResourcefake,
  thumbnail: {
    "id": "82380909323",
    "url": "https://theteaguru.co.uk/wp-content/uploads/2019/02/allcakes-1.jpg",
    "name": "foto_vendor"
  },
  vendorId: "23534i543oi5",
  vendorName: "The Tea Guru",
}


export let searchResponseFake = new SearchResponseFake(filtersFake, [productCardResourceFake]);
