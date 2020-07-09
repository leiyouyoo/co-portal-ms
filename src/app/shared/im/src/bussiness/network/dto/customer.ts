export interface Customer {
  name:                  string;
  localizationName:      string;
  shortName:             string;
  localizationShortName: string;
  address:               string;
  localizationAddress:   string;
  tel:                   string;
  fax:                   string;
  keyWord:               string;
  cargoCanvassingType:   number;
  forwardingType:        number;
  homepage:              string;
  postalCode:            string;
  email:                 string;
  code:                  string;
  customerType:          number;
  status:                number;
  isSalesCustomer:       boolean;
  countryId:             string;
  country:               string;
  provinceId:            string;
  province:              string;
  cityId:                string;
  city:                  string;
  incoterms:             string;
  incotermsDisplay:      string;
  industry:              string;
  industryDisplay:       string;
  description:           string;
  isShare:               boolean;
  isOwner:               boolean;
  isPartner:             boolean; // local prop
  tenantId:              number;
  isRegistered:          boolean;
  locationCount:         number;
  contactCount:          number;
  customerLifeCycles:    CustomerLifeCycle[];
  id:                    string;
}

export interface CustomerLifeCycle {
  customerId:   string;
  creationTime: Date;
  status:       number;
  remark:       string;
  id:           string;
}
