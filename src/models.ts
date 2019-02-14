export interface ICSModel {
  accordions: IAccordion[];
}

export interface IAccordion {
  name: string;
  label: string;
  prodacts: IProduct[];
  links: ILinks;
}

export interface IProduct {
  isHead?: boolean;
  isCentered?: boolean;
  photoUrl: string;
  emailUrl: string;
  name: string;
  position: string;
  vendors: string;
  email: string;
}

export interface ILinks {
    title: string;
    href: string;
    description: string;
}