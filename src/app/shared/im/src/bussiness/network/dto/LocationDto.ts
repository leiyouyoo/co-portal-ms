import { ContactDto } from './ContactDto';
import { ViewableType } from './ViewableType';

export interface LocationDto {
  [key: string]: any;
  name: string;
  city: string;
  streetAddress: string;
  streetAddress2: string;
  contactCount: number;
  id: string;
  region: any;
  regionId: number;
  zip: string;
  unlocode: string;
  timezone: string;
  contactIds: number[];
  tenantName?: string;
  isResidential?: any;
  isDock?: any;
  customerId?: string;
  longitude?: string;
  latitude?: string;
  isUnloading?: any;
  isAppointment?: any;
  isLiveUnload?: any;
  unloadCompanyId?: any;
  isLiveLoad?: any;
  loadCompanyId?: any;
  description: string;
  viewableType?: ViewableType;
  partnerId?: number;
  partnerIds: number[];
  countryId?: number;
  province?: string;
  country?: string;
  isShare?: boolean;
}
