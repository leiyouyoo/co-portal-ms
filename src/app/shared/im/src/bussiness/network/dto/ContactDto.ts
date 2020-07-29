import { ViewableType } from './ViewableType';

export interface ContactDto {
  surname: string;
  name: string;
  surnameLocalization: string;
  nameLocalization: string;
  phone: string;
  email: string;
  remark?: string;
  tel?: any;
  position?: any;
  msn?: any;
  fax?: any;
  isMaster: boolean;
  customerId: number;
  partnerId?: string;
  userId: number;
  userInfo?: any;
  id: string;
  locations?: any[];
  viewableType;
  isActive: boolean;
  companyName: string;
  isVerifiedCompany: boolean;
  isShare?: boolean;
}
