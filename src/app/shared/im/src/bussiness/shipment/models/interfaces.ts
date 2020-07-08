import { TransportationMode } from '../class/TransportationMode';

export interface GetAllParam {
  searchText?: string;
  IsDelivered?: boolean;
  TransportationMode?: TransportationMode;
  Sorting?: string;
  MaxResultCount?: number;
  SkipCount?: number;
  Filters?: any[];
  FreightMethodTypes?: number[];
}
