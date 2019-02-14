export interface ICSModel {
  accordions: IAccordion[];
}

export interface IAccordion {
  name: string;
  prodacts: IProduct[];
}

export interface IProduct {
  isHead: boolean;
  photoUrl: string;
  emailUrl: string;
  name: string;
  position: string;
  vendors: string;
  email: string;
}