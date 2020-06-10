export enum Filter {
  SEARCH_TYPE = "searchType",
  QUERY = 'query',
  TYPE = "type",
  VARIETY = "variety",
  ROASTED = "roasted",
  PRESSED = "pressed",
  COUNTRY = "country",
  ELEVATION = "elevation",
  SEASON = "season",
  YEAR = "year",
  PRICE_PER_GRAM = 'price_gram',
  PRICE_PER_GRAM_MIN_PRICE = "minPrice",
  PRICE_PER_GRAM_MAX_PRICE = "maxPrice",
  CERTIFIED_ORGANIC = "organic",
  SAMPLE_AVAILABLE = "sample",
  SORT_BY = 'sort'
}

// servono per segnalare che il filtro 'X' va disapplicato
export enum FilterValue {
  UNSET_FILTER = 999999,
  ALL = 'all',
  NONE = 'none',
}

