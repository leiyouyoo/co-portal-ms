export interface quoteInputParams {
  Status?: Array<number>;
  FreightMethodTypes?: string;
  CreatorUserIds?: Array<number>;
  'location.Id'?: string;
  'Location.Country'?: string;
  'Location.Province'?: string;
  'Location.City'?: string;
  'Location.Name'?: string;
  'Location.historyDataType'?: number;
  locationId?: string;
  SortingValue?: string;
  Sorting?: string;
  searchKey?: string;
  MaxResultCount?: number;
  SkipCount?: number;
  OwnerIds?: string;
  OwnerList?: any;
  isAir?: boolean;
  isOcean?: boolean;
}
