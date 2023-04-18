export interface Student {
  name: Name;
  dob: string;
  place: string;
  first_lang: string;
  address: Address;
  fatherDetails:Parent;
  motherDetails:Parent;
  contactDetails:Array<Contact>;
}
export interface Name {
  fname: string;
  lname: string;
  mname: string;
}
export interface Address {
  city: string;
  state: string;
  country: string;
  pin: string;
}
export interface Contact {
  relation: string;
  number: string;
}
export interface Parent {
  fullname: Name;
  email: string;
  qualification: null;
  proffession: null;
  designation: null;
  phone: string;
}