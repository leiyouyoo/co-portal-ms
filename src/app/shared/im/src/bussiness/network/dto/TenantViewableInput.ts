import { ViewableType } from './ViewableType';

export interface TenantViewableInput {
  viewableType: ViewableType;
  partnerIds: number[];
  id: number;
}
