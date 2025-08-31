export interface TecherInfoType {
  name: string;
  lname: string;
  phone: string;
  email: string;
  skills: string;
  mark: string;
  [key: string]: string | number;
}


export const TecherInfo: TecherInfoType[] = [

    {
    name: "amir",
    lname: "shraizi",
    phone: "00000000000",
    email: "gma;@example.com",
    skills: "react",
    mark: "144-05-02",
  },
];